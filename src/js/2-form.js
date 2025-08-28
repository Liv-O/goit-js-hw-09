'use strict';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const text = form.elements.message;
const email = form.elements.email;

// if (localStorage.getItem('feedback-form-state')) {
//   text.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
//   email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
// }

text.value = formData.message =
  JSON.parse(localStorage.getItem('feedback-form-state'))?.message ?? '';
email.value = formData.email =
  JSON.parse(localStorage.getItem('feedback-form-state'))?.email ?? '';

function handleInp(event) {
  if (event.target.name === 'email') formData.email = event.target.value;
  if (event.target.name === 'message') formData.message = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', handleInp);

function handleSubmit(event) {
  event.preventDefault();
  if (text.value === '' || email.value === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
}

form.addEventListener('submit', handleSubmit);
