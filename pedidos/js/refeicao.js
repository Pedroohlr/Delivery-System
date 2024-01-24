const xbaconValue = 22.49;
const xsaladaValue = 18.30;
const xtudoValue = 21.70;

let valorTotal = 0;

const carrinho = []

function addProduct(name,price) {
    let product  = {
        name: name,
        price: price
    }
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
            return resolve
        });
    });
}

function clear(){
    localStorage.clear()
}

/*async function TESTESconfirmarPedido(pedido) {
    document.querySelector('.float').innerHTML = `
    <p>Deseja adicionar ${pedido} ?</p>
    <br><br>
    <button class="voltar">Não</button> <button class="cancelar">Sim</button>
    `
    document.querySelector('.float').style.display = 'block';
    document.querySelector('.voltar').addEventListener('click', () => {
        document.querySelector('.float').style.display = 'none';
    });
    document.querySelector('.cancelar').addEventListener('click', () => {
        document.querySelector('.float').style.display = 'none';
    });
}*/

/*function optionsRefeicao() {
    if (numeroEscolhido.value == '1') {
        valorTotal = valorTotal + xtudoValue;
        location.href = '../../pedidos/html/bebidas.html'
        localStorage.setItem('valorTotal', valorTotal);
        localStorage.setItem('receiptRefeicao', "XTUDO");
        localStorage.setItem('valorUnRefeicao', xtudoValue);

    } else if (numeroEscolhido.value == '2') {
        valorTotal = valorTotal + xbaconValue;
        location.href = '../../pedidos/html/bebidas.html'
        localStorage.setItem('valorTotal', valorTotal);
        localStorage.setItem('receiptRefeicao', "XBACON");
        localStorage.setItem('valorUnRefeicao', xbaconValue);

    } else if (numeroEscolhido.value == '3') {
        valorTotal = valorTotal + xsaladaValue;
        location.href = '../../pedidos/html/bebidas.html'
        localStorage.setItem('valorTotal', valorTotal);
        localStorage.setItem('receiptRefeicao', "XSALADA");
        localStorage.setItem('valorUnRefeicao', xsaladaValue);
        
    } else if (numeroEscolhido == '0') {
        alert('Voltando ao menu principal')
        location.href = '../../src/html/index.html'
    };
};*/