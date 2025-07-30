export const caixaPrincipal = document.querySelector(".caixa-principal");
export const caixaPerguntas = document.querySelector(".caixa-perguntas");
export const caixaAlternativas = document.querySelector(".caixa-alternativas");
export const caixaResultado = document.querySelector(".caixa-resultado");
export const textoResultado = document.querySelector(".texto-resultado");

export let perguntaAtual;
export const perguntas = [];
let atual = 0;
let historiaFinal = "";

export function getAtual() { return atual; }
export function setAtual(valor) { atual = valor; }
export function getHistoriaFinal() { return historiaFinal; }
export function setHistoriaFinal(valor) { historiaFinal = valor; }