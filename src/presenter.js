import marcador from './tennis.js';

let p1 = 0;
let p2 = 0;

const resultado = document.querySelector("#resultado");

document.querySelector('#p1-btn').addEventListener("click", () => {
  p1++;
  resultado.innerHTML = marcador(p1, p2);
});

document.querySelector('#p2-btn').addEventListener("click", () => {
  p2++;
  resultado.innerHTML = marcador(p1, p2);
});