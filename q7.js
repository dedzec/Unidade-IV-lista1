/* Questão: 7. Crie uma função que recebe um inteiro positivo e teste
 *      para saber se ele é primo ou não. Faça um script que recebe
 *      um inteiro n e mostra todos os primos, de 1 até n.
 * Autor: Lucas Leal Magalhães
 * Data: 18/07/2023
 **/
const prompt = require('prompt-sync')();

function primo(num) {
  for (let n = 1; n <= num; n++) {
    let res = 0;
    for (let i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        res++;
        break;
      }
    }

    if (res == 0) {
      console.log(`${n} é um número primo`);
    }
  }
}

function start() {
  let num = parseFloat(prompt('Digite um número: '));

  if (!isNaN(num)) {
    primo(num);
  } else {
    console.log('Você não digitou um número');
  }
}

start();
