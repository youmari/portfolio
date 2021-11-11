const addressEmail = document.getElementById('email');
const fullName = document.getElementById('fullname');
const textMsg = document.getElementById('comment');
const formInputData = {
  name: fullName.value,
  email: addressEmail.value,
  text: textMsg.value,
};

const saveDataLocally = () => {
  localStorage.setItem('formData', JSON.stringify(formInputData));
};

fullName.addEventListener('input', () => {
  formInputData.name = fullName.value;
  saveDataLocally();
});

addressEmail.addEventListener('input', () => {
  formInputData.email = addressEmail.value;
  saveDataLocally();
});

textMsg.addEventListener('input', () => {
  formInputData.text = textMsg.value;
  saveDataLocally();
});

const updateData = () => {
  const storedData = JSON.parse(localStorage.getItem('formData'));
  fullName.value = storedData.name;
  addressEmail.value = storedData.email;
  textMsg.value = storedData.text;
};

updateData();
