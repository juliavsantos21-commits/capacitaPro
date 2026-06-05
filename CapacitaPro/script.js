document.addEventListener("DOMContentLoaded", function() {
    console.log("CapacitaPro: Sistema unificado rodando!");

    // --- 1. VALIDAÇÃO DO BOTÃO ENTRAR (Direta e Isolada) ---
    const btnEntrarTradicional = document.getElementById('btn-entrar-tradicional');
    if (btnEntrarTradicional) {
        btnEntrarTradicional.addEventListener('click', function(e) {
            e.preventDefault();

            const campoUsuario = document.getElementById('login-usuario');
            const campoSenha = document.getElementById('login-senha');

            const usuario = campoUsuario ? campoUsuario.value.trim() : "";
            const senha = campoSenha ? campoSenha.value.trim() : "";

            if (usuario === "" || senha === "") {
                alert("⚠️ Erro: Por favor, preencha o E-mail/Matrícula e a Senha para entrar!");
                return;
            }

            alert("✅ Login realizado com sucesso! A entrar no Portal do Aluno...");
            window.location.href = "alunos.html";
        });
    }

    // --- 2. NAVEGAÇÃO DA NAVBAR ---
    const linksNav = document.querySelectorAll("nav ul li a");
    linksNav.forEach(link => {
        link.addEventListener("click", function(e) {
            const texto = this.innerText.toLowerCase().trim();
            if (this.getAttribute("href") === "#" || this.getAttribute("href") === "") {
                e.preventDefault();
                if (texto === "início" || texto === "inicio") window.location.href = "alunos.html";
                else if (texto === "cursos") window.location.href = "cursos.html";
                else if (texto === "sobre") window.location.href = "sobre.html";
                else if (texto === "contato") window.location.href = "contato.html";
            }
        });
    });

    // --- 3. FILTRO DE CURSOS ---
    const btnFiltrar = document.getElementById('btn-filtrar-v2');
    const btnLimpar = document.getElementById('btn-limpar-v2');

    if (btnFiltrar) {
        btnFiltrar.onclick = function() {
            const area = document.getElementById('filter-area').value;
            const nivel = document.getElementById('filter-nivel').value;
            const status = document.getElementById('filter-status').value;
            
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
                
                card.style.display = (matchArea && matchNivel && matchStatus && matchBusca) ? "block" : "none";
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

    // --- 4. CLIQUES GERAIS (Ignora os botões das páginas de ação para evitar conflitos) ---
    document.addEventListener("click", function(e) {
        const el = e.target.closest("a, button, p, span, .tab, .tab-item");
        if (!el) return;

        // Adicionado o gatilho de upload aqui para evitar cliques errados
        if (el.id === "btn-entrar-tradicional" || el.id === "btn-finalizar-cadastro" || el.id === "btn-upload-gatilho" || el.classList.contains("btn-google-login")) {
            return;
        }

        const texto = el.innerText ? el.innerText.toLowerCase().trim() : "";

        if (texto === "entrar" || el.classList.contains("btn-outline")) {
            if (window.location.href.includes("login.html")) return;
            e.preventDefault(); 
            window.location.href = "login.html";
            return;
        }

        if (texto === "saiba mais") {
            const cardPai = el.closest(".course-card");
            if (cardPai && cardPai.innerText.includes("Primeiros Socorros")) {
                window.location.href = "cursoPSCRR.html";
                return;
            }
        }

        if (texto.includes("sobre o curso")) window.location.href = "cursoPSCRR.html";
        else if (texto.includes("conteúdo")) window.location.href = "cursoPSCRR2.html";
        else if (texto.includes("instrutor")) window.location.href = "cursoPSCRR3.html";
        else if (texto.includes("avaliações")) window.location.href = "cursosPCSRR4.html";

        else if (texto.includes("cadastrar") || texto.includes("matricular") || texto.includes("começar agora")) {
            window.location.href = "cadastro.html";
        }

        else if (texto.includes("explorar") || texto.includes("conhecer cursos") || el.classList.contains("btn-green-large")) {
            window.location.href = "cursos.html";
        }
    });

    // --- 5. VALIDAÇÃO E BOAS-VINDAS DO CADASTRO ---
    const btnFinalizarCadastro = document.getElementById('btn-finalizar-cadastro');
    if (btnFinalizarCadastro) {
        btnFinalizarCadastro.addEventListener('click', function(e) {
            e.preventDefault();

            const campoNome = document.getElementById('cadastro-nome');
            const campoEmail = document.getElementById('cadastro-email');
            const campoSenha = document.getElementById('cadastro-senha');
            const campoConfirmar = document.getElementById('cadastro-confirmar-senha');

            const nome = campoNome ? campoNome.value.trim() : "";
            const email = campoEmail ? campoEmail.value.trim() : "";
            const senha = campoSenha ? campoSenha.value.trim() : "";
            const confirmar = campoConfirmar ? campoConfirmar.value.trim() : "";

            if (nome === "" || email === "" || senha === "") {
                alert("⚠️ Erro: Por favor, preencha o seu Nome, E-mail e Senha para continuar!");
                return;
            }

            if (senha !== confirmar) {
                alert("⚠️ Erro: A confirmação de senha não coincide com a senha digitada!");
                return;
            }

            alert(`✨ Seja muito bem-vindo(a) à CapacitaPro, ${nome}!\n\nSeu cadastro foi realizado com sucesso e sua matrícula está confirmada. Bons estudos! 🚀`);
            window.location.href = "alunos.html";
        });
    }

    // --- 6. NOVO: SISTEMA DE UPLOAD DE HISTÓRICO ESCOLAR ---
    const arquivoHistorico = document.getElementById('arquivo-historico');
    const btnUploadGatilho = document.getElementById('btn-upload-gatilho');
    const textoUpload = document.getElementById('texto-upload');

    if (btnUploadGatilho && arquivoHistorico) {
        // Aciona a janela de escolha de arquivos do sistema
        btnUploadGatilho.addEventListener('click', function() {
            arquivoHistorico.click();
        });

        // Atualiza dinamicamente o texto do botão com o nome do arquivo selecionado
        arquivoHistorico.addEventListener('change', function() {
            if (this.files && this.files.length > 0) {
                const nomeArquivo = this.files[0].name;
                textoUpload.innerText = ` ${nomeArquivo} (Selecionado)`;
                btnUploadGatilho.style.background = "rgba(42, 245, 152, 0.2)"; // Feedback em verde suave
                btnUploadGatilho.style.borderColor = "#2af598";
            } else {
                textoUpload.innerText = "Upload de Histórico Escolar";
                btnUploadGatilho.style.background = "";
                btnUploadGatilho.style.borderColor = "";
            }
        });
    }
});