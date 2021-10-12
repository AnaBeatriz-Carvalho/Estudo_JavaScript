console.log(`Trabalhando com Listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

listaDeDestinos.push(`Curitiba`); //adicionando um item na lista

console.log("Destinos possíveis:");
console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);//deletar apartir da posição q, 1 elemento
console.log(listaDeDestinos[1]);