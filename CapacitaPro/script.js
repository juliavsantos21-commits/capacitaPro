// Espera todo o HTML carregar antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Configurando os links do menu de navegação (Nav)
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que o link apenas adicione um "#" na URL
            
            const textoLink = this.innerText.trim();
            
            if (textoLink === "Início") {
                window.location.href = "index.html"; // Vai para a página inicial
            } else if (textoLink === "Cursos") {
                window.location.href = "cursos.html"; // Vai para a página de cursos
            } else if (textoLink === "Sobre") {
                window.location.href = "sobre.html"; // Vai para a página sobre
            } else if (textoLink === "Contato") {
                window.location.href = "contato.html"; // Vai para a página de contato
            }
        });
    });

    // 2. Configurando o botão "Conhecer Cursos" (Hero Section)
    const btnConhecerCursos = document.querySelector(".hero-content .btn-solid-large");
    if (btnConhecerCursos) {
        btnConhecerCursos.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "cursos.html";
        });
    }

    // 3. Configurando o botão "Começar Agora" (Final CTA Section)
    const btnComecarAgora = document.querySelector(".final-cta .btn-solid-large");
    if (btnComecarAgora) {
        btnComecarAgora.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "cadastro.html";
        });
    }

    // Bônus: Configurando também o botão "Cadastrar-se" do cabeçalho
    const btnCadastrarHeader = document.querySelector("header .btn-solid");
    if (btnCadastrarHeader) {
        btnCadastrarHeader.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "cadastro.html";
        });
    }
    // 4. Configurando o botão "Entrar" do cabeçalho
    const btnEntrarHeader = document.querySelector("header .btn-outline");
    if (btnEntrarHeader) {
        btnEntrarHeader.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "login.html"; // Redireciona para a página de login
        });
    }
});
// Aguarda o HTML carregar completamente antes de ativar as ações
document.addEventListener("DOMContentLoaded", function() {

    // 1. Links do Menu de Navegação (Cursos, Sobre, Ajuda)
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita o recarregamento padrão
            const textoLink = this.innerText.trim();
            
            if (textoLink === "Início") {
                window.location.href = "index.html";
            } else if (textoLink === "Cursos") {
                window.location.href = "cursos.html";
            } else if (textoLink === "Sobre") {
                window.location.href = "sobre.html";
            } else if (textoLink === "Ajuda") {
                window.location.href = "ajuda.html";
            }
        });
    });

    // 2. Botões do Cabeçalho (Entrar e Cadastrar)
    const btnEntrar = document.querySelector(".btn-blue");
    if (btnEntrar) {
        btnEntrar.addEventListener("click", function() {
            window.location.href = "entrar.html"; 
        });
    }

    const btnCadastrar = document.querySelector(".nav-actions .btn-green");
    if (btnCadastrar) {
        btnCadastrar.addEventListener("click", function() {
            window.location.href = "cadastro.html";
        });
    }

    // 3. Botão principal "Explorar Treinamentos"
    const btnExplorar = document.querySelector(".btn-green-large");
    if (btnExplorar) {
        btnExplorar.addEventListener("click", function() {
            window.location.href = "cursos.html";
        });
    }

    // 4. Botão do rodapé "Começar Agora"
    const btnComecarAgora = document.querySelector(".btn-green-glow");
    if (btnComecarAgora) {
        btnComecarAgora.addEventListener("click", function() {
            window.location.href = "cadastro.html";
        });
    }

});