let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let intentos = 20;
let palabraCorrecta = [];

function seleccionarPalabraAleatoria(){
    let palabras = ['hola', 'robert', 'javascript', 'html'];
    let palabraAleatoria = palabras[Math.floor(Math.random()* palabras.length)];
    return palabraAleatoria;
}

function pista(){

    if(seleccionarPalabraAleatoria()==='hola'){
        console.log('Tú palabra adivinar tiene que ver con un saludo, buena suerte 😊');
        jugar();
    
    }else if(seleccionarPalabraAleatoria()==='robert'){
        console.log('La palabra adivinar es un nombre de persona ❤️');
        jugar();

    }else if(seleccionarPalabraAleatoria()==='javascript'){
        console.log('Tu palabra es un famoso lenguaje de programación 😉');
        jugar();

    }else if(seleccionarPalabraAleatoria()==='html'){
        console.log('No soy un lenguaje de programación, pero estoy en toda la web 🤔');
        jugar();
    }
}


function LetraEnPalabra(palabra,letra){
    return palabra.includes(letra);   
}



function guardarletra(letra){
    if (/^[a-zA-Z]$/.test(letra)) {
        // Agregar la letra a la lista
        palabraCorrecta.push(letra);
        console.log(`Letra "${letra}" agregada a la lista.`);
    }else{
        console.log("Por favor, ingrese una letra válida.");
        RestarIntentos();
        jugar();
    }
}

function RestarIntentos(){

    intentos--;

    console.log(`Te quedan ${intentos} intentos.`);

    if (intentos === 0) {
        
      console.log("¡Se acabaron los intentos! Adiós.");
      seguirJugando();
      
    }else{
      jugar();
    }

}

function jugar(){

    let palabraSeleccionada = seleccionarPalabraAleatoria();
    pista();

    rl.question('Ingrese una letra: ', (userInput) => {

        if(LetraEnPalabra(palabraSeleccionada, userInput)){
            guardarletra(userInput);
            jugar();

        }else{
            RestarIntentos();
            jugar(); 
        }

    });
    
}


function seguirJugando(){
    rl.question('Desea seguir jugando? -->  ', (userInput) => {

          userInput = userInput.toLowerCase();

          if(userInput === 'si'){
            jugar();
          
        }else if (userInput === 'no'){

            console.log('Hasta la proxima 🙌 🙌 😊')
            rl.close();
          
        }else{

            console.log('Por favor ingrese una respuesta correcta --> (si/no) ')
            seguirJugando();
        }

        });

}

jugar();