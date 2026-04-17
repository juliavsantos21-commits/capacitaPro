document.addEventListener("DOMContentLoaded", function() {
    // Esta função faz os botões funcionarem em QUALQUER página
    document.body.addEventListener("click", function(event) {
        const elemento = event.target;
        
        // Verifica se clicou em um link ou botão que tenha esses textos
        const texto = elemento.innerText.trim();

        if (texto === "Início") {
            window.location.href = "inicio.html";
        } else if (texto === "Cursos" || texto === "Explorar Treinamentos") {
            window.location.href = "cursos.html";
        } else if (texto === "Sobre") {
            window.location.href = "sobre.html";
        } else if (texto === "Contato") {
            window.location.href = "contato.html";
        } else if (texto === "Entrar") {
            window.location.href = "login.html";
        } else if (texto === "Cadastrar-se" || texto === "Começar Agora") {
            window.location.href = "cadastro.html";
        }
    });

    // Configuração do formulário de contato
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            form.reset();
        });
    }
});
