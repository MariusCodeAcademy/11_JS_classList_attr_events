'use strict';
console.log('input.js file was loaded');

// taikomes
const mainInputEl = document.getElementById('mainInput');
const inputBtnEl = document.getElementById('inputBtn');
const outEl = document.getElementById('out');
// console.log(mainInputEl, inputBtnEl);
// console.log('outEl ===', outEl);

inputBtnEl.addEventListener('click', () => {
  // console.log('ar veikia');
  // paimti kas ivesta i input
  const ivestaReiksme = mainInputEl.value;
  // iskonsolinti
  console.log('ivestaReiksme ===', ivestaReiksme);
  // irasyti gauta reikme i out elementa

  // 2a pratimas
  // nudazyti h1 elmento fono spalva su ivesties reiksme is input elmento
});
