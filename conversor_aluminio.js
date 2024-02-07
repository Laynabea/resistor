let resitencia = 0.0282  //0.0282 0. mm²/m condutor do alumínio

let comprimento = 1555
let secaoTransversal = 2.5  //o valor mínimo é 1 para não dividir por zero
let resistencia = 0 

resistencia = (resististividade * comprimento) / areaTranversal

console.log("O valor da resistência é = ", resistencia)