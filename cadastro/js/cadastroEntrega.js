function infos() {
    let userName = document.querySelector('#nome').value;
    let endereco = document.querySelector('#endereco').value;
    let userCell = document.querySelector('input[type=tel]').value;

    if (userCell == '' ||userName == '' || endereco == ''){
        alert('Preencha os campos corretamente')
    } else {
        
        localStorage.setItem('nome', userName);
        localStorage.setItem('endereco', endereco);
        localStorage.setItem('telefone', userCell);
        let valorTotal = parseFloat(localStorage.getItem('valorTotal'));

        valorTotal = valorTotal + 5;
        localStorage.setItem('valorEntrega', '5')
        localStorage.setItem('valorTotal', valorTotal);
        alert('Cadastro Feito com sucesso');
        location.href = "../../pedidos/html/fimPedido.html";
    }
}