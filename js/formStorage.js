const fullName = document.getElementById('fullname');
const addressEmail = document.getElementById('email');
const textMsg = document.getElementById('comment');
const formInputData = {
  name: '',
  email: '',
  text: '',
};

const saveDataLocally = () => {
  formInputData.name = fullName.value;
  formInputData.email = addressEmail.value;
  formInputData.text = textMsg.value;
  localStorage.setItem('formData', JSON.stringify(formInputData));
};

const updateData = () => {
  const storedData = JSON.parse(localStorage.getItem('formData'));
  fullName.value = storedData.name;
  addressEmail.value = storedData.email;
  textMsg.value = storedData.text;
};

const typeListen = (inputElement) => {
  inputElement.addEventListener('input', () => {
    saveDataLocally();
  });
};

typeListen(fullName);
typeListen(addressEmail);
typeListen(textMsg);

updateData();
