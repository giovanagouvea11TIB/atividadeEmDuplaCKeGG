async function buscarFilmes() {
    const resp = await fetch("http://localhost:3000/todosfilmes")
    const filmes = await resp.json()

    const sectionFilmes = document.querySelector(".filmes")

    filmes.forEach((filme) => {
        sectionFilmes.innerHTML += `
            <div>
                <h2>${filme.titulo}</h2>
                <p><strong>Gênero:</strong> ${filme.genero}</p>
                <p><strong>Duração:</strong> ${filme.duracao} minutos</p>
                <p><strong>Classificação indicativa:</strong> ${filme.classificacaoEtaria}</p>
                
                 <button onclick="apagarFilme(${filme.id})">Apagar</button>
            </div>
        `
    })
}

buscarFilmes()

async function apagarFilme(id) {
    const respostaDeSucessoAoApagar = await fetch(`https://backend-atividade-em-dupla.vercel.app/delete/${id}`, { method: "DELETE" })
    const mensagem = await respostaDeSucessoAoApagar.json()

    alert(mensagem.message)

    window.location.reload()
}

apagarFilme()
