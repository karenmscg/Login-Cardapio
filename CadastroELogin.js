function AjustarMensagem (formElemento, tipo, mensagem){
    const mensElemento = formElemento.querySelector ('.form__mensagem')

    mensElemento.textContent = mensagem
    mensElemento.classList.remove ('form__mensagem--sucesso')
    mensElemento.classList.add (`form__mensagem --${tipo}`)
}

function setInputErro (inputElemento, mensagem) {
    inputElemento.classList.add('form__input--erro')
    inputElemento.parentElement.querySelector ('.form__input-mensagem-erro').textContent = mensagem
}

function clearInputErro (inputElemento){
    inputElemento.classList.remove ('form__input--erro')
    inputElemento.parentElement.querySelector('.form__input-mensagem-erro')
}

document.addEventListener('DOMContentLoaded', () =>{
    const loginForm = document.querySelector('#login')
    const criarContaForm  = document.querySelector('#criarConta')

document.querySelector('#linkCriarConta').addEventListener ('click', e => {
    e.preventDefault()
    loginForm.classList.add('form--hidden')
    criarContaForm.classList.remove('form--hidden')
})

document.querySelector('#linkLogin').addEventListener ('click', e => {
    e.preventDefault()
    loginForm.classList.remove('form--hidden')
    criarContaForm.classList.add('form--hidden')
})

loginForm.addEventListener ('submit', e => {
    e.preventDefault ()
    
    AjustarMensagem(loginForm, "erro", "Verifique seu usuário ou sua senha!")
})

document.querySelectorAll ('.form__input').forEach ( inputElemento => {
    inputElemento.addEventListener('blur', e => {
        if (e.target.id == 'singupUsername' && e.target.value.length > 0 && e.target.value.length < 10)
        {
            setInputErro (inputElemento, 'O Usuário deve ter até 10 caracteres')
    }
})

inputElemento.addEventListener ('input', e => {
    clearInputErro (inputElemento)
})
})
})
