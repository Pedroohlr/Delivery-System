function realizarLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simulação de lógica de autenticação (substitua com lógica real no servidor)
    if (username === "adminuser" && password === "senhauser") {
        // Armazena informações de autenticação no LocalStorage
        localStorage.setItem("usuarioAutenticado", "true");

        // Redireciona para a página restrita
        window.location.href = "../html/admin2.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    };
};

function clearStorage() {
  localStorage.removeItem("usuarioAutenticado");
};

function voltar() {
    location.href = "../../src/html/index.html";
};