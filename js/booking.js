// booking page reservation form
// Variables for Form Elements
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

//const select = document.getElementById('am-pm');
const arrow = document.getElementById('arrow');
const select = document.getElementById('select');


// Variables for Number Picker
const people = document.getElementById('people');
const iconMinus = document.getElementById('icon-minus');
const iconPlus = document.getElementById('icon-plus');

function showMsgAlert (input) {
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
    } else if (input === hour || input === min) {
      let errorMessage = time.querySelector('form__message');
      errorMessage.className = 'form__message form__message--error';
      errorMessage.innerText = 'This field is incomplete';
    }
}

function removeMsgAlert(input){
  input.className = 'form__input';

  if (input === formName || input === formEmail) {
    let formField = input.parentElement;
    let errorMessage = formField.querySelector('.form__message');
    errorMessage.className = 'form__message';
  } else if (input === month || input === day || input || year){
    let errorMessage = date.querySelector('.form__message');
    errorMessage.className = 'form__message';
  } else if (input === hour || input === min) {
    let errorMessage = time.querySelector('.form__message');
    errorMessage.className = 'form__message';
  }
}

// Check email input

function checkEmail(input) {
  let regEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (regEx.test(input.value.trim())) {
    removeMsgAlert(input);
  } else {
    showMsgAlert(input);
  }
}

function checkFormInputs(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showMsgAlert(input);
    } else {
      removeMsgAlert(input);
    }
  });
}

function checkAmtPeople (people) {
  if (people.value > 0){
    return true;
  }
}

(function rotateArrow() {
  let active = false;
  arrow.addEventListener('click', () => {
    if (active) {
      arrow.className = 'font__input--arrow active';
    } else {
      arrow.className = 'font__input--arrow';
    }
    active = !active;
  });
})(rotateArrow);

iconMinus.addEventListener('click', () => {
  people.value = parseInt(people.value) - 1;
});

iconPlus.addEventListener('click', () => {
  people.value = parseInt(people.value) + 1;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkFormInputs([formName, formEmail, month, day, year, hour, min]);
  checkEmail(formEmail);
  checkAmtPeople(people);
});
