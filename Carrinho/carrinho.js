//console.log('oie')

const removerItensCarrinho = document.getElementsByClassName('botao-cuidado')
for (let i = 0; i< removerItensCarrinho.length; i++){
    const botao = removerItensCarrinho[i]
    botao.addEventListener('click', function(event){
        const botaoClicou = event.target
        botaoClicou.parentElement.parentElement.remove()
        updateTotalCarrinho()
    })
}

function updateTotalCarrinho() {
    const carrinhoItemContainer = document.getElementsByClassName('itens-carrinho')[0]
    const basket = carrinhoItemContainer.getElementsByClassName('basket-row')
    for (let i = 0; i< removerItensCarrinho.length; i++){
        const basketRow = basket [i]
        const precoElemento = basket.getElementsByClassName('carrinho-preco')[0]
        const quantidade = basket.getElementsByClassName('input__carrinho-quantidade')[0]
        const preco = precoElemento.innerText
}
}