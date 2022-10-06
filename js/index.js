// FETCH PROYECTOS 


// PROJECT 1
//  1. Almaceno data en una funcion async
const getData = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    const data = await promise.json()
    return data
}
 
// 2. Creo la funcion que llamara a la data function y mostrara en el HTML la info
const start = async () => {
    let object1  = await getData()
   document.querySelector('#firstProjectTitle').innerHTML = object1.title

//    Si pongo el titulo en big project me saca el body en recent projects
//    document.querySelector('#bigProjectTitle').innerHTML = object1.title
   document.querySelector('#firstProjectContent').innerHTML = object1.body
}

// 3. Creo el evento de escucha
window.addEventListener('load', start)


// PROYECTO 2: idem 
const getData2 = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts/7')
    const data = await promise.json()
    return data
}
 
const start2 = async () => {
    let object2  = await getData2()
   document.querySelector('#secondProjectTitle').innerHTML = object2.title
   document.querySelector('#secondProjectContent').innerHTML = object2.body
}


window.addEventListener('load', start2)

// !!!!!!!PREGUNTA: puedo hacer un solo event listener con las 3 funciones?



// PROYECTO 3:

const getData3 = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts/5')
    const data = await promise.json()
    return data
}
 
const start3 = async () => {
    let object3  = await getData3()
   document.querySelector('#thirdProjectTitle').innerHTML = object3.title 
   document.querySelector('#thirdProjectContent').innerHTML = object3.body
}


window.addEventListener('load', start3)




// MENU HAMBURGUESA

const hamburgerMenu = document.querySelector('.hamburgerMenu')
const navMenu = document.querySelector('.navMenu')

hamburgerMenu.addEventListener("click", () => {
    console.log("click")
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("activeMenu");
})

const emailPag1 = document.querySelector('#emailPag1')
const suscribeBtnPag1 = document.querySelector('#suscribeBtn1')
const validarMail = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailPag1.value.match(mailformat)) {
        return true; 
    } 
    else {
        alert("Invalid email address!")
        return false;
    }
}


suscribeBtnPag1.addEventListener('click', validarMail)