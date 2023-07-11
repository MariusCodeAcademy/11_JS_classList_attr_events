'use strict';
console.log('classList.js file was loaded');

// prideti clase h1 elementui
const h1El = document.querySelector('h1');
console.log('h1El ===', h1El);

// h1El.classList.add/remove/toggle/contains

h1El.classList.add('someClass');

// <h2 id="title">Some title but not class</h2> uzdeti classe
// specialTitle
const h2El = document.getElementById('title');
console.log('h2El ===', h2El);
h2El.classList.add('specialTitle');

// pasalinti klase
h2El.classList.remove('someOther');

// toggle - uzdeti jei nera, nuimti jei yra
// debugger;
h1El.classList.toggle('dark');
h1El.classList.toggle('dark');
h1El.classList.toggle('dark');

const darkBntEl = document.getElementById('darkMode');
console.log('darkBntEl ===', darkBntEl);

const bodyEl = document.body;
darkBntEl.addEventListener('click', () => {
  console.count('ar veikia');
  bodyEl.classList.toggle('dark');
});

// ar <h2 id="title" class="someOther kazka">Some title but not class</h2>
// turi klase 'kazka'
let arTuri = h2El.classList.contains('kazka');
console.log('arTuri ===', arTuri);
