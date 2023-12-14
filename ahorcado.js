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

// function intentos(){

//     let intentos = 10;
//     let maxintentos = intentos;

//     for(let i = 0; i <= intentos; i++){

//     }
// }

function LetraEnPalabra(palabra,letra){
    return palabra.includes(letra);   
}


function jugar(){

    let palabraSeleccionada = seleccionarPalabraAleatoria();

    rl.question('Ingrese una letra: ', (userInput) => {

        if(LetraEnPalabra(palabraSeleccionada, userInput)){
        
            jugar();

        }else{
            console.log('Letra equibocada, le quedan:');
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