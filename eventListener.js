const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

//OPCION A para evitar submits en formularios

// form.addEventListener('submit', sumarInputs);
// function sumarInputs(event){
//     console.log({event});
//     event.preventDefault();
//     console.log("boton clickado");
//     const suma = parseInt(input1.value) + parseInt(input2.value);
//     result.innerText = suma;
// }

//OPCION B para evitar submits en formularios

btn.addEventListener('click', btnOnClick);
function btnOnClick(){
    const suma = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = suma;
}