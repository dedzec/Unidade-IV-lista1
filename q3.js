/* Questão: 3. Faça uma função e um programa de teste para o cálculo
 *      do volume de uma esfera. Sendo que o raio e passado por parâmetro
 * Autor: Lucas Leal Magalhães
 * Data: 18/07/2023
 **/
const prompt = require('prompt-sync')();

function volume(raio) {
  return (4 / 3) * 3.14 * (raio * raio * raio);
}

function start() {
  let raio = parseFloat(prompt('Digite o raio da esfera: '));

  if (!isNaN(raio)) {
    console.log(`Volume da esfera é ${volume(raio)}`);
  } else {
    console.log('Você não digitou um número');
  }
}

start();
