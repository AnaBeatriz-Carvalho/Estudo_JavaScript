console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 21;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1);//deletar apartir da posição q, 1 elemento
// }
// else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado!")
//     listaDeDestinos.splice(1, 1);//deletar apartir da posição q, 1 elemento
// } else {
//     console.log("Não é maior de idade e não posso vender")
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1, 1);//deletar apartir da posição q, 1 elemento
}
else if (estaAcompanhada) {
    console.log("Comprador está acompanhado!")
    listaDeDestinos.splice(1, 1);//deletar apartir da posição q, 1 elemento
} else {
    console.log("Não é maior de idade e não posso vender")
}


console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");

}
else {
    console.log("Você não pode embarcar!")
}
console.log(listaDeDestinos);

// console.log(idadeComprador>18);
// console.log(idadeComprador< 18);
// console.log(idadeComprador<= 18);
// console.log(idadeComprador>= 18);
// console.log(idadeComprador== 18);
