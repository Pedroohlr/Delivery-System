/* func para puxar o localStorage das informações do pedido do cliente e exibir na tela */

function verPedido() {
    return new Promise((resolve, reject) => {
        if (!localStorage.getItem('infos')) {
            document.querySelector('.fazerPedido').innerHTML = `
        <br>
        Você não possui nenhum pedido em andamento.
        <br><br>
        <button onclick="fazerPedido()">Fazer pedido</button>
        <br>
        `
        return reject
        } else {

            const user = JSON.parse(localStorage.getItem('infos'));
            const users = { ...user };
            const notinha = users.notinha;
            const valorTotal = parseFloat(localStorage.getItem('ValorTotal')) || 0;
            const valorEntrega = parseInt(localStorage.getItem('entrega'));
            const horarioPedido = localStorage.getItem('data');
            const entrega = valorEntrega ? parseInt(valorEntrega) : 0

            document.querySelector('.verPedido').innerHTML = `
            <div class="userInfo">
                <h2> Informações do cliente </h2>
                <p><strong>${horarioPedido}</strong></p>
                <p><strong>Nome:</strong> ${user.nome}</p>
                <p><strong>Telefon:</strong> ${user.telefone}</p>
                <p><strong>Endereço:</strong> ${user.endereco || "o pedido ser retirado na cantina!"} </p>
            </div>
            
            <div>
                <h2>Seu pedido</h2>
                <div class="notinha"></div>
                <br>
                <p>Valor da entrega: <strong>${entrega}</strong></p>
                <p>No total de: <strong>R$${valorTotal.toFixed(2)}</strong></p>
                <button onclick="confirmarCancelamento()">Cancelar pedido</button>
                `
            for (let i = 0; i < notinha.length; i++) {
                const parent = document.querySelector('.notinha')
                if (i === 0) {
                    parent.innerHTML = parent.innerHTML = "\n<div class='notinha'>"
                }
                parent.innerHTML = parent.innerHTML + `
                    <p><span style="font-size: 22px; color: #000; font-weight: bold;">Item:</span> ${notinha[i].name} <span style="color: red;"> R$${notinha[i].price}</span></p>
                    `

                if (i === (notinha.length - 1))
                    parent.innerHTML = parent.innerHTML + "\n</div>" /*<--*/
            }

            //document.querySelctor('.btnPedido').style.display = 'none';

            return resolve
        }
    });
}

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

function voltar(){
    location.href ="../../src/html/index.html"
}