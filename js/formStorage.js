const fullName = document.getElementById('fullname');
//const email = document.getElementById('email');
const textMsg = document.getElementById("comment");
const formInputData = {
    name: fullName.value,
    email: email.value,
    text: textMsg.value
}

fullName.addEventListener("input", () => {
  formInputData.name = fullName.value;
  saveDataLocally();

});

email.addEventListener("input", () => {
  formInputData.email = email.value;
  saveDataLocally();

});

textMsg.addEventListener("input", () => {
  formInputData.text = textMsg.value;
  saveDataLocally();
});

function saveDataLocally() {
    localStorage.setItem('formData',JSON.stringify(formInputData));
}

function updateData() {
    const storedData  = JSON.parse(localStorage.getItem('formData'));
    fullName.value = storedData.name;
    email.value = storedData.email;
    textMsg.value = storedData.text;
}


updateData();