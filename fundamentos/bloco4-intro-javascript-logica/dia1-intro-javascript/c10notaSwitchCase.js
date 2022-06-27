let candStatus = "não sei";

console.log("Situação da pessoa candidata: " + candStatus);

switch (candStatus) {
  case "aprovada":
  case "aprovado":
    console.log("A nota obtida é maior ou igual a 80");
    break;

  case "reprovada":
  case "reprovado":
    console.log("A nota obtida é menor que 40");
    break;

  case "lista de espera":
  case "lista":
    console.log("A nota obtida é maior ou igual a 40 e menor que 60");
    break;
  default:
    console.log(
      "\nValor inválido.\n\nPara saber qual foi a nota obtida, por favor escolha um dos três estados da pessoa candidata. Digite então esse valor.\n\naprovada\nreprovada\nlista de espera"
    );
}
