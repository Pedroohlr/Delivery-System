function confirmarEndereco(){
    let endereco = document.querySelector('#address');
    localStorage.setItem('endereco', endereco.value);
    alert("Endereço cadastrado com sucesso")
}

function retiradaCantina(){
    if( localStorage.getItem("endereco") == null)
    /*=>*/ alert("Digite um endereço antes!"); 
    else
        {
            location.href="../html/fimPedido.html";
        }
}

function entrega(){
    if( localStorage.getItem("endereco") == null)
    /*=>*/ alert("Digite um endereço antes!"); 
    else
        {
            location.href="../html/fimPedido.html";
            localStorage.setItem("valorEntrega", 5);
            location.href="../html/fimPedido.html";
        }
}