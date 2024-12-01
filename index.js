const nameInput = document.getElementById('name');
const passInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const checkbox = document.getElementById('checkbox');
const btn = document.getElementById('button');
const form = document.getElementById('form');
const terms = document.getElementById('terms');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    nameInput.value.trim() !== '' &&
    passInput.value.trim() !== '' &&
    emailInput.value.trim() !== '' &&
    checkbox.checked
  ) {
    form.reset();
    PNotify.success({
      text: 'Success',
      delay: 2000,
    });
  } else {
    PNotify.error({
      text: 'Fill in all forms',
      delay: 2000,
    });
  }
});

terms.addEventListener('click', (e) => {
  e.preventDefault();
  PNotify.info({
    text: 'this is our terms and conditions',
    delay: 2000,
  });
});
