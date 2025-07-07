
const formData = {
    email: "",
    message: ""
}

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const inptLabel = document.querySelector(".inpt-label");
const msgLabel = document.querySelector(".msg-label");
const input = document.querySelector(".feedback-form input");
const textarea = document.querySelector(".feedback-form textarea");
const button = document.querySelector(".feedback-form button");

const savedData = localStorage.getItem(STORAGE_KEY)
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}
 
form.addEventListener("input", event => {
    if (event.target.name in formData) { 
        formData[event.target.name] = event.target.value.trim();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
});

form.addEventListener("submit", event => { 
    event.preventDefault();
    const isFormValid = formData !== "" && formData.message !== "";
    if (!isFormValid) { 
        alert("All fields should be filled");
        return;
    }
    console.log("Submitted data:", formData);
    
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
});

Object.assign(form.style, {
    backgroundColor: '#fff',
    width: `${408}px`,
    padding: `${24}px`,
});

Object.assign(inptLabel.style, {
    display: `flex`,
    flexDirection: `column`,
    gap: `${8}px`,
    fontFamily: `"Montserrat", sans-serif`,
    lineHeight: 1.5,
    letterSpacing: `${0.04}em`,
    color: `#2e2f42`,
    marginBottom: `${8}px`
});

Object.assign(msgLabel.style, {
    display: `flex`,
    flexDirection: `column`,
    gap: `${8}px`,
    fontFamily: `"Montserrat", sans-serif`,
    lineHeight: 1.5,
    letterSpacing: `${0.04}em`,
    color: `#2e2f42`,
    marginBottom: `${16}px`
    
});

Object.assign(input.style, {
    border: `${1}px solid #808080`,
    borderRadius: `${4}px`,
    height: `${40}px`,
    padding: `${8}px ${16}px`,
});

Object.assign(textarea.style, {
    border: `${1}px solid #808080`,
    borderRadius: `${4}px`,   
    padding: `${8}px ${16}px`,
});

Object.assign(button.style, {
    fontFamily: `"Montserrat", sans-serif`,
    color: `#fff`,
    lineHeight: 1.5,
    letterSpacing: `${0.04}em`,
    fontWeight: 500,
    borderRadius: `${8}px`,
    height: `${40}px`,
    innerWidth: `${95}px`,
    padding: `${8}px ${16}px`,
    backgroundColor: `#4e75ff`,
    border: `none`,

});

button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#6c8cff';
    button.style.cursor = 'pointer';
  });
button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#4e75ff';
  });

input.addEventListener('mouseenter', () => {
    input.style.border = `${1}px solid #000`;
  });
input.addEventListener('mouseleave', () => {
    input.style.border = `${1}px solid #808080`;
});
  
textarea.addEventListener('mouseenter', () => {
    textarea.style.border = `${1}px solid #000`;
  });
textarea.addEventListener('mouseleave', () => {
    textarea.style.border = `${1}px solid #808080`;
});

input.addEventListener("focus", () => {
    input.placeholder = "Type area"; // приховуємо при фокусі
});
input.addEventListener("blur", () => {
    input.placeholder = ""; // приховуємо при фокусі
});
  
textarea.addEventListener("focus", () => {
    textarea.placeholder = "Type area"; // приховуємо при фокусі
});
textarea.addEventListener("blur", () => {
    textarea.placeholder = ""; // приховуємо при фокусі
  });