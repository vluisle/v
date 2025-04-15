document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pegando os valores dos campos de login
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Aqui você pode adicionar a verificação com seu banco de dados ou API
    if (email === "paciente@dominio.com" && password === "senha123") {
        // Se o login for bem-sucedido, redireciona o paciente
        window.location.href = "dashboard.html"; // Para a página personalizada do paciente
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
    }
});