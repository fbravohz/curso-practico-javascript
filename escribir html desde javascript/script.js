const h1 = document.querySelector('h1');
const parrafo = document.querySelector('p');
const clase = document.querySelector('.p_clase');
const id = document.getElementById('p_id');
//https://stackoverflow.com/questions/55271251/vs-code-value-is-not-recognized-by-intellisense
/**
 * @type HTMLInputElement
 */
const input = document.querySelector('.nigga');

h1.innerHTML = "Tu<br>NEGRO";
h1.innerHTML = "<h4>my negro</h4>";
h1.innerText = "<h4>my negro</h4>";

console.log(h1.getAttribute('pantalla'))
console.log(clase.getAttribute('class'))
clase.setAttribute('class','Manzana')


h1.classList.add('rojo')
h1.classList.add('verde')

h1.classList.remove('verde')

console.log(h1.classList.contains('verde'))

input.value = 345
input.placeholder = "Eres negro o te pareces"

console.log({ h1, parrafo, clase, id, input})

const img = document.createElement('img');
img.setAttribute('src','https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://github.com/fluidicon.png&size=16')
console.log(img)
id.innerHTML = ""
id.append(img)