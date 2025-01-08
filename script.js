'use strict';


// const resultado = document.querySelector('.message').textContent = 'Acertou!🎉';

const number = document.querySelector('.number').textContent = 13;
const score = document.querySelector('.score').textContent = 10;
const guess = document.querySelector('.guess').value = 10;

if(guess === number) {
    document.querySelector('.message').textContent = 'Acertou!🎉';
}else {
    document.querySelector('.message').textContent = 'Errou! Tente novamente!';
}