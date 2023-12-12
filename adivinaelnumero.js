let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeroAleatorio = Math.floor(Math.random() * 30) + 1;

function jugar() {
  rl.question('Ingresa un numero entre 1 y 30: ', (userInput) => {
    if (userInput == numeroAleatorio) {
      console.log("Ganaste, el numero era: " + userInput);
      rl.close();
    } else if (userInput < numeroAleatorio) {
      console.log("Ingresaste un numero menor, intenta con uno más grande");
      jugar(); // Llamada recursiva para pedir otra vez
    } else if (userInput > numeroAleatorio) {
      console.log("Ingresaste un numero mayor, intenta con uno más pequeño");
      jugar(); // Llamada recursiva para pedir otra vez
    }
  });
}

jugar();