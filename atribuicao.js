console.log("Trabalhando com atribuições de variáveis");

const idade = 29;

let nome ="Marcos"; // let é uma variável mutável, pode sofrer alterações

const sobrenome ="Lopes"; //const é uma variável que não muda!



console.log(nome + sobrenome); //Concatenação sem espaço
console.log(nome + " " + sobrenome); // Concatenação com espaço
console.log(nome, sobrenome); // Concatenação com espaço

console.log(`Meu nome é ${nome} ${sobrenome}`); // Usando as duas variáveis para imprimir o nome

nome = nome + " " + sobrenome; //Renomeando uma variável mutável, usando aspas para dar espaço
console.log(`Meu nome é  ${nome}`)