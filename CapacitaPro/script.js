document.addEventListener("DOMContentLoaded", function() {
    console.log("CapacitaPro: Sistema unificado rodando!");

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

    // --- 2. FILTRO DE CURSOS (SÓ RODA NA PÁGINA DE CURSOS) ---
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

    // --- 3. CLIQUES GERAIS (LOGIN, SAIBA MAIS, ABAS) ---
    document.addEventListener("click", function(e) {
        const el = e.target.closest("a, button, p, span, .tab, .tab-item");
        if (!el) return;

        const texto = el.innerText ? el.innerText.toLowerCase().trim() : "";

        // BOTÃO ENTRAR (CORREÇÃO PARA O LOGIN)
        if (texto === "entrar" || el.classList.contains("btn-green-block") || el.classList.contains("btn-outline")) {
            e.preventDefault(); 
            if (window.location.href.includes("login.html")) {
                window.location.href = "inicio.html"; 
            } else {
                window.location.href = "login.html";
            }
            return;
        }

        // SAIBA MAIS - PRIMEIROS SOCORROS
        if (texto === "saiba mais") {
            const cardPai = el.closest(".course-card");
            if (cardPai && cardPai.innerText.includes("Primeiros Socorros")) {
                window.location.href = "cursoPSCRR.html";
                return;
            }
        }

        // NAVEGAÇÃO ENTRE ABAS DO CURSO
        if (texto.includes("sobre o curso")) window.location.href = "cursoPSCRR.html";
        else if (texto.includes("conteúdo")) window.location.href = "cursoPSCRR2.html";
        else if (texto.includes("instrutor")) window.location.href = "cursoPSCRR3.html";
        else if (texto.includes("avaliações")) window.location.href = "cursosPCSRR4.html";

        // CADASTRO
        else if (texto.includes("cadastrar") || texto.includes("matricular") || texto.includes("começar agora")) {
            window.location.href = "cadastro.html";
        }

        // EXPLORAR / CONHECER CURSOS (Ajustado para funcionar na página Sobre)
        else if (texto.includes("explorar") || texto.includes("conhecer cursos") || el.classList.contains("btn-green-large")) {
            window.location.href = "cursos.html";
        }
    });

    // =============================================
    // API DE LOGIN COM GOOGLE (FIREBASE) - FUNCIONANDO DE VERDADE
    // =============================================
    
    // Verificar se está na página de login
    if (window.location.href.includes("login.html")) {
        // Importar Firebase dinamicamente
        import('https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js')
            .then(async (firebaseApp) => {
                const firebaseAuth = await import('https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js');
                
                // Configurações do Firebase
                const firebaseConfig = {
                    apiKey: "AIzaSyDEI41ng8XESC761m6ym3NiNCm4W9JvWmM",
                    authDomain: "capacitapro-d8a0c.firebaseapp.com",
                    projectId: "capacitapro-d8a0c",
                    storageBucket: "capacitapro-d8a0c.firebasestorage.app",
                    messagingSenderId: "202290974531",
                    appId: "1:202290974531:web:e611fbd9fbc196ca6d69f6"
                };

                // Inicializar Firebase
                const app = firebaseApp.initializeApp(firebaseConfig);
                const auth = firebaseAuth.getAuth(app);
                const provider = new firebaseAuth.GoogleAuthProvider();

                // Adicionar evento ao botão do Google (quando ele existir)
                const verificarBotao = setInterval(() => {
                    const btnGoogle = document.querySelector('.btn-google-login');
                    if (btnGoogle) {
                        clearInterval(verificarBotao);
                        btnGoogle.addEventListener('click', async function(e) {
                            e.preventDefault();
                            try {
                                console.log("🔐 Abrindo popup do Google...");
                                const result = await firebaseAuth.signInWithPopup(auth, provider);
                                const user = result.user;
                                alert(`✅ Bem-vindo(a), ${user.displayName}! Login realizado com sucesso.`);
                                console.log("Usuário logado:", user.email);
                                window.location.href = "inicio.html";
                            } catch (error) {
                                console.error("❌ Erro no login:", error);
                                if (error.code === "auth/unauthorized-domain") {
                                    alert("Erro: Domínio não autorizado.\n\nSolução: No Firebase Console, vá em Authentication > Settings > Authorized domains e adicione: localhost");
                                } else {
                                    alert("Erro ao fazer login: " + error.message);
                                }
                            }
                        });
                    }
                }, 100);
            })
            .catch(error => {
                console.error("Erro ao carregar Firebase:", error);
            });
    }
});
