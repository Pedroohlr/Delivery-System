import carrinho from "./carrinho.js"

window.addEventListener('DOMContentLoaded', () => {
    const userPhoto = localStorage.getItem("userPhoto");
    const userName = localStorage.getItem('userName');
    const token = localStorage.getItem("userToken");

    if (!token) {
        window.location.href = "../../cadastro/html/login.html"
    } else {
        document.querySelector(".user").innerHTML = `
            <img style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;" src="${userPhoto}" alt="User Photo">
            <p style="color:#000;">${userName}</p>
            <a href="../../cadastro/html/userConta.html" style="font-size:13px;">Acessar Conta</a>
        `;
        carrinho();
    }
});

window.acessarPedidos = function acessarPedidos() {
    location.href = "../../pedidos/html/refeicao.html";
}

window.verPedido = function verPedido() {
    location.href = "../../pedidos/html/pedidoCliente.html";
}

window.areaADM = function areaADM(){
    if(localStorage.getItem('userEmail') === "flygames1214@gmail.com");
    location.href = "./admin.html";
}