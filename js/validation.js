const email = document.getElementById("email");
const errorMsg = document.querySelector(".error-msg");
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = [];
  if (email.value.match(/[A-Z]/g) !== null) {
    msg.push("uppercase error");
    errorMsg.style.opacity = 1;
  } else if (msg.length > 0) {
    e.preventDefault();
  } else {
    form.submit();
  }
});
