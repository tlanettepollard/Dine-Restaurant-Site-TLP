// booking page reservation form

const form = document.getElementById('form');
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');

const date = document.getElementById('date');
const month = document.getElementById('month');
const day = document.getElementById('day');
const year = document.getElementById('year');

const time = document.getElementById('time');
const hour = document.getElementById('hour');
const min = document.getElementById('min');

const arrow = document.getElementById('arrow');

const people = document.getElementById('people');
const iconMinus = document.getElementById('icon-minus');
const iconPlus = document.getElementById('icon-plus');

function msgAlert (input) {
    input.className = 'form__input form__input--error';

    if (input === formName || input === formEmail) {
      let formField = input.parentElement;
      let errorMessage = formField.querySelector('.form__message');
      errorMessage.className = 'form__message form__message--error';
      errorMessage.innerText = 'This field is required';
    } else if (input === month || input === day || input === year){
      let errorMessage = date.querySelector('.form__message');
      errorMessage.className = 'form__message form__message--error';
      errorMessage.innerText = 'This field is incomplete';
    }
}





