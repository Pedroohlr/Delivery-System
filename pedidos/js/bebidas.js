let valorTotal = parseFloat(localStorage.getItem('valorTotal') || 0);
let qtdItens = parseFloat(localStorage.getItem('qtdItens') || 0);

const carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; //essa linha faz alguma coisa


function addProduct(name, price) {
    let product = {
        name,
        price
    }
    qtdItens += 1;
    valorTotal += price
    carrinho.push(product);
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    localStorage.setItem('valorTotal', valorTotal);
    localStorage.setItem('qtdItens', qtdItens)
}

function confirmarPedido(name, price) {
    return new Promise((resolve, reject) => {
        document.querySelector('.float').innerHTML = `
            <p>Deseja adicionar?</p>
            <br><br>
            <button class="nao">Não</button> <button class="cancelar">Sim</button>
            `
        document.querySelector('.float').style.display = 'block';
        document.querySelector('.nao').addEventListener('click', () => {
            document.querySelector('.float').style.display = 'none';
            return reject
        });
        document.querySelector('.cancelar').addEventListener('click', () => {
            document.querySelector('.float').style.display = 'none';
            addProduct(name, price)
            document.querySelector('.carrinho').innerHTML = `
            <img src="../../img/iconCarrinho.png" alt="foto do carrinho">
            <div class="carrinho2">
                <p class="valorTotal"><strong>R$${valorTotal.toFixed(2)}</strong></p>
                <p class="itens"> ${qtdItens || 0} itens</p>
            </div>
            `
            return resolve
        });
    });
}


window.addEventListener('load', () => {
    if (isNaN(valorTotal)) valorTotal = 0;

    document.querySelector('.carrinho').innerHTML = `
    <img src="../../img/iconCarrinho.png" alt="foto do carrinho">
<div class="carrinho2">
<p class="valorTotal"><strong>R$${valorTotal.toFixed(2) || 0}</strong></p>
<p class="itens"> ${qtdItens || 0} itens</p>
</div>
`});

function prox() { location.href = 'acompanhamentos.html' }