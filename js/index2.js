// MENU HAMBURGUESA

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");

hamburgerMenu.addEventListener("click", () => {
  console.log("click");
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("activeMenu");
});

// BIG PROJECT TITLE
//  1. Almaceno data en una funcion async
const getBigData = async () => {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data = await promise.json();
  return data;
};

// 2. Creo la funcion que llamara a la data function y mostrara en el HTML la info
const BigStart = async () => {
  let object1 = await getBigData();
  document.querySelector("#bigProjectTitle").innerHTML = object1.title;
};

// 3. Creo el evento de escucha
window.addEventListener("load", BigStart);

const getData4 = async () => {
  const promise = await fetch(
    "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
  );
  const data = await promise.json();
  return data;
};

const startProject = async () => {
  let object4 = await getData4();
  document.querySelector(".bigProjectText").innerHTML = object4;
};

window.addEventListener("load", startProject);

// PROYECTO 2:
const getData2 = async () => {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts/7");
  const data = await promise.json();
  return data;
};

const start2 = async () => {
  let object2 = await getData2();
  document.querySelector("#secondProjectTitle").innerHTML = object2.title;
  document.querySelector("#secondProjectContent").innerHTML = object2.body;
};

window.addEventListener("load", start2);

// PROYECTO 3:

const getData3 = async () => {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts/5");
  const data = await promise.json();
  return data;
};

const start3 = async () => {
  let object3 = await getData3();
  document.querySelector("#thirdProjectTitle").innerHTML = object3.title;
  document.querySelector("#thirdProjectContent").innerHTML = object3.body;
};

window.addEventListener("load", start3);

// PROYECTO 4 (reemplazo del 1 de la Home Page)

const getData5 = async () => {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts/8");
  const data = await promise.json();
  return data;
};

const start5 = async () => {
  let object5 = await getData5();
  document.querySelector("#fourthProjectTitle").innerHTML = object5.title;
  document.querySelector("#fourthProjectContent").innerHTML = object5.body;
};

window.addEventListener("load", start5);

// VALIDACIÓN EMAIL

const emailPag2 = document.querySelector("#emailPag2");
const suscribeBtnPag2 = document.querySelector("#suscribeBtn2");

const validarMail2 = () => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailPag2.value.match(mailformat)) {
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
};

suscribeBtnPag2.addEventListener("click", validarMail2);
