console.log("\nTrabalhando com loops")
const listaDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

const idadeComprador = 18;
const estaAcompanhado = false;
let passagemComprada = false;
const destino = "Rio de Janeiro"

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
while(contador < 3){

    if (listaDestinos[contador] == destino){
        console.log("Destino existe")
    }else{
        console.log('Destino não existe');
    }
    
    contador += 1;
}

