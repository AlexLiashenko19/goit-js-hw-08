import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle((e) => {
  const keyName = e.target.name;
  const keyMessage = e.target.value;

  localStorage.setItem(keyName, keyMessage);
}, 500));

const email = localStorage.getItem('email');
const message = localStorage.getItem('message');

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;

  console.log({ email, message });
  localStorage.clear();
  refs.form.reset();
});

function onPageLoad() {
  refs.form.elements.email.value = email || ""; // Provide a default empty string if 'email' is not present in local storage
  refs.form.elements.message.value = message || ""; // Provide a default empty string if 'message' is not present in local storage
}

onPageLoad();
