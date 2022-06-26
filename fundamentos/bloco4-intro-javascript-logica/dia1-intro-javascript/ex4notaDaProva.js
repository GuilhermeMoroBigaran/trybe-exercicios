const nota = 70;
console.log("Candidato(a), sua nota é " + nota );
if (nota >= 80 && nota <=100) {
    console.log("Parabéns, você foi aprovado(a)!");
} else if (nota >=60 && nota <80 ) {
    console.log("Você está na nossa lista de espera!");
} else if (nota >= 1 && nota < 60) {
    console.log("Você foi reprovado(a).");
} else {
    console.log ("Valor inválido. \nPor favor, digite uma nota entre 1 e 100.")
};