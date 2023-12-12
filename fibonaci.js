let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Fibonaci: ', (userInput) => {
    let suma = [0, 1];
    for(let i = 2; i <= userInput; i++){
        suma[i] = suma[i-1] + suma[i-2];
        
        process.stdout.write(suma[i]+' ');
    }

  
    rl.close(); 
  });
