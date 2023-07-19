/* Questão: 4. Faça uma função que receba 3 números inteiros como parâmetro,
 *      representando horas, minutos e segundos, e os converta em segundos.
 * Autor: Lucas Leal Magalhães
 * Data: 18/07/2023
 **/
const prompt = require('prompt-sync')();

function segundos(h, m, s) {
  return s + m * 60 + h * 60 * 60;
}

function start() {
  let h = parseInt(prompt('Digite a hora: '), 10);
  let m = parseInt(prompt('Digite o(s) minuto(s): '), 10);
  let s = parseInt(prompt('Digite o(s) segundo(s): '), 10);

  if (!isNaN(h) && !isNaN(m) && !isNaN(s)) {
    console.log(`O total de segundos -> ${segundos(h, m, s)}`);
  } else {
    console.log('Você não digitou um número');
  }
}

start();
