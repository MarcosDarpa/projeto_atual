console.log(`Trabalhando com listas`);
var destino = ['Salvador', ' São Paulo', ' Rio de Janeiro']; //Desta Forma a lista é impressa sem 
console.log(`${destino}`); //interpolação                         // os colchetes e virgulas

/*const listaDedestino = new Array ( // Desta forma a lista é impressa com os colchetes e virgula
    `Salvador`,
    "São Paulo", 
    "Rio de janeiro"
);
   console.log(listaDedestino);
*/

destino.push("Curitiba"); // Adiciona item na lista
console.log("Destinos possíveis:");
console.log(destino);

destino.splice(2, 1); // tira itens da lista, sempre o ultimo
console.log(destino);

console.log(destino[1]); // selecionando elementos da lista