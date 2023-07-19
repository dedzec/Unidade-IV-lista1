/* Questão: 2. Faça uma função que receba a data atual (dia, mês e ano
 *      em inteiro) e exiba-a na tela no formato textual por extenso.
 *      Exemplo: Data: 01/01/2000, Imprimir: 1 de janeiro de 2000.
 * Autor: Lucas Leal Magalhães
 * Data: 18/07/2023
 **/
const prompt = require('prompt-sync')();

const correctDate = (d) => {
  return d < 10 ? `0${d}` : d;
};

function start() {
  let dia = parseInt(prompt('Digite um dia: '), 10);
  let mes = parseInt(prompt('Digite um mês: '), 10);
  let ano = parseInt(prompt('Digite um ano: '), 10);

  if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
    console.log(`${correctDate(dia)}/${correctDate(mes)}/${ano}`);
  } else {
    console.log('Você não digitou um número');
  }
}

start();
