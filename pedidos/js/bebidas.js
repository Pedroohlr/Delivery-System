let valorTotal = parseFloat(localStorage.getItem('valorTotal'));

let cocaCola2L = 9.99;
let fantaLaranja = 6.99;
let antartica2L = 4.99;
let aguaSemGas = 2;

let numeroEscolhido = document.querySelector('input[type=text]');

function sectionBebidas() {
    if(numeroEscolhido.value == '1') {
        valorTotal = valorTotal + cocaCola2L;
        localStorage.setItem('valorTotal', valorTotal.toFixed(2));
        localStorage.setItem('receiptBebida', "Coca cola 2L");
        localStorage.setItem('valorUnBebida', cocaCola2L);
        location.href = "./acompanhamentos.html";
    } else if (numeroEscolhido.value == '2') {
        valorTotal = valorTotal + fantaLaranja;
        localStorage.setItem('valorTotal', valorTotal.toFixed(2));
        localStorage.setItem('receiptBebida', "Fanta Laranja 2L");
        localStorage.setItem('valorUnBebida', fantaLaranja);
        location.href = "./acompanhamentos.html";
    } else if (numeroEscolhido.value == '3') {
        valorTotal = valorTotal + antartica2L;
        localStorage.setItem('valorTotal', valorTotal.toFixed(2));
        localStorage.setItem('receiptBebida', "Guarana Antartica 2L");
        localStorage.setItem('valorUnBebida', antartica2L);
        location.href = "./acompanhamentos.html";
    } else if (numeroEscolhido.value == '4') {
        valorTotal = valorTotal + aguaSemGas;
        localStorage.setItem('valorTotal', valorTotal.toFixed(2));
        localStorage.setItem('receiptBebida',  "Agua sem gas, 500ml");
        localStorage.setItem('valorUnBebida', aguaSemGas);
        location.href = "./acompanhamentos.html";
    };
};