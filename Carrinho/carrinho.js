const removeItensCarrinho = document.getElementsByClassName('btn-cuidado')
for (let i = 0; i < removeItensCarrinho.length; i++) {
    const button = removeItensCarrinho[i]
    button.addEventListener('click', () => {
        console.log('clicked')
    })
}