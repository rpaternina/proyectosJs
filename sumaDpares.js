let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un rango de numeros: ', (userInput) => {
    let suma = 0;
    for(let i = 1; i <= userInput; i++){
        if(i % 2 == 0){
            process.stdout.write(i+' ');
            suma = suma + i;
        }
    }

    console.log(' ');
    console.log("El total de la suma de los numeros pares es: "+ suma);
    rl.close(); 
  });
