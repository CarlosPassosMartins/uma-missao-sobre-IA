import { caixaPerguntas, caixaAlternativas, perguntas } from './_variables.js';
import { mostraPergunta } from './_functions.js';

fetch("perguntas.json")
    .then(res => res.json())
    .then(data => {
        perguntas.length = 0;
        perguntas.push(...data);
        mostraPergunta();
    })
    .catch(err => {
        caixaPerguntas.textContent = "Erro ao carregar as perguntas.";
        console.error("Erro ao carregar perguntas.json:", err);
    });