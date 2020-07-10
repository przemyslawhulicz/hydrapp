import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

const glassCounting = document.querySelector('.glass__counting--js');
const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const key = new Date().toLocaleString().slice(0, 10);

let currentGlassCounting = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
    currentGlassCounting = localStorageValue;
} else {
    localStorage.setItem(key, 0);
}

glassCounting.innerHTML = currentGlassCounting;


buttonAdd.addEventListener('click', () => {
    currentGlassCounting++;
    glassCounting.innerHTML = currentGlassCounting;
    localStorage.setItem(key, currentGlassCounting);
});

buttonRemove.addEventListener('click', () => {
    if (currentGlassCounting > 0) {
        currentGlassCounting--;
    }
    glassCounting.innerHTML = currentGlassCounting;
    localStorage.setItem(key, currentGlassCounting);
});
