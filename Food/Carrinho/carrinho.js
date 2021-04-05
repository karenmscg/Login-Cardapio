//console.log('olá')
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else ready()

function ready(){
    const removerItensCarrinho = document.getElementsByClassName('botao-cuidado')
    for (let i = 0; i< removerItensCarrinho.length; i++){
        const botao = removerItensCarrinho[i]
        botao.addEventListener('click', removerItensCarrinho)
           
        }
    let quantidadeInputs = document.getElementsByClassName('carrinho_input_quantidade')
    for (let i = 0; i< quantidadeInputs.length; i++){
        const input = quantidadeInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    document.getElementsByClassName('botao_comprar')[0].addEventListener('click', botaoComprar)
}

function botaoComprar (){
    window.alert ('Obrigada pelo seu pedido! Em breve ele estará em sua casa :)')
    const limparCarrinho = document.getElementsByClassName('itens-carrinho')[0]
    while(limparCarrinho.hasChildNodes()) {
        limparCarrinho.removeChild(limparCarrinho.firstChild)
    }
    updateTotalCarrinho()
}

function quantityChanged(event) {
    const input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}


function removerItemCarrinho(event){
    const botaoClicou = event.target
    botaoClicou.parentElement.parentElement.remove()
    updateTotalCarrinho() 
}

const botaoAddCarrinho = document.getElementsByClassName('botao_add-Item')
    for(let i = 0; i< botaoAddCarrinho.length; i++){
        const botao = botaoAddCarrinho[i]
        botao.addEventListener('click', botaoAddClicado)
    }

function botaoAddClicado(event){
    const botao = event.target
    const comprarItem = botao.parentElement.parentElement
    const nome = comprarItem.getElementsByClassName('comprar-item')[0].innerText
     const preco = comprarItem.getElementsByClassName('valor-item')[0].innerText
    const imagem = comprarItem.getElementsByClassName('img')[0].src
   console.log(nome, preco, imagem)
   addItemAoCarrinho(nome, preco, imagem)
   updateTotalCarrinho()
}

function addItemAoCarrinho(nome, preco, imagem){
    const basket = document.createElement('div')
    basket.classList.add('basket')
    const carrinhoItem = document.getElementsByClassName('itens-carrinho')[0]
    const nomeTotalCarrinho = carrinhoItem.getElementsByClassName('cart-item-title')
    for (let i = 0; i<nomeTotalCarrinho.length; i++){
        if(nomeTotalCarrinho[i].innerText == nome){
            window.alert ('Este item já foi adicionado ao carrinho!')
            return
        }
        
    }
    //basket.innerText = nome
    const basketConteudo =
     `<div class ="carrinho-item carrinho-coluna>
    <img src="${imagem}" width="100" height="100">
    <span class="cart-item-title">${nome}</span>
</div>
<span class="carrinho-preco carrinho-coluna">${preco}</span>
<div class="carrinho-quantidade carrinho coluna">
    <input class="carrinho_input_quantidade" type="number" value="1">
    <button class="botao botao-cuidado" type="button">REMOVER ITEM</button>
</div>`
    basket.innerHTML = basketConteudo
    carrinhoItem.append(basket)
    basket.getElementsByClassName('botao-cuidado')[0].addEventListener('click', removerItemCarrinho)
    basket.getElementsByClassName('carrinho_input_quantidade')[0].addEventListener('change', quantityChanged)

    
}



function updateTotalCarrinho() {
    const cartItemContainer = document.getElementsByClassName('itens-carrinho')[0]
    const baskets = cartItemContainer.getElementsByClassName('basket-row')
    let total = 0
    for (let i = 0; i < baskets.length; i++) {
        const basket = baskets[i]
        const priceElement = basket.getElementsByClassName('carrinho-preco')[0]
        const quantityElement = basket.getElementsByClassName('carrinho_input_quantidade')[0]
        const quantity = quantityElement.value
        total = total + (price * quantity)
    }

    total = Math.round(total * 100) / 100
    document.getElementsByClassName('precoTotalCarrinho')[0].innerHTML = '$' + total
}



