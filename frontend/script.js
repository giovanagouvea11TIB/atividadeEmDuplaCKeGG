import express from "express"
import mysql2 from "mysql2"

const app = express()

app.use(express.json())

app.get("/", (req,res) =>{
    res.json({
        message:"Servidor ta on,chama bb"
    })
})

app.post("/criar-filme", (req,res) =>{
    const {id, titulo, genero, duracao, classificacaoEtaria} = req.body

    const insertCommand = "INSERT INTO filmes_GiovanaGouveaCinthiaKarolina ( titulo, genero, duracao, classificacaoEtaria) VALUES (?,?,?,?)"

    sql.query(insertCommand,[titulo, genero, duracao, classificacaoEtaria],(error)=>{
        if (error) {
            console.log(error)
            return
        }
        res.status(201).json({
            message: "Filme criado com sucesso!"
        })
    })
})

app.get("/todos-filmes", (req, res) => {
    const selectCommand = "SELECT * FROM filmes_GiovanaGouveaCinthiaKarolina"

    sql.query(selectCommand, (error, data) => {
        if (error) {
            console.log(error)
            return
        }

        res.json(data)
    })
})


app.delete("/deletar-filme/:id", (req, res) => {
    const { id } = req.params

    const deleteCommand = "DELETE FROM filmes_GiovanaGouveaCinthiaKarolina WHERE id=?"

    sql.query(deleteCommand, [id], (error) => {
        if(error){
            console.log(error)
            return
        }

        response.status(201).json({
            message: "Filme apagado com sucesso"
        })
    })
})





app.put ("/editar-filme/:id", (req, res) => {
    const { id } = req.params
    const { titulo, genero, duracao, classificacaoEtaria } = req.body

    const updateCommand = "UPDATE filmes_GiovanaGouveaCinthiaKarolina SET titulo = ?, genero = ?, duracao = ?, classificacaoEtaria = ? WHERE id = ?"

    sql.query(updateCommand, [titulo, genero, duracao, classificacaoEtaria, id], (error) => {
        if (error) {
            console.log(error)
            return
        }

        res.json({
            message: "Filme alterado com sucesso!"
        })
    })
})

app.listen (3000, ()=>{
    console.log("Servidor On")
})


async function buscarFilmes() {
    // acessar a rota GET do backend, trazer os filmes e mostrar os filmes na tela
    const resp = await fetch("http://localhost:3000") // resposta do backend
    const filmes = await resp.json() // converte a resposta num objeto JS
    const sectionFilmes = document.querySelector(".filmes")

    filmes.forEach((filme) => {
        console.log(filme)
        sectionFilmes.innerHTML += `
                    <div>
                        <h2>${filme.title}</h2>
                        <p><strong>Gênero:</strong> ${filme.gender}</p>
                        <p><strong>Duração:</strong> ${filme.duration} minutos</p>
                        <p><strong>Classificação indicativa:</strong> ${filme.ageLimit > 0 ? filme.ageLimit + ' anos' : 'Livre'}</p>
                    </div>
                `
    })
}

buscarFilmes()

const sql = mysql2.createPool({
    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes03MB"
})