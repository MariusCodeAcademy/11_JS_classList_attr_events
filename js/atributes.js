'use strict';
console.log('atributes.js file was loaded');

// prideti title atributa h1 elementui
// <h1 title="I am main">Atributes</h1>
const h1El = document.querySelector('h1');
console.log('h1El ===', h1El);

// setAttribute(key, value) - universalus atributo uzdejimas
// h1El.setAttribute('title', 'I am main');
h1El.title = 'I am main';

// <h2 id="title">Some title but not class</h2> uzdeti classe
// specialTitle
const h2El = document.getElementById('title');
console.log('h2El ===', h2El);
console.log('h2El.className ===', h2El.className);
// h2El.setAttribute('class', 'specialTitle');
// h2El.className = h2El.className + ' specialTitle';
// h2El.removeAttribute('class');

// <img id="mainImg" alt="some image"> uzdeti src atributa
// https://picsum.photos/id/14/300/600
const imgEl = document.getElementById('mainImg');
console.log('imgEl ===', imgEl);
imgEl.setAttribute('src', 'https://picsum.photos/id/14/300/300');
