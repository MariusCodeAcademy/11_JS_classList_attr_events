'use strict';
console.log('input.js file was loaded');

// taikomes
const mainInputEl = document.getElementById('mainInput');
const inputBtnEl = document.getElementById('inputBtn');
const outEl = document.getElementById('out');
const salygaEl = document.getElementById('salyga');
const h1El = document.querySelector('h1');
// console.log(mainInputEl, inputBtnEl);
// console.log('outEl ===', outEl);

inputBtnEl.addEventListener('click', () => {
  // console.log('ar veikia');
  // paimti kas ivesta i input
  const ivestaReiksme = mainInputEl.value;
  // iskonsolinti
  console.log('ivestaReiksme ===', ivestaReiksme);
  // irasyti gauta reikme i out elementa
  outEl.textContent = ivestaReiksme;
  // 2a pratimas
  // nudazyti h1 elmento fono spalva su ivesties reiksme is input elmento
  h1El.style.backgroundColor = ivestaReiksme;
});

// input events
// kai aktyvuojamas ivesties laukas
mainInputEl.addEventListener('focus', () => {
  console.log('ar tu esi fokuse???');
});
mainInputEl.addEventListener('blur', () => {
  console.log('kai iseinam is sufokusuoto lauko');
});
// kai keiciam value - ivedam arba trinam
mainInputEl.addEventListener('input', () => {
  console.count('kai kazka vedam i inputa');
  // atspausdinti tai kas ivedama
  const ivestaReiksme = mainInputEl.value;
  // irasyti gauta reikme i out elementa
  outEl.textContent = ivestaReiksme;
});

// checkbox pazymejimas
salygaEl.addEventListener('change', () => {
  console.log('did i change?');
});
