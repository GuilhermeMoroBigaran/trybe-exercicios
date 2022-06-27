let weekDay = 'terca';
console.log('Hoje é ' + weekDay);

if (weekDay === 'sábado' || weekDay ==='domingo' ) {
    console.log('Dia de descansar! Aproveite bem!');
}

else if (weekDay === 'segunda' || weekDay === 'terça' || weekDay === 'quarta' || weekDay === 'quinta' || weekDay === 'sexta' || weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de Trybe!');
}

else {
    console.log('Valor inválido! Por favor, digite um dia da semana. Utilize apenas letras minúsculas')
}