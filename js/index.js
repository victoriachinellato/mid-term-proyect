// FETCH PROYECTOS

// PROJECT 1
//  1. Almaceno data en una funcion async
const getData = async () => {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data = await promise.json();
  return data;
};

// 2. Creo la funcion que llamara a la data function y mostrara en el HTML la info
const start = async () => {
  let object1 = await getData();
  document.querySelector("#firstProjectTitle").innerHTML = object1.title;
  document.querySelector("#firstProjectContent").innerHTML = object1.body;
};

// 3. Creo el evento de escucha
window.addEventListener("load", start);

// PROYECTO 2: idem
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

// !!!!!!!PREGUNTA: puedo hacer un solo event listener con las 3 funciones?

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

// MENU HAMBURGUESA

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");

hamburgerMenu.addEventListener("click", () => {
  console.log("click");
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("activeMenu");
});

const emailPag1 = document.querySelector("#emailPag1");
const suscribeBtnPag1 = document.querySelector("#suscribeBtn1");
const validarMail = () => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailPag1.value.match(mailformat)) {
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
};

suscribeBtnPag1.addEventListener("click", validarMail);

//Randerizado de imagenes
const services = [
  {
    img: "FOTOS/our services section/1.svg",
    title: "User Interface Design",
    text: "Circle provides you with a stunning user interface design that is accessible to everyone.",
  },
  {
    img: "FOTOS/our services section/2.svg",
    title: "User Experience Design",
    text: "Circle always focuses on delivering the best user experience to your customers.",
  },
  {
    img: "FOTOS/our services section/3.svg",
    title: "Application Development",
    text: "We develop high-quality mobile and web applications using the latest technology stack.",
  },
];

let html = "";

for (i = 0; i < services.length; i++) {
  html += `<div class="eachService">
    <div class="imageContainer">
        <img id="service1img" src="${services[i].img}" alt="Our services section icon 1">
    </div>
    <h3>${services[i].title}</h3>
    <p>${services[i].text}</p>
    <a href="#">Learn More</a>
</div>`;
}

document.querySelector("#theServices").innerHTML = html;
