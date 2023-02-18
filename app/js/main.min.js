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

// console.log(sortArray([-47, -30, -21, -34, 23, -27, -6, 33]));

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

// console.log(maskify('1928374635463748'));

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтеру приходится использовать цвета, которые для простоты обозначаются буквами от а до m.

// Цвета, используемые принтером, записываются в управляющую строку. Например, "хорошей" контрольной строкой будет aaabbbbhaijjjm, что означает, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a...

// Иногда возникают проблемы: отсутствие цветов, технический сбой и выдается "плохая" управляющая строка, например. aaaxbbbbyyhwawiwjjjwwm с буквами не от a до m.

// Вы должны написать функцию printer_error, которая по заданной строке будет возвращать частоту ошибок принтера в виде строки, представляющей рациональное число, числитель которого — количество ошибок, а знаменатель — длина контрольной строки. Не уменьшайте эту дробь до более простого выражения.

// Строка имеет длину больше или равную единице и содержит только буквы от a до z.

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  let a = ['a','b','c','d','e','f','j','h','i','j','k','l','m'];
  let numerator = 0;
  let denominator = 0;

  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    let count = 0;
    numerator++;
    for (let k = 0; k < a.length; k++) {
      if (s[i] == a[k]) {
        count = 1;
      }
    }
    if (count == 0) {
      denominator++;
    }
  }

  return `${denominator}/${numerator}`;
}

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));


// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let result = '';//создаем пустую строку
  s = s.toLowerCase();//переводим исходную строку в нижний регистр
	for (let i = 0; i < s.length; i++) {//проходимся циклом по строке
    for (let k = 0; k < i+1; k++){//какая буква по счету в исходной строке, столько раз и запускаем цикл
      if (k == 0) {//первая итерация переводит букву в верхний регистр
        result += s[i].toUpperCase();
      }
      else {//последующие итерации добавляют эту же букву в строку без изменений
        result += s[i];
      }
    }
    if (i != s.length-1) {//если это не последняя буква строки, добавляем к строке после каждой итерации первого цикла дефис 
      result += '-'
    }
  }
  return result;//возвращаем результат
}
// console.log(accum('privEt'));


// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
function towerBuilder(nFloors) {
  let result = [];
  let space = '';
  let star = '';

  for (let t = 0; t < nFloors; t++) {
    space += ' ';
  }
  for (let i = 0; i < nFloors; i++) {
    star = '*';
    let spaceSplit = space.split('');
    let spaceLess = spaceSplit.pop();
    let spaceJoin = spaceSplit.join('');
    space = spaceJoin;
    let elem = `${space}${star}${space}`;
    console.log(space)
    for (let k = 0; k < i; k++) {
      star += '**';
      elem = `${space}${star}${space}`;
    }
    result.push(elem);
    star = '';
  }
  return result;
}
// console.log(towerBuilder(3));


// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array) {
  let a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','z','y','z',];
  let coincidenceStart = 0;
  let coincidenceEnd = 0;
  let resultArr = [];
  let result = '';
  let isUpperCase = false;

  if (array[0] === array[0].toUpperCase()) {
    isUpperCase = true;
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }

  for (let i = 0; i < a.length; i++) {
      if (a[i] == array[0]) {
        coincidenceStart = i;
      }
      if (a[i] == array[array.length-1]) {
        coincidenceEnd = i;
      }
  }

  for (let g = coincidenceStart; g < coincidenceEnd; g++) {
    resultArr.push(a[g]);
  }
  console.log(resultArr);
  console.log(array);

  for (let l = 0; l < resultArr.length; l++) {
    if (resultArr[l] != array[l] && isUpperCase === true) {
      return resultArr[l].toUpperCase();
    }
    if (resultArr[l] != array[l] && isUpperCase === false) {
      return resultArr[l];
    }
  }
}
// console.log(findMissingLetter(['a','b','c','d','f']));