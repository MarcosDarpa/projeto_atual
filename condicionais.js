console.log(`Trabalhando com condicionais`);
var destino = ['Salvador', ' São Paulo', ' Rio de Janeiro']; 
console.log(`${destino}`);                        

const idade = 17;
const Acompanhada = true;

if (idade >= 18 && Acompanhada == true ) {
    console.log("Comprador maior de idade");
    destino.splice(2.1); // remove item
}else{
    console.log("Não é maior e não posso vender");
}



console.log(destino); 
