const myName = "Guilherme";

console.log("Nome:", myName);

// const birthCity = "Pirajui";
// console.log("Cidade natal:", birthCity);

let birthYear = 1992;
console.log("Ano de nascimento:", birthYear);

birthYear = 2030;
console.log("Novo ano de nascimento:", birthYear);

// birthCity = "Santa Rita";
// console.log("Nova cidade natal:", birthCity);

// Recebemos mensagem de erro, pois não é possível alterar o valor da constante "BirthCity"

// Se for necessário alterar o valor do parâmetro "BirthCity", a solução seria declarar o tipo primitivo variável "let" em vez de constante "const" para esse parâmetro, conforme segue:

let birthCity = "Pirajui";
console.log("Cidade natal:", birthCity);

birthCity = "Santa Rita";
console.log("Nova cidade natal:", birthCity);