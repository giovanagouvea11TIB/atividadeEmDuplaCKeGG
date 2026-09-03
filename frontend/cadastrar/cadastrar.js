async function cadastrarFilme() {
    const titulo = document.getElementById("titulo")
    const genero = document.getElementById("genero")
    const classificacaoEtaria = document.getElementById("classificacaoEtaria")
    const duracao = document.getElementById("duracao")

    if (titulo.value === "" || genero.value === "" || classificacaoEtaria.value === "" || duracao.value === "") {
        alert("Preencha todos os campos!")
        return  
    }

    const filme = {
        titulo: titulo.value,
        genero: genero.value,
        classificacaoEtaria: classificacaoEtaria.valueAsNumber,
        duracao: duracao.valueAsNumber
    }

    const resposta = await fetch("http://localhost:3000/criarfilme", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(filme)
    })

    const mensagem = await resposta.json()

    alert(mensagem.message)

    window.location.href = "../index.html"
}