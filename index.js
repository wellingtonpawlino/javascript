

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