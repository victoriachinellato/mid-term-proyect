// MENU HAMBURGUESA

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");

hamburgerMenu.addEventListener("click", () => {
  console.log("click");
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("activeMenu");
});

// simulacion metodo post

const phone = document.querySelector("#phoneInput");
const message = document.querySelector("#messageInput");
const fullName = document.querySelector("#fullNameInput");
const email = document.querySelector("#emailInput");
const form = document.querySelector(".contactUsForm");

const showName = () => {
  console.log(`name: ${fullName.value}`);
};

const showEmail = () => {
  console.log(`email: ${email.value}`);
};

const showMessage = () => {
  console.log(`message: ${message.value}`);
};

const showPhone = () => {
  console.log(`phone: ${phone.value}`);
};

form.addEventListener("submit", () => {
  if (validarTexto() && validarMail3()) {
    showEmail();
    showMessage();
    showPhone();
    showName();
    validarTexto();
  }
});

// validacion de texto obligatorio (full name y message)

const validarTexto = () => {
  if (fullName.value.length === 0) {
    alert("Please fill in full name field");
    return false;
  }
  if (message.value.length === 0) {
    alert("Please fill in message field");
    return false;
  }
  return true;
};

// validacion mail

const validarMail3 = () => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
};
