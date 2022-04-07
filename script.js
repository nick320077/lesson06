 
const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}


function one(num) {
  let attemptCount = 3;
   function two() {
     
      let a = prompt('Угадай число от 1 до 100');
      if(a === null) {
        alert("Игра окончена");
       } else if(!isNumber(a)) {
        alert("Введи число!"); 
        two();
       } else if(a == num) {
        alert("Поздравляю, Вы угадали!!!"); 
       } else if(num > a) {
        attemptCount--;
        alert(`Загаданное число больше Осталось ${attemptCount} попыток!`);
        two();
       } else if(num < a) {
        attemptCount--;
        alert(`Загаданное число меньше Осталось ${attemptCount} попыток!`);
        two();
      } else if(attemptCount === 1) {
        prompt('К сожалению вы проиграли. Играем еще раз?');
      }
  }
 two();

}

one(50);


