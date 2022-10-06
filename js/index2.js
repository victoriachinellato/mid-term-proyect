// BIG PROJECT TITLE
//  1. Almaceno data en una funcion async
const getBigData = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    const data = await promise.json()
    return data
}
 
// 2. Creo la funcion que llamara a la data function y mostrara en el HTML la info
const BigStart = async () => {
    let object1  = await getBigData()
   document.querySelector('#bigProjectTitle').innerHTML = object1.title
}

// 3. Creo el evento de escucha
window.addEventListener('load', BigStart)



const getData4 = async () => {
    const promise = await fetch ('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')
    const data = await promise.json()
    return data
}    

const startProject = async ()=> {

    let object4 = await getData4()
    document.querySelector('.bigProjectText').innerHTML = object4
}



window.addEventListener('load', startProject)


const emailPag2 = document.querySelector('#emailPag2')
const suscribeBtnPag2 = document.querySelector('#suscribeBtn2')

const validarMail2 = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailPag2.value.match(mailformat)) {
        return true; 
    } 
    else {
        alert("Invalid email address!")
        return false;
    }
}


suscribeBtnPag2.addEventListener('click', validarMail2)