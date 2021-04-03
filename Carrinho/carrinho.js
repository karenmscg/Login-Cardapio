if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready ()
}

function ready (){
const removeItensCarrinho = document.getElementsByClassName('btn-cuidado')
    console.log (removeItensCarrinho)
    for (let i = 0; i < removeItensCarrinho.length; i++) {
    const button = removeItensCarrinho[i]
    button.addEventListener('click', removerItemCarrinho)
    }


const quantidadeInput = document.getElementsByClassName ('input__carrinho-quantidade')
for (let i = 0; i < quantidadeInput.length; i++) {
    const input = quantidadeInput[i]
    input.addEventListener('mudanças', quantidadeMudanças)
    }


const addCarrinho = document.getElementsByClassName ('botao_add-Item')
for (let i = 0; i < addCarrinho.length; i++) {
    const button = addCarrinho [i]
    button.addEventListener ('click', addCarrinhoClick())
}
document.getElementsByClassName('botao_comprar')[0].addEventListener('click', botaoFinalizar)
}
function quantidadeMudanças(event) {
    const input = event.target
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1
    }
    updateTotalCarrinho()
}

function botaoFinaliza (event) {
    window.alert ('Obrigada pelo seu pedido! Em breve ele estará na sua casa!')
    const carItens = document.getElementsByClassName('carrinho-itens')[0]
    while (carItens.hasChildNodes()){
        carItens.removeChild(carItens.firstChild)
    }
    updateTotalCarrinho()
}

function addCarrinhoClick(event) {
    const button = event.target
    const comprarItem = button.parentElement.parentElement
    const nome = comprarItem.getElementsByClassName('comprar-item')[0].innerText
    const preco = comprarItem.getElementsByClassName('valor-item')[0].innerText
    const imagem = comprarItem.getElementsByClassName('imagem')[0].src

    console.log (nome, preco, imagem)
    AddItemCarrinho (nome, preco, imagem)
    updateTotalCarrinho()

}

function AddItemCarrinho (nome, preco, imagem){
    const quantCarrinho = document.createElement('div')
    quantCarrinho.classList.add('quantCarrinho')
    const CarrinhoItemNome = carrinhoItem.getElementsByClassName('carrinho-nome-item')
    for ( let i = 0; i < CarrinhoItemNome.length; i++) {
        if(CarrinhoItemNome[i].innerText == nome) {
            return window.alert('Esse item já foi adicionado ao carrinho!')
        }
    }
    //quantCarrinho.innerText = nome 
    const carrinhoItem = document.getElementsByClassName ('carrinho-item')[0]
    const carrinhoQuantCont = ('') //add o html aqui depois 
    quantCarrinho.innerHTML = carrinhoQuantCont
    carrinhoItem.append(quantCarrinho)
    quantCarrinho.getElementsByClassName('btn-cuidado')[0].addEventListener('click', removerItemCarrinho)
    quantCarrinho.getElementsByClassName ('input__carrinho-quantidade')[0].addEventListener('change', quantidadeMudanças)
    
    carrinhoItem.appendChild(quantCarrinho)
}

function removerItemCarrinho (event) {
    const ClicouBotao = event.target
        ClicouBotao.parentElement.parentElement.remove()
        updateTotalCarrinho()
}

function updateTotalCarrinho () {
    const containerCarrinho = document.getElementsByClassName('item-carrinho')[0]
    const rowBasket =  containerCarrinho.getElementsByClassName ('row-basket')
    const total = 0
    for (let i = 0; i < rowBasket.length; i++) {
        const carrinhos = rowBasket[i]
        const precoElemento = carrinhos.getElementsByClassName('preço-carrinho')[0]
        const quantidadeElemento = carrinhos.getElementsByClassName ('input__carrinho-quantidade')[0]
        //console.log(input__carrinho-quantidade, precoElemento)   
        const preco = parseFloat(precoElemento.innerText.replace('$',''))
        //console.log(preco)
        const quantidade = quantidadeElemento.value
            //console.log (preco * quantidade)
        total += (preco * quantidade)
    }

    total = Math.round(total * 100) / 100
    document.getElementsByClassName('precoTotalCarrinho')[0].innerText = '$' + total
}
