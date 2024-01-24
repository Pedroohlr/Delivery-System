function voltar() {
    location.href = "../../src/html/index.html";
};

let infos = JSON.parse(localStorage.getItem('infos'));

function fazerPedido() {
    location.href = "../html/refeicao.html";
};

function confirmarCancelamento() {
    document.querySelector('.float').innerHTML = `
    <p>Deseja cancelar seu pedido?</p>
    <br><br>
    <button class="voltar">Não</button> <button class="cancelar">Sim</button>
    `
    document.querySelector('.float').style.display = 'block';
    document.querySelector('.voltar').addEventListener('click', () => {
        document.querySelector('.float').style.display = 'none';
    });
    document.querySelector('.cancelar').addEventListener('click', () => {
        localStorage.removeItem('infos');
        document.querySelector('.float').style.display = 'none';
        alert("Seu pedido foi cancelado!");
        location.href = '../../src/html/index.html'
    });

}


function verPedido() {
    if (!localStorage.getItem('infos')) {
        document.querySelector('.fazerPedido').innerHTML = `
        <br>
        Você não possui nenhum pedido em andamento.
        <br><br>
        <button onclick="fazerPedido()">Fazer pedido</button>
        <br>
        `
    } else {
        document.querySelector('.btnPedido').style.display = 'none';
        document.querySelector('.verPedido').innerHTML = `

        <h1>Seu pedido</h1>

        <p>Nome: ${infos.nome}</p>
        <p>Refeição: ${infos.refeicao}</p>
        <p>Acompanhamento: ${infos.acompanhamento}</p>
        <p>Bebida: ${infos.bebida}</p>
        <p id ="entrega">Taxa de entrega: <strong>R$${infos.entrega.toFixed(2)}</strong></p>
        <p>No total de: <strong>R$${infos.valorTotal.toFixed(2)}</strong></p>
        <button onclick="confirmarCancelamento()">Cancelar pedido</button>
        `
    };
};