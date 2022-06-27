const currentHour = 18;
let message ='';
// message = prompt("que horas são agora?");

console.log('\n'+'O horário agora é ' + currentHour + ':00h' + '\n');

if (currentHour >= 22) {
  message = "É hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "É hora de jantar";
} else if (currentHour >= 14 && currentHour< 18) {
  message = 'Vamos fazer um bolo!?';
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!';
} else if (currentHour >=4 && currentHour < 11) {
  message = 'Olha o cherinho de café!'
} else {
  message = 'Melhor continuar dormindo!'
}

console.log(message);