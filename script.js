// Tamanho inicial da fonte
let tamanhoFonte = 16;

// Elementos
const body = document.body;
const aumentarFonte = document.getElementById("aumentar-fonte");
const diminuirFonte = document.getElementById("diminuir-fonte");
const altoContraste = document.getElementById("alto-contraste");

// Aumentar fonte
aumentarFonte.addEventListener("click", () => {
    tamanhoFonte += 2;
    body.style.fontSize = tamanhoFonte + "px";
});

// Diminuir fonte
diminuirFonte.addEventListener("click", () => {
    tamanhoFonte -= 2;
    body.style.fontSize = tamanhoFonte + "px";
});

// Alto contraste
altoContraste.addEventListener("click", () => {
    body.classList.toggle("alto-contraste");
});

// Quiz
const botaoQuiz = document.getElementById("botao-quiz");
botaoQuiz.addEventListener("click", () => {
    let pontos = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "certo") pontos++;

    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "certo") pontos++;

    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "certo") pontos++;

    const resultado = document.getElementById("resultado");

    // Mensagens motivacionais
    if (pontos === 3) {
        resultado.innerHTML = "Parabéns! 🌳 Você acertou tudo e é um verdadeiro Guardião da Natureza!";
    } else if (pontos === 2) {
        resultado.innerHTML = "Muito bem! 😊 Você conhece bastante sobre preservação ambiental.";
    } else if (pontos === 1) {
        resultado.innerHTML = "Você acertou 1 pergunta. Continue aprendendo sobre o meio ambiente!";
    } else {
        resultado.innerHTML = "Continue estudando 🌱 Pequenas atitudes ajudam a salvar o planeta.";
    }
});

// Contador de árvores
let contadorArvores = 0;
const numeroArvores = document.getElementById("numero-arvores");
const botaoArvore = document.getElementById("botao-arvore");

botaoArvore.addEventListener("click", () => {
    contadorArvores++;
    numeroArvores.textContent = contadorArvores;
});
