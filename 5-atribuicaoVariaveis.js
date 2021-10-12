console.log("Trabalhando com Atribuição de Variáveis");

//const é um tipo de variável que eu não posso mudar
//let a variável varia

let primeiroNome = "Ana";
const sobrenome = "Carvalho";

console.log(primeiroNome+" "+ sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

let contador = 0;
contador = contador + 1;

//nome já foi declarado acima então não precisa ser declarado novamente
const nomeCompleto = primeiroNome + sobrenome;

console.log(nomeCompleto);

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade + 1;
console.log(idade);


