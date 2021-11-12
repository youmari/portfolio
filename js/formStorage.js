const addressEmail = document.getElementById('email');
const fullName = document.getElementById('fullname');
const textMsg = document.getElementById('comment');
const formInputData = {
  name: fullName.value,
  email: addressEmail.value,
  text: textMsg.value,
};

const saveDataLocally = () => {
  formInputData.name = fullName.value;
  formInputData.email = addressEmail.value;
  formInputData.text = textMsg.value;
  localStorage.setItem('formData', JSON.stringify(formInputData));
};

fullName.addEventListener('input', () => {
  saveDataLocally();
});

addressEmail.addEventListener('input', () => {
  saveDataLocally();
});

textMsg.addEventListener('input', () => {
  saveDataLocally();
});

const updateData = () => {
  const storedData = JSON.parse(localStorage.getItem('formData'));
  fullName.value = storedData.name;
  addressEmail.value = storedData.email;
  textMsg.value = storedData.text;
};

updateData();
