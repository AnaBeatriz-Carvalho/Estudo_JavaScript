console.log("\nTrabalhando com Condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existente!")
    }
    else {
        console.log("Destino não existe!")
    }
    contador += 1;
}


