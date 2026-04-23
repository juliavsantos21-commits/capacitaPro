document.addEventListener("DOMContentLoaded", function() {
    console.log("CapacitaPro: Sistema de Navegação e Filtros Ativado!");

    // --- 1. NAVEGAÇÃO DA NAVBAR ---
    const linksNav = document.querySelectorAll("nav ul li a");
    linksNav.forEach(link => {
        link.addEventListener("click", function(e) {
            const texto = this.innerText.toLowerCase().trim();
            if (this.getAttribute("href") === "#" || this.getAttribute("href") === "") {
                e.preventDefault();
                if (texto === "início") window.location.href = "inicio.html";
                else if (texto === "cursos") window.location.href = "cursos.html";
                else if (texto === "sobre") window.location.href = "sobre.html";
                else if (texto === "contato") window.location.href = "contato.html";
            }
        });
    });

    // --- 2. FILTRO DE CURSOS ---
    const btnFiltrar = document.getElementById('btn-filtrar-v2');
    const btnLimpar = document.getElementById('btn-limpar-v2');

    if (btnFiltrar) {
        btnFiltrar.onclick = function() {
            const area = document.getElementById('filter-area').value;
            const nivel = document.getElementById('filter-nivel').value;
            const status = document.getElementById('filter-status').value;
            
            // Proteção para não travar se o campo de busca não existir
            const inputBusca = document.getElementById('input-busca-v2');
            const busca = inputBusca ? inputBusca.value.toLowerCase() : "";
            
            const cards = document.querySelectorAll('.course-card');
            
            cards.forEach(card => {
                const cArea = card.getAttribute('data-area');
                const cNivel = card.getAttribute('data-nivel');
                const cStatus = card.getAttribute('data-status');
                const cTexto = card.innerText.toLowerCase();
                
                const matchArea = (area === "all" || area === cArea);
                const matchNivel = (nivel === "all" || nivel === cNivel);
                const matchStatus = (status === "all" || status === cStatus);
                const matchBusca = (busca === "" || cTexto.includes(busca));
                
                if(matchArea && matchNivel && matchStatus && matchBusca) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        };
    }

    if (btnLimpar) {
        btnLimpar.onclick = function() {
            document.getElementById('filter-area').value = "all";
            document.getElementById('filter-nivel').value = "all";
            document.getElementById('filter-status').value = "all";
            const cards = document.querySelectorAll('.course-card');
            cards.forEach(card => card.style.display = "block");
        };
    }

    // --- 3. CLIQUES GERAIS (SAIBA MAIS, LOGIN, CADASTRO, ABAS) ---
    document.addEventListener("click", function(e) {
        const el = e.target.closest("a, button, p, span, .tab, .tab-item");
        if (!el) return;

        const texto = el.innerText ? el.innerText.toLowerCase().trim() : "";

        // --- NOVIDADE: Lógica do botão Saiba Mais de Primeiros Socorros ---
        if (texto === "saiba mais") {
            // Verifica se o card pai desse botão é o de Primeiros Socorros
            const cardPai = el.closest(".course-card");
            if (cardPai && cardPai.innerText.includes("Primeiros Socorros")) {
                window.location.href = "cursoPSCRR.html";
                return; // Para o código aqui para não executar as regras de baixo
            }
        }

        // Navegação entre ABAS (Sobre, Conteúdo, etc)
        if (texto.includes("sobre o curso")) window.location.href = "cursoPSCRR.html";
        else if (texto.includes("conteúdo")) window.location.href = "cursoPSCRR2.html";
        else if (texto.includes("instrutor")) window.location.href = "cursoPSCRR3.html";
        else if (texto.includes("avaliações")) window.location.href = "cursoPSCRR4.html";

        // Login e Cadastro
        else if (texto === "entrar" || el.classList.contains("btn-green-block")) {
            window.location.href = "login.html";
        }
        else if (texto.includes("cadastrar") || texto.includes("matricular") || texto.includes("começar agora")) {
            window.location.href = "cadastro.html";
        }

        // Botão Explorar da Home
        else if (texto.includes("explorar") || el.classList.contains("btn-green-large")) {
            window.location.href = "cursos.html";
        }
    });
});