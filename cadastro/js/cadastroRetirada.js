let userName = document.querySelector("#nome");
let userCell = document.querySelector("input[type=tel]");

function cadastro() {
  if (userCell.value == '' || userName.value == '') {
    alert("Complete os campos corretamente");
  }  else { 
      localStorage.setItem("nome", userName.value);
      localStorage.setItem("telefone", userCell.value);
      location.href = "../../pedidos/html/fimPedido.html";
      alert("Cadastro Feito com sucesso");
  };
};
