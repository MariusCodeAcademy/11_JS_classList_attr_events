'use strict';
console.log('input.js file was loaded');

// taikomes
const mainInputEl = document.getElementById('mainInput');
const inputBtnEl = document.getElementById('inputBtn');
const outEl = document.getElementById('out');
const salygaEl = document.getElementById('salyga');
const ilgisEl = document.getElementById('ilgis');
const h1El = document.querySelector('h1');
// console.log(mainInputEl, inputBtnEl);
// console.log('outEl ===', outEl);

inputBtnEl.addEventListener('click', () => {
  /** @type {string} */
  const inputValue = mainInputEl.value.trim();
  console.log('inputValue ===', inputValue);
  // ivesta reiksme turi buti uzpildyta
  if (inputValue.length === 0) {
    console.warn('iveksite reiksme');
  }
  // reikme butu min 5 simboliai
});

// input events
// kai aktyvuojamas ivesties laukas
mainInputEl.addEventListener('focus', () => {
  // console.log('ar tu esi fokuse???');
});
mainInputEl.addEventListener('blur', () => {
  // console.log('kai iseinam is sufokusuoto lauko');
});
// kai keiciam value - ivedam arba trinam
mainInputEl.addEventListener('input', inputHandler);

// checkbox pazymejimas
salygaEl.addEventListener('change', () => {
  console.log('did i change?');
});

function inputHandler() {
  // console.count('kai kazka vedam i inputa');
  // atspausdinti tai kas ivedama
  /**
   * @type {string}
   */
  const ivestaReiksme = mainInputEl.value;
  // irasyti gauta reikme i out elementa
  outEl.textContent = ivestaReiksme;
  // suskaiciuoti koks ivesto stringo ilgis
  const textIlgis = ivestaReiksme.length;
  // console.log('textIlgis ===', textIlgis);
  ilgisEl.textContent = textIlgis + ' vnt';

  // 2a pratimas
  // nudazyti h1 elmento fono spalva su ivesties reiksme is input elmento
  h1El.style.backgroundColor = ivestaReiksme;
}
