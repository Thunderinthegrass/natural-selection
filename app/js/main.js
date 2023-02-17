//объединение интервалов
// let input1 = [[1,3],[2,6],[8,10],[15,18]];
// let input2 = [[1,4],[4,5]];

// function merge(intervals) {

// }

// console.log(merge(input1));
// console.log(merge(input2));

//повторяющиеся буквы в строке
function duplicateEncode(word) {
  word = word.toLowerCase().split("");

  let result = word
    .map((elem) => {
      if (word.indexOf(elem) === word.lastIndexOf(elem)) {
        return "(";
      } else {
        return ")";
      }
    })
    .join("");
  return result;
}

// console.log(duplicateEncode('y1gr1'));

//проверка числа на квадрат
let isSquare = function (n) {
  let result = Math.sqrt(n);
  if (Number.isInteger(result) === true) {
    return true;
  }
  return false;
};
// console.log(isSquare(25));

//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.
function sortArray(array) {
  let a = [];

  for (let i = 0; i < array.length; i++) {//создаем массив с нечетными элементами
    if (array[i] % 2 != 0) {
      a.push(array[i]);
    }
  }
  let b = 0;
  for (let j = 0; j < a.length; j++) {//сортируем массив с нечетными элементами
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i+1]) {
        b = a[i];
        a[i] = a[i+1];
        a[i+1] = b;
      }
    }
  }
  let count = 0;
  for (let i = 0; i < array.length; i++) {//заменяем в исходном массиве нечетные элементы элементами отсортированного массива нечетных элементов
    if (array[i] % 2 != 0) {
      array[i] = a[count];
      count++;
    }
    
  }
  return array;
}

console.log(sortArray([-47, -30, -21, -34, 23, -27, -6, 33]));

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Обычно, когда вы что-то покупаете, вас спрашивают, верны ли номер вашей кредитной карты, номер телефона или ответ на ваш самый секретный вопрос. Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите, чтобы это отображалось на вашем экране. Вместо этого мы маскируем его.

// Ваша задача — написать функцию maskify, которая заменяет все символы, кроме последних четырех, на «#».

function maskify(cc) {
  cc = cc.split('');
  
  if (cc.length > 4) {
    for (let i = 0; i < cc.length - 4; i++) {
      cc[i] = '#';
    }
  }
  cc = cc.join('');
  return cc;
}

console.log(maskify('1928374635463748'));

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  // your code
}