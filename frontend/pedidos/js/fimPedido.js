let notinha = JSON.parse(localStorage.getItem('carrinho'));

//informações do cliente
let userJson = JSON.parse(localStorage.getItem('user'));
console.log(userJson)

let nomeCliente = localStorage.getItem("nome");
let enderecoCliente = localStorage.getItem("endereco");
let telefone = localStorage.getItem("telefone");

let entrega = parseFloat(localStorage.getItem('valorEntrega'));

let valorTotal = parseFloat(localStorage.getItem("valorTotal"));

document.querySelector('#finalizarPedido').innerHTML = `Seu pedido ficou em <strong>R$` + valorTotal.toFixed(2) + ` </strong> deseja realizar seu pedido?`

function finalizar() {
    
    const teste = {
        nome: nomeCliente,
        endereco: enderecoCliente,
        telefone,
        notinha
    }
    
    const infosJSON = JSON.stringify(teste);
    localStorage.setItem('infos', infosJSON);
    localStorage.setItem('ValorTotal', valorTotal);
    localStorage.setItem('entrega', entrega);
    let horario = new Date();
    localStorage.setItem('data', horario);

    localStorage.removeItem('carrinho');
    localStorage.removeItem('valorTotal');
    localStorage.removeItem('nome');
    localStorage.removeItem('qtdItens');
    localStorage.removeItem('endereco');
    localStorage.removeItem('telefone');
    localStorage.removeItem('valorEntrega');
    localStorage.removeItem('entrega');

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
                    <td>`+ userJson.userName + `</td>
                    <td>`+ userJson.userTell + `</td>
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
                    <th>Valor Total: <span style="color: brown;" >R$${valorTotal.toFixed(2)}</span><br>(Valor da entrega: R$${entrega || 0}.00)</th>                    
                </tr>   
            </thead>`

    for(let i = 0; i < notinha.length; i++) 
        {
        const parent = document.querySelector('table');

        if (i === 0) 
            parent.innerHTML = parent.innerHTML + "\n<tbody>" /*<--*/
        
        parent.innerHTML = parent.innerHTML + `
                <tr>
                    <td>${notinha[i].name}</td>
                    <td>R$${notinha[i].price}</td>
                    </tr>

                    `

        if (i === (notinha.length - 1)) 
            parent.innerHTML = parent.innerHTML + "\n</tbody>" /*<--*/
    }
    
    document.querySelector(".res").innerHTML = document.querySelector(".res").innerHTML + `
    <thead>
        </thead>
        </table>
        <br>
        <button onclick="finalizar()">Finalizar Pedido</button>
    </section>
    `;

};