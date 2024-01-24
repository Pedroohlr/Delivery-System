let valorTotal = parseFloat(localStorage.getItem('valorTotal'));

const cocaCola2L = 9.99;
const fantaLaranja = 6.99;
const antartica2L = 4.99;
const aguaSemGas = 2;

let qtdItens = parseFloat(localStorage.getItem('qtdItens'));

const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];


function addProduct(name,price) {
    let product  = {
        name,
        price
    }
    qtdItens += 1;
    valorTotal += price
    carrinho.push(product);
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    localStorage.setItem('valorTotal', valorTotal);
}

function confirmarPedido( name,price ) {
    return new Promise(( resolve, reject ) => {
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
            addProduct(name,price)
            document.querySelector('.carrinho').innerHTML = `
            <img src="../../img/iconCarrinho.png" alt="foto do carrinho">
            <div class="carrinho2">
                <p class="valorTotal"><strong>R$${valorTotal.toFixed(2)}</strong></p>
                <p class="itens"> ${qtdItens} itens</p>
            </div>
            `
            return resolve
        });
    });
}

function prox(){
    location.href = "bebidas.html"
}

window.addEventListener('load', () => document.querySelector('.carrinho').innerHTML = `
<img src="../../img/iconCarrinho.png" alt="foto do carrinho">
<div class="carrinho2">
    <p class="valorTotal"><strong>R$${valorTotal.toFixed(2)}</strong></p>
    <p class="itens"> ${qtdItens} itens</p>
</div>
`)