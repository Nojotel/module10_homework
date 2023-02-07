let number = +prompt('Введите число');
if (Number.isNaN(number % 2)) {
   alert('Упс, кажется, вы ошиблись')
 } else if (number % 2 === 0) {
   alert('Число четное')
 } else {
   alert('Число нечетное')
 };
 