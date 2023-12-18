let molhoAlho = 3.59;
let batataFrita = 12.50;
let cebolaEmpanada = 15.99;
let molhoBarbecue = 8.39;


let valorTotal = parseFloat(localStorage.getItem('valorTotal'));
let acompanhamentoEscolhido = document.querySelector('input[type=text]');

function sectionAcompanhamento() {
    if(acompanhamentoEscolhido.value == '1'){
        valorTotal = valorTotal + molhoAlho;
        localStorage.setItem('valorTotal', valorTotal);
        localStorage.setItem('receiptAcompanhamentos', "Molho de alho");
        localStorage.setItem('valorUnAcompanhamento', molhoAlho);
        location.href = "../../cadastro/html/metodoRetirada.html";
    } else if (acompanhamentoEscolhido.value == '2'){
        valorTotal = valorTotal + batataFrita;
        localStorage.setItem('valorTotal', valorTotal);
        localStorage.setItem('receiptAcompanhamentos', "Batata Frita");
        localStorage.setItem('valorUnAcompanhamento', batataFrita);
        location.href = "../../cadastro/html/metodoRetirada.html";
     } else if (acompanhamentoEscolhido.value == '3'){
        valorTotal = valorTotal + cebolaEmpanada;
        localStorage.setItem('valorTotal', valorTotal);
        localStorage.setItem('receiptAcompanhamentos', "Cebola Empanada");
        localStorage.setItem('valorUnAcompanhamento', cebolaEmpanada);
        location.href = "../../cadastro/html/metodoRetirada.html";
     } else if (acompanhamentoEscolhido.value == '4'){
        valorTotal = valorTotal + molhoBarbecue;
        localStorage.setItem('valorTotal', valorTotal);
        localStorage.setItem('receiptAcompanhamentos', "Molho Barbecue");
        localStorage.setItem('valorUnAcompanhamento', molhoAlho);
        location.href = "../../cadastro/html/metodoRetirada.html";
     };
};