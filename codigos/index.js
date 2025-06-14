console.log("funcionando");


console.log("JavaScript is running!");

// criando variável
let primeiroNome = "Wellington";

// criando constante
const saudacao = "Bem-vindo ao JavaScript!";

// printando variáveis e constantes
console.log(saudacao);
console.log("Hello, " + primeiroNome + "!");
let price 

// criando objeto
let produto = {
    nome: "Notebook",
    preco: 2500,
    desconto: 0.1
};

//criando array
let numeros = [1, 2, 3, 4, 5];

// criando função

function calcularPrecoComDesconto(produto) {
    return produto.preco * (1 - produto.desconto);
}

// operdores logicos

let corCliente = undefined;
let corEstoque = "vermelho";
let corVendido = corCliente || corEstoque

console.log(corVendido + " é a cor do produto vendido!");


// criando estrutura else if 

let driverSpeed = 100;

if (driverSpeed > 100) {  
    console.log("Você está acima do limite de velocidade!");
}
else if (driverSpeed < 60) {
    console.log("Você está abaixo do limite de velocidade!");
}
else {  
    console.log("Você está dentro do limite de velocidade!");
}


// criand with switch case
let airport = 'LAX';

switch (airport) {
    case 'MCO':
        console.log('Orlando International Airport');
        break;
    case 'LAX':
        console.log('Los Angeles International Airport');
        break;
    case 'JFK':
        console.log('John F. Kennedy International Airport');
        break;
    default:
        console.log('Airport not recognized');
}

// criando loop for
for (let i = 0; i < 11; i++) {
    console.log("Número: " + i);
}

// criando while loop
let contador = 0;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

// criando do while loop   
do {
    console.log("Contador: " + contador);
    contador++;
}while (contador < 11);


const myCar = {
    model: 'Corolla',
    year: 2020,
    color: 'blue'
}

for (let key in myCar) {
    console.log(`${key}: ${myCar[key]}`);
}

for (let value of Object.values(myCar)) {
    console.log(value);
}