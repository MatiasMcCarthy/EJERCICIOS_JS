/* Ejercicio 1
Filtrar Números Pares
Crear una función que reciba un array con números del 0 al 10, y devuelva un
nuevo array que contenga solo los números pares. */

let ArrayNumeros=[0,1,2,3,4,5,6,7,8,9,10,11]

function mostrarPares(numeros){
    let arrayNumerosPares=numeros.filter(itemArray=>{
        return itemArray % 2==0;
    })
 console.log(arrayNumerosPares);
}
mostrarPares(ArrayNumeros);

/* Ejercicio 2

Calcular Promedio
Escribir una función que tome un array de números y calcule el promedio. */

function calcularPromedio(numeros){
    let sumaElementos=0
    let promedio=0;
    numeros.forEach(item => {
        sumaElementos=sumaElementos+item;
    });
    console.log(promedio=sumaElementos/numeros.length)
}
calcularPromedio(ArrayNumeros);

/* Ejercicio 3
Imprimir con Retraso
Usar una función flecha y setTimeout para imprimir cada elemento de un array
con un retraso de 1 segundo por elemento. */



const funcionFlecha=(array)=>{
  
    for(let i=0;i<array.length;i++){
        
        
        setTimeout(()=>{console.log(array[i]);},1000*i)
  }
}
funcionFlecha(ArrayNumeros);

/* Ejercicio 4
Operación con Callback
Crear una función que reciba un callback y dos números, aplique el callback y
devuelva el resultado. Implementar al menos dos callbacks diferentes.
 */

let resultado;

function restar(num1,num2){  //FUNCION CALLBACK1

    return resultado=num1-num2;
}

function sumar(num1,num2){ //FUNCION CALLBACK2
  return resultado=num1+num2;
}


function operaciones(num1,num2,callback){
    let num3=7;//defino variable con valor 7
    let resultadoCall=callback(num1,num2) //guardo el  resultado de la funcion callback
    console.log(`El resultado de la operacion es ${num3*resultadoCall}`)
}

operaciones(3,1,restar);
//operaciones(3,1,sumar);

/* Ejercicio 5
Contador con Botones
Crear un botón para incrementar y otro para decrementar un contador mostrado
en un elemento div. Actualizar el texto del div al hacer click. */
//obtengo los elementos
let contador=0
const incrementar=document.getElementById('incrementar');
const decrementar=document.getElementById('decrementar');
const contadorElemento=document.getElementById('contador');


function incrementarContador(){
    
    contador++
    console.log(contador);
    contadorElemento.textContent=contador;
}

function decrementarContador(){
    
    contador--;
    console.log(contador);
    contadorElemento.textContent=contador
}



/* Ejercicio 6
Cambiar Texto de Párrafos
Seleccionar todos los elementos p de la página y cambiar su texto al hacer
click en un botón. */
function cambiarTexto(){
    const parrafos=document.querySelectorAll('p'); //almacena todos los elementos del selector p
    parrafos.forEach((elemento,indice) => {//Por cada elemento que tiene parrafos
        elemento.textContent=`Cambiar texto  ${indice+1}`; //cambio el contenido e indico que parrafo se esta cambiando
        

    });
}

/* Ejercicio 7
Agregar Elementos a una Lista
Crear una lista desordenada vacía y un botón. Al hacer click en el
botón, agregar un nuevo elemento a la lista con un número que se
incremente automáticamente. */

//let itemAgregado=0;
/* let itemValue=0;
let itemAgregado=''
function agregarItem(){
    
    itemValue++;
    itemAgregado=itemAgregado+`<li>${itemValue}</li>`
    document.getElementById('listaDesordenada').innerHTML=itemAgregado
    
} */

/* Ejercicio 8
Eliminar Elementos de una Lista
Modificar el ejercicio anterior para que cada elemento generado tenga un botón
de "Eliminar" que borre solo ese elemento de la lista.
 */
let itemValue = 0;
const listaDesordenada = document.getElementById('listaDesordenada');

function agregarItem() {
  itemValue++;
  const nuevoLi = document.createElement('li');//Creacion dinamica LI
  const nuevoBoton = document.createElement('button'); // idem del button
  nuevoBoton.textContent = itemValue;//Le asigno el contenido del button
  nuevoBoton.id = `item-${itemValue}`; // Id único para el botón=item-contador
  nuevoBoton.addEventListener('click', eliminarItem); // Agregamos el listener para eliminar

  nuevoLi.appendChild(nuevoBoton);//agreaga el button como hijo del LI
  listaDesordenada.appendChild(nuevoLi);//agrega como hijo el LI que tiene el boton
}

function eliminarItem(event) {
  const botonClickeado = event.target; // El botón que fue clickeado
  const listItemToRemove = botonClickeado.parentNode; // El elemento <li> padre del botón
  listaDesordenada.removeChild(listItemToRemove); // Eliminar el <li> de la lista
}




