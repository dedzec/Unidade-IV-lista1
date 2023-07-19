/* Questão: 6. A probabilidade de dar um valor em um dado é 1/6 (uma em 6).
 *      Faça um script em JavaScript que simule 1 milhão de lançamentos de
 *      dados e mostre a frequência que deu para cada número.
 * Autor: Lucas Leal Magalhães
 * Data: 18/07/2023
 **/

function start() {
  let d1 = 0,
    d2 = 0,
    d3 = 0,
    d4 = 0,
    d5 = 0,
    d6 = 0;
  let randDado;

  for (let i = 0; i < 1000000; i++) {
    randDado = Math.floor(1 + 6 * Math.random());
    switch (randDado) {
      case 1:
        d1++;
        break;
      case 2:
        d2++;
        break;
      case 3:
        d3++;
        break;
      case 4:
        d4++;
        break;
      case 5:
        d5++;
        break;
      case 6:
        d6++;
        break;
    }
  }

  console.log(`Frequência do numero 1 é ${d1}`);
  console.log(`Frequência do numero 2 é ${d2}`);
  console.log(`Frequência do numero 3 é ${d3}`);
  console.log(`Frequência do numero 4 é ${d4}`);
  console.log(`Frequência do numero 5 é ${d5}`);
  console.log(`Frequência do numero 6 é ${d6}`);
}

start();
