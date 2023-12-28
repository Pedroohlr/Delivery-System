let xtudoValue = 21.70;
let xbaconValue = 19.40;
let xsaladaValue = 18.30;

const numeroEscolhido = document.querySelector('input[type=text]');
let valorTotal = 0;

function optionsRefeicao() {
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
};