 
const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}


function one(num) {
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
        alert("Загаданное число больше");
        two();
       } else if(num < a) {
        alert("Загаданное число меньше");
        two();
      }
  }
 two();
 
}

one(50);


