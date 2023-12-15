let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function jugar(){

    rl.question('Ingresa una cadena de texto para comprobar si es palindromo: ', (userInput) => {

        if(userInput.length > 2){
    
            let invertir = userInput.toString().split("").reverse().join("");
            console.log(invertir);
            if(invertir === userInput){
                console.log('Es un palindromo');
                seguirjugando();
            
            }else{
                console.log('No es un palindromo');
                seguirjugando();
            }
    
        }else{
    
            console.log("Por favor ingrese una palabra que tenga tres o más letras");
            console.log('');
            jugar();
        }

    });
}

function seguirjugando(){

    rl.question('Desea seguir jugando?--> (si/no): ', (userInput)=> {

        userInput = userInput.toLowerCase();

        if(userInput=== 'si'){
            jugar();
        
        }else{
            console.log('Nos vemos la proxima,  adios! 👌');
            rl.close();
        }
    });
}

jugar();