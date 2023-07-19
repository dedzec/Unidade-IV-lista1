/* Questão: 1. Crie uma função que recebe como parâmetro um número
 *      inteiro e devolve o seu dobro.
 * Autor: Lucas Leal Magalhães
 * Data: 18/07/2023
 **/
const prompt = require('prompt-sync')();

function dobro(num) {
  return num * num;
}

function start() {
  let num = parseFloat(prompt('Digite um número: '));

  if (!isNaN(num)) {
    console.log(`O dobro de ${num} é ${dobro(num)}`);
  } else {
    console.log('Você não digitou um número');
  }
}

start();
