let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un numero para sacar su tabla de multiplicar: ', (userInput) => {
   
    let multiplicar = 1; 

    for(let i = 1; i <= 10 ; i++){

        process.stdout.write(i+' = ');
        multiplicar = userInput * i;
        console.log(multiplicar);
    }

    
    rl.close(); 
  });