// focus de aprendizaje 
//- ---------------------------------------------

const NUM_LIGHT = 10; // -> cantidad de luces por array
const LIGHT_CHANGE_TIME = 1500;
const app = document.getElementById('app');

let lights = [] // -> guardaremos las luces en un array
let indexPattern = 0; // -> iniciamos con 0 como base
let idTimeout = null;
let indicatorPattern = null;

// ==================================
// PATTER DESIGN
// ==================================

const pattern1 = ['red', 'green', 'red', 'green', 'red', 'green', 'red', 'green', 'red', 'green'];
const pattern2 = ['blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow'];
const pattern3 = ['green', 'green', 'red', 'red', 'green', 'green', 'red', 'red', 'green', 'green'];
const pattern4 = ['yellow', 'blue', 'red', 'yellow', 'blue', 'red', 'yellow', 'blue', 'red', 'yellow'];
const pattern5 = ['red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green'];

const patterns  = [pattern1, pattern2, pattern3, pattern4, pattern5];


// ==================================
// INTERFACE CREATION with DOM
// ==================================

function createInterface(){
    //-> titulo
    const title = document.createElement('h1');
    title.textContent = 'Luces Navideñas Animadas';
    app.appendChild(title);

    // -> patron
    indicatorPattern = document.createElement('p');
    indicatorPattern.textContent= 'Patrón 1 de '+ patterns.length;
    app.appendChild(indicatorPattern);

    // -> div conteiner array
    const lightsContainer = document.createElement('div');
    lightsContainer.classList.add('light-container');
    app.appendChild(lightsContainer);

    //crear N luces-divs con class light
    for (let i = 0; i < NUM_LIGHT; i++) {
        const light = document.createElement('div'); 
        light.classList.add('light');
        lightsContainer.appendChild(light);
        lights.push(light);
    }
    
}

// ==================================
// UPDATEs COLORS - INDICATOR
// ==================================

function updateColors (pattern){
    for (let i=0; i<lights.length; i++){
        const light = lights[i]; // -> obter la posicion
        const color = pattern[i]; // -> obtener el color
        light.style.backgroundColor = color;
        // un pequeño efecto de pulso al cambiar de color 
        light.style.transform = 'scale(1.05)'
        setTimeout(()=> {
            light.style.transform = 'scale(1)'
        }, 300);
    }       
}

function updateIndicator (){
    const NUM = indexPattern + 1;
    indicatorPattern.textContent = `Patrón ${NUM} de ${patterns.length}`;
}

// ==================================
// ANIMATION
// ==================================

function startAnimation (){
    const currentPattern = patterns[indexPattern];
    updateColors(currentPattern);
    updateIndicator();
    indexPattern++;

    if(indexPattern >= patterns.length) {
        indexPattern = 0;
    }

    idTimeout = setTimeout(startAnimation, LIGHT_CHANGE_TIME);
}

createInterface();
startAnimation();