let formData = {
  email: "",
  message: "",
};

const FORM_DATA_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");
const textArea = formEl.querySelector("textarea");
const inputEl = formEl.querySelector("input");
formEl.addEventListener("submit", formHandler);
formEl.addEventListener("input", inputFormHandler);

const formHandler = event => {
  event.preventDefault();
  const { email, message } = event.target.elements;
  if (email.value === "" || message.value === "") {
    alert("Fill please all fields");
    return;
  }

  formData.email = email.value;
  formData.message = message.value;

  console.log(formData);
  localStorage.removeItem(FORM_DATA_KEY);
  formData = { email: "", message: "" };
  event.target.reset();
};

// грузим на localStorage //
function inputFormHandler(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
}

// відновлення даних //

let formDataLocalS = localStorage.getItem(FORM_DATA_KEY);
if (formDataLocalS) {
  let parseFromStorage = JSON.parse(formDataLocalS);
  textArea.value = parseFromStorage.message;
  inputEl.value = parseFromStorage.email;
}
