import {
    caixaPerguntas, caixaAlternativas, textoResultado,
    perguntas, perguntaAtual,
    getAtual, setAtual, getHistoriaFinal, setHistoriaFinal
} from './_variables.js';

export function mostraPergunta() {
    if (getAtual() >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[getAtual()];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcao) {
    const historia = getHistoriaFinal() + opcao.afirmacao + " ";
    setHistoriaFinal(historia);
    setAtual(getAtual() + 1);
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = getHistoriaFinal().trim();
    caixaAlternativas.textContent = "";

    const botao = document.createElement("button");
    botao.textContent = "Recomeçar";
    botao.onclick = reiniciarQuiz;
    caixaAlternativas.appendChild(botao);
}

function reiniciarQuiz() {
    setAtual(0);
    setHistoriaFinal("");
    mostraPergunta();
}