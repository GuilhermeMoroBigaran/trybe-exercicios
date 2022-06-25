let weekDay = 'terca';

if (weekDay === 'sábado' || weekDay ==='domingo' ) {
    console.log('dia de descanso!');
}

else if (weekDay === 'segunda' || weekDay === 'terça' || weekDay === 'quarta' || weekDay === 'quinta' || weekDay === 'sexta') {
    console.log('Oba, mais um dia de Trybe!');
}

else {
    console.log('informação inválida! Por favor, digite um dia da semana')
}