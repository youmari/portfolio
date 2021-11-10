const upperCheck = /[A-Z]/g;
const email = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  const msg = [];
  if (upperCheck.test(email.value)) {
    msg.push('uppercase error');
    errorMsg.style.opacity = 1;
  }

  if (msg.length > 0) {
    e.preventDefault();
  }
});
