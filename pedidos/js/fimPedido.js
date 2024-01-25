let notinha = JSON.parse(localStorage.getItem('carrinho'));

//informações do pedido
let refeicao = localStorage.getItem("receiptRefeicao");
let valorUnRefeicao = localStorage.getItem("valorUnRefeicao")

let bebida = localStorage.getItem("receiptBebida");
let valorUnBebida = localStorage.getItem('valorUnBebida');

let acompanhamento = localStorage.getItem("receiptAcompanhamentos");
let valorUnAcompanhamento = localStorage.getItem("valorUnAcompanhamento");

//informações do cliente
let nomeCliente = localStorage.getItem("nome");
let enderecoCliente = localStorage.getItem("endereco");
let telefone = localStorage.getItem("telefone");

let entrega = parseFloat(localStorage.getItem('valorEntrega'));

let valorTotal = parseFloat(localStorage.getItem("valorTotal"));

document.querySelector('#finalizarPedido').innerHTML = `Seu pedido ficou em <strong>R$` + valorTotal.toFixed(2) + ` </strong> deseja realizar seu pedido?`

function finalizar() {
    const infos = {
        nome: nomeCliente,
        endereco: enderecoCliente,
        telefone,
        refeicao,
        bebida,
        acompanhamento,
        valorTotal,
        entrega
    };


    const infosJSON = JSON.stringify(infos);

    localStorage.setItem("infos", infosJSON);
    localStorage.removeItem("receiptReceicao");
    localStorage.removeItem("receiptBebida");
    localStorage.removeItem("receiptRefeicao");
    localStorage.removeItem("receiptAcompanhamentos");
    localStorage.removeItem("nome");
    localStorage.removeItem("endereco");
    localStorage.removeItem("telefone");
    localStorage.removeItem("valorTotal");
    localStorage.removeItem("valorUnBebida");
    localStorage.removeItem("valorUnAcompanhamento");
    localStorage.removeItem("valorEntrega");
    localStorage.removeItem("valorUnRefeicao");

    alert("Pedido realizado com sucesso, a comida deve chegar em 7 minutos.");
    location.href = "../../src/html/index.html";
};


function resolucao() {
    document.querySelector(".res").innerHTML =
        `
        <section class="container2">
        <h1 class="hh1">Informações do Pedido</h1>
        <table>
            <thead>
                <tr>
                    <th colspan="3">Informações do Cliente</th>
                </tr>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>`+ nomeCliente + `</td>
                    <td>`+ telefone + `</td>
                    <td>`+ enderecoCliente + `</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colspan="4">Informações do Produto</th>
                </tr>
                <tr>
                    <th>Produto</th>
                    <th>Preço Unitário</th>
                    <th>Valor Total: <span style="color: brown;" >R$${valorTotal}</span></th>
                </tr>
            </thead>`
            
    for (let i = 0; i < notinha.length; i++) 
        {
        const parent = document.querySelector('table');

        if (i === 0) 
            parent.innerHTML = parent.innerHTML + "\n<tbody>" /*<--*/
        
        parent.innerHTML = parent.innerHTML + `
                <tr>
                    <td>${notinha[i].name}</td>
                    <td>R$${notinha[i].price}</td>
                </tr>`

        if (i === (notinha.length - 1)) 
            parent.innerHTML = parent.innerHTML + "\n</tbody>" /*<--*/
        
        }

    document.querySelector(".res").innerHTML = document.querySelector(".res").innerHTML + `
            <thead>
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        </table>
        <br>
        <button onclick="finalizar()">Finalizar Pedido</button>
    </section>
    `;
};

