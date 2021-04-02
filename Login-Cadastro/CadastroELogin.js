document.addEventListener('DOMContentLoaded', () =>{
    const loginForm = document.querySelector('#login')
    const criarConta = document.querySelector('#criarConta')
})

document.querySelector('#linkCriarConta').addEventListener('click', e => {
    e.preventDefault()
    loginForm.classList.add("form--hidden")
    criarConta.classList.remove('form--hidden')
})

document.querySelector('#linkLogin').addEventListener('click', e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden")
    criarConta.classList.add('form--hidden')
})

