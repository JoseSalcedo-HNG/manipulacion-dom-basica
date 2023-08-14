/*const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

//h1.innerHTML = 'Patito';
//h1.innerText = 'Patito <br> feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "4567";

const img = document.createElement('img');
img.setAttribute('src', 'https://fondosmil.com/fondo/2257.jpg');
console.log(img);

pid.innerHTML = '';
pid.append(img);*/
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

btn.addEventListener('click', sumarInputValue);


function sumarInputValue(event) {
    // console.log({event});
    // event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "resultado: " + sumaInputs;
}
