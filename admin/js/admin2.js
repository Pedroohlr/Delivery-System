window.onload = function() {
    if (!localStorage.getItem("usuarioAutenticado")) {
        window.location.href = "../html/admin.html";
    } else {
        document.querySelector('.btnVoltar').addEventListener('click', ()=>{
            location.href = "../../src/html/index.html";
        });
        let infos = JSON.parse(localStorage.getItem('infos'));
        
        
        localStorage.removeItem("usuarioAutenticado");
        
        document.querySelector('.pedidos').innerHTML = `
        <p>Nome do cliente: ${infos.nome}</p> 
        <p>Refeição pedida: ${infos.refeicao}</p>
        <p>Acompanhamento pedido: ${infos.acompanhamento}</p>
        <p>Bebida pedida: ${infos.bebida}</p>
        <p>Valor da entrega : <strong>R$${infos.entrega.toFixed(2)}</strong></p>
        <p>No valor de: <strong>R$${infos.valorTotal.toFixed(2)}</strong></p>
        `
        document.querySelector('.btnCancelar').addEventListener('click', ()=>{
            alert("O pedido foi cancelado!")
            localStorage.removeItem("infos")
            document.querySelector('.pedidos').innerHTML = ` 
            `
        });
    };
};