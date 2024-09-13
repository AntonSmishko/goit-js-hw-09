let formData = {
  email: "",
  message: "",
};

const FORM_DATA_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const textArea = formEl.querySelector("textarea");
const inputEl = formEl.querySelector("input");

const formHandler = event => {
  event.preventDefault();
  const { email, message } = event.target.elements;
  if (email.value === "" || message.value === "") {
    alert("Fill please all fields");
    return;
  }
  console.log(formData);
  localStorage.removeItem(FORM_DATA_KEY);
  event.target.reset();
};

formEl.addEventListener("submit", formHandler);
textArea.addEventListener("input", textAreaHandler);
inputEl.addEventListener("input", inputHandler);

function inputHandler(evt) {
  console.log(evt.target.value);
  formData.email = evt.target.value;
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
}

function textAreaHandler(evt) {
  console.log(evt.target.value);
  formData.message = evt.target.value;
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
}

console.log(textArea);
