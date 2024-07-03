const userPhoto = localStorage.getItem("userPhoto");
const userName = localStorage.getItem('userName');
document.querySelector(".user").innerHTML = `
<img style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;" src="${userPhoto}" alt="User Photo">
<p style="color:#000;">${userName}</p>
<a href="../../cadastro/html/userConta.html" style="font-size:13px;">Acessar Conta</a><p><b style="font-size:12px;">ADMINISTRADOR<b/></>`;

window.lanches = function lanches(){
    location.href="./produtos.html"
}

window.pedidos = function pedidos(){
    location.href="./pedidosAndamento.html"
}

window.entregadores = function entregadores(){
    location.href="./entregadores.html"
}