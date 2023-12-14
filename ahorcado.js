let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let intentos = 10;
let palabraCorrecta = [];

function seleccionarPalabraAleatoria(){
    let palabras = ['hola', 'robert', 'keiry', 'culiar'];
    let palabraAleatoria = palabras[Math.floor(Math.random()* palabras.length)];
    return palabraAleatoria;
}


function LetraEnPalabra(palabra,letra){
    return palabra.includes(letra);   
}


function jugar(){
    let palabraSeleccionada = seleccionarPalabraAleatoria();

    rl.question('Ingrese una letra: ', (userInput) => {
        if(LetraEnPalabra(palabraSeleccionada, userInput)){
            jugar();

        }else{
            console.log('No');
            rl.close(); 
        }

    
    });
    
}



function seguirJugando(){
    rl.question('Desea seguir jugando? ', (userInput) => {

          userInput = userInput.toLowerCase();

          if(userInput === 'si'){
            jugar();
          
        }else{
            console.log('Hasta la proxima')
            rl.close();
          }

        });

}


jugar();