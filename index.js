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
    console.log(object1)
   document.querySelector('#firstProjectTitle').innerHTML = object1.title
   
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


// PROJECT PAGE
// !!!!!!!!!!PREGUNTA: Como usar los que son formato text

const getData4 = async () => {
    const promise = await fetch ('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')
    const data = await promise.json()
    return data
}    

const startProject = async ()=> {

    let object4 = await getData4()
    console.log(object4)
    document.querySelector('.bigProjectText').innerHTML = object4
}



window.addEventListener('load', startProject)
