async function cadastrarFilme() {
    const title = document.getElementById("titulo")
    const gender = document.getElementById("genero")
    const ageLimit = document.getElementById("classificacaoEtaria")
    const duration = document.getElementById("duracao")

    if (titulo.value === "" || genero.value === "" || classificacaoEtaria.value === "" || duracao.value === "") {
        alert("Preencha todos os campos!")
        return  
    }

    const filme = {
        title: titulo.value,
        gender: genero.value,
        ageLimit: classificacaoEtaria.valueAsNumber,
        duration: duracao.valueAsNumber
    }

    const resposta = await fetch("https://backend-atividade-em-dupla.vercel.app/criarfilme", {
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