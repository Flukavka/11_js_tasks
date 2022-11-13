/*---------------------------->02.11.2022<-----------------------*/
/*----------------------------> codewars <-----------------------*/
/*1 Найди иголку в стоге сена */
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (!Number.isInteger(haystack[i]) && haystack[i] != undefined) {
      if (haystack[i] == 'needle') {
        return 'found the needle at position ' + (i);
      }
    }

  }
};

findNeedle([2, '3', '3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]);


/*2 Напишите функцию, которая разбивает строку и преобразует ее в массив слов. */
/* function stringToArray(string){
  let str = string.replace(/ /g, ',');
  return str.split(',')
 
}; */

function stringToArray(string) {
  return string.split(' ');
}

stringToArray('I love arrays they are my favorite')





/*3 Каждое положительное становится отрицательным, а отрицательное становится положительным.
Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив/список.
*/
function invert(array) {
  let invertArray = [];
  for (let i = 0; i < array.length; i++) {
    invertArray.push(array[i] * -1);
  }
  return invertArray;
}

invert([1, 2, 3, 4, 5]);
invert([1, -2, 3, -4, 5])

/*
function invert(array) {
   return array.map(e=> e*-1);
}
*/

/*
function invert(array) {
   return array.map(el => -el);
}
*/

/*
const invert = array => array.map(num => -num);
*/


/*4
Наша футбольная команда завершила чемпионат.
 
Результаты матчей нашей команды записываются в виде набора строк.
Каждый матч представлен строкой в ​​формате "x:y", где x— счет нашей команды,
а y— счет наших противников.
Например: ["3:1", "2:2", "0:1", ...]
 
Очки за каждый матч начисляются следующим образом:
если x > y: 3 очка (победа)
если x < y: 0 очков (проигрыш)
если x = y: 1 балл (ничья)
Нам нужно написать функцию, которая берет этот набор и возвращает количество очков,
которое наша команда ( x) набрала в чемпионате по приведенным выше правилам.
Заметки:
 
наша команда всегда играет 10 матчей в чемпионате
0 <= х <= 4
0 <= у <= 4
*/

function points(games) {
  let point = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i].substr(0, 1) > games[i].substr(-1, 1)) point += 3;
    if (games[i].substr(0, 1) == games[i].substr(-1, 1)) point += 1;
  }

  return point;
};

points(["1:0", "0:0", "0:2", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]);

/*
const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)
*/

/*
const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)
*/




/*5 Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое
переданное ей число, а затем суммировала результаты.
Например, for [1, 2, 2]это должно возвращаться , 9потому что 1^2 + 2^2 + 2^2 = 9.
*/

const squareSum = numbers => numbers.reduce((sum, current) => {
  return sum + Math.pow(current, 2)
}, 0)

/* function squareSum(numbers){
  let result = numbers.reduce(function (sum, current) {
    return sum + Math.pow(current, 2)
  }, 0);
  return result;
} */

squareSum([1, 2]); //5
squareSum([0, 3, 4, 5]); //50
squareSum([]);




/*6 Нам нужна функция, которая может преобразовать строку в число. Какие способы
достижения этого вы знаете?
Примечание. Не беспокойтесь, все входные данные будут строками, а каждая строка
является абсолютно допустимым представлением целого числа.*/

const stringToNumber = function (str) {
  return +str;
}

stringToNumber("1234") //1234
stringToNumber("605") //605
stringToNumber("1405") //1405
stringToNumber("-7") //-7




/*7 Напишите программу, которая находит сумму всех чисел от 1 до num.
Число всегда будет положительным целым числом больше 0.*/

const summation = function (num) {
  let result = 0;
  if (num <= 0) return false;
  if (num == 1) return num;
  if (num > 1) {
    for (; num >= 1; num--) {
      result += num;
    }
    return result;
  }
}

summation(1);
summation(2);
summation(8);

/* function summation(num) {
  return num * (num + 1) / 2
} */

/* const summation = num => num * ++num / 2; */

/* const summation = num => (
  Array(num).fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0)
); */

/* const summation = (num) => Array
  .from(
    Array(++num).keys()
  )
  .reduce((acc, n) => acc + n, 0) */






/*8 Создайте простую функцию с именем приветствие , которая
возвращает самоеизвестное «привет, мир!».*/

//const greet = () => 'hello world!';

/* (function () {
  var prev = 22915696;
  var modulus = Math.pow(2,32);
  var multiplier = 1664525;
  var increment = 1013904223;
 
  function setRandSeed(s) {
    prev = s;
  }
  function random() {
    prev = (multiplier * prev + increment) % modulus;
    return prev/Math.pow(2,32);
  }
  Math.random = random;
  Math.setRandSeed = setRandSeed;
})();
 
function generateChar() {
  return String.fromCharCode(Math.floor(Math.random() * (91-65)) + 65);
}
 
function generateWord(length)
{
  var res = "";
  for(var i = 0; i < length; i++)
    res += generateChar();
  return res.toLowerCase();
}
 
function greet() {
  var greetings = generateWord(5);
  Math.setRandSeed(18337180);
  var someone = generateWord(5);
 
  return greetings + " " + someone + "!";
}
*/
/* greet() */




/*-----------------------------> 7q <---------------------------*/
/*8 Завершите функцию, которая принимает строковый параметр и
переворачивает каждое слово в строке. Все пробелы в строке должны
быть сохранены.*/

/* function reverseWords(str) {
  let arr = str.split(' ');
  let wordsArr = [];
  let reverseCharArr = [];
  let reverseWordsArr = [];
  for (let i = 0; i < arr.length; i++) {
    wordsArr.push(arr[i]);
  }
 
  for (let i = 0; i < wordsArr.length; i++) {
    for (let k = 0; k < 1; k++) {
      for (let j = 0; j < wordsArr[i].length; j++) {
        reverseCharArr.unshift((wordsArr[i][j]))
      }
      reverseWordsArr.unshift(wordsArr[i])
    }
  }
  console.log(reverseCharArr)
  console.log(reverseWordsArr)
} */
let reverseWords = (str) => str.replace(/\S+/g, word => [...word].reverse().join(""));

reverseWords('The quick brown fox jumps over the lazy dog.')





/*9 Крокетный клуб Western Suburbs имеет две категории членства: Senior и Open.
Им нужна ваша помощь с формой заявки, в которой потенциальным членам будет указано,
в какую категорию они будут помещены.
Чтобы быть пожилым, член должен быть не моложе 55 лет и иметь гандикап больше 7.
В этом крокетном клубе гандикап варьируется от -2 до +26; чем лучше игрок,
тем ниже гандикап.
 
Вход
Ввод будет состоять из списка пар. Каждая пара содержит информацию об одном
потенциальном члене. Информация состоит из целого числа для возраста человека
и целого числа для инвалидности человека.
 
Выход
Вывод будет состоять из списка строковых значений (в Haskell и C: Openили Senior),
указывающих, должен ли соответствующий элемент быть помещен в старшую или
открытую категорию.*/
function openOrSenior(data) {
  let usersCategory = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] < 7) {
      usersCategory.push('Senior')
    } else usersCategory.push('Open')
  }
}

openOrSenior([[45, 12], [55, 6], [19, -2], [104, 20]])
//['Open', 'Senior', 'Open', 'Senior']

/*
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
*/




/*10 Создайте функцию, которая возвращает сумму двух наименьших положительных
чисел для заданного массива минимум из 4 положительных целых чисел.
Не будут переданы числа с плавающей запятой или неположительные целые числа.
Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.*/

/* function sumTwoSmallestNumbers(numbers) {
  let size = numbers.length;
  let first_min = numbers[0];
  let second_min = numbers[0];
 
  if (numbers[1] < first_min) {
    first_min = numbers[1]
  } else {
    second_min = numbers[1]
  }
 
  let current_index = 2;
  while (current_index < size) {
    if (numbers[current_index] < first_min) {
      second_min = first_min;
      first_min = numbers[current_index]
    } else {
      if (numbers[current_index] < second_min) {
        second_min = numbers[current_index]
      }
    }
    current_index += 1
  }
 
  let result = first_min + second_min;
  return result
} */
function sumTwoSmallestNumbers(numbers) {
  let numbersSort = numbers.sort((a, b) => a - b);
  return numbersSort[0] + numbersSort[1];
}

/*
function sumTwoSmallestNumbers(numbers){
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
*/
/*
const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);
*/
sumTwoSmallestNumbers([19, 5, 42, 2, 77]) //7



/*11 Очень просто, по заданному целому числу или числу с плавающей запятой найти
его противоположность.*/

function opposite(number) {
  return number *= -1;
}
// 0 выводит -0, возможно сделать ветвление

/*
function opposite(number) {
  return(-number);
}
*/

/*
const opposite = number => -number;
*/

opposite(4.25);
opposite(7);
opposite(-3);
opposite(0);



/*12 Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное
значение в целое число.
Например: [0, 0, 0, 1]рассматривается как 0001двоичное представление 1.*/

const binaryArrayToNumber = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * Math.pow(2, arr.length - (i + 1)))
  }
  return newArr.reduce((sum, item) => sum + item);
};
/* const binaryArrayToNumber = arr => {
  console.log(arr.reduce((total, cur) => (total = total * 2 + cur), 0));
} */

/* const binaryArrayToNumber = arr => console.log(parseInt(arr.join(''), 2)); */


binaryArrayToNumber([1, 1, 1, 1]); //15
binaryArrayToNumber([0, 1, 1, 0]); //6
binaryArrayToNumber([0, 0, 0, 1]); //1
binaryArrayToNumber([1, 0, 0, 0]); //8


/*13 В вашем классе был тест, и вы его прошли. Поздравляем!
Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в
вашем классе.
Вы получаете массив с результатами тестов ваших сверстников.
Теперь посчитайте среднее и сравните свой результат!
 
Верните True, если вы лучше среднего, иначе False!
 
Примечание:
Ваши баллы не включены в массив баллов вашего класса. Для расчета среднего балла
вы можете добавить свой балл в данный массив!*/

function betterThanAverage(classPoints, yourPoints) {
  let average = (classPoints.reduce((sum, current) => (sum = sum + current))) / classPoints.length;
  if (yourPoints > average) return true;
  else return false;
}

betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21);
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)



/*14 После тяжелой четверти в офисе вы решаете немного отдохнуть в отпуске.
Итак, вы забронируете рейс для себя и своей девушки и постараетесь оставить весь
беспорядок позади.
Вам понадобится арендованный автомобиль, чтобы передвигаться в отпуске.
Менеджер по аренде автомобилей делает вам несколько хороших предложений.
Каждый день аренды автомобиля стоит 40 долларов. Если вы арендуете автомобиль
на 7 или более дней, вы получаете скидку в размере 50 долларов США. В качестве
альтернативы, если вы арендуете автомобиль на 3 или более дней, вы получаете
скидку в размере 20 долларов США.
 
Напишите код, который выдает общую сумму за разные дни (d).*/

function rentalCarCost(d) {
  const price = 40;
  let totalPrice = d * price;
  let discount = null;

  if (d >= 3 && d < 7) {
    discount = 20;
    totalPrice -= discount;
    return totalPrice
  } else if (d >= 7) {
    discount = 50;
    totalPrice -= discount;
    return totalPrice
  } else {
    return totalPrice
  }
}

/* const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0)); */

rentalCarCost(3); // 100
rentalCarCost(4); // 140
rentalCarCost(5); // 180
rentalCarCost(6); // 220
rentalCarCost(7); // 230
rentalCarCost(8); // 270
rentalCarCost(9); // 310
rentalCarCost(10); // 350



/*15 Вам будет предоставлен массив aи значение x. Все, что вам нужно сделать,
это проверить, содержит ли предоставленный массив значение.
Массив может содержать числа или строки. Х может быть любым.
 
Возврат true, если массив содержит значение, falseесли нет.*/

const check = (a, x) => a.indexOf(x) > -1 ? true : false;

/* const check = (a, x) => a.indexOf(x) > -1;
 
? true : false;является избыточным, поскольку a.indexOf(x) > -1 возвращает
логическое значение
*/

/* function check(a, x) {
  return a.indexOf(x) > -1 ? true : false;
} */

/*
const check = (a,x) => a.includes(x);
 
String.prototype.includes()
Метод includes() проверяет, содержит ли строка заданную подстроку,
и возвращает, соответственно true или false.*/

check([66, 101], 66);
check([101, 45, 75, 105, 99, 107], 107);
check(['t', 'e', 's', 't'], 'e');
check(['what', 'a', 'great', 'kata'], 'kat');



/*16 Это ката об умножении заданного числа на восемь, если оно четное, и на
девять в противном случае.*/

const simpleMultiplication = (number) => number % 2 == 0 ? number * 8 : number * 9;

/* function simpleMultiplication(number) {
  if (number % 2 == 0) {
    console.log(number * 8);
  } else console.log(number * 9);
} */

/* function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
} */

simpleMultiplication(0)
simpleMultiplication(2)
simpleMultiplication(5)
simpleMultiplication(4)
simpleMultiplication(1.45)




/*17 Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сказали,
что замок окружен парочкой могущественных драконов! каждому дракону требуется
2 пули, чтобы быть побежденным, наш герой понятия не имеет, сколько пуль он должен
нести.. Предполагая, что он собирается схватить определенное количество
пуль и двигаться вперед, чтобы сразиться с другим заданным количеством драконов,
выживет ли он?
Верните True, если да, False в противном случае :)*/

//const hero = (bullets, dragons) => bullets / dragons >= 2;
/* Это не работает для крайних случаев, таких как 0/0 >= 2, например,
поскольку NaN >= 2оценивается как false. */

const hero = (bullets, dragons) => dragons * 2 <= bullets;

hero(10, 5);  // true
hero(7, 4);  // false
hero(4, 5);  // false
hero(100, 40);  // true
hero(1500, 751);  // false
hero(0, 1);  // false



/*18 вернуть массив, где n - число значений в массиве, x - кратность значения n*/

function countBy(x, n) {
  let step = x;
  let z = [];
  for (let i = 0; i < n; i++) {

    if (i > 0) {
      x += step;
    }
    z.push(x);
  }

  return z
}

/*
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
*/

/*
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}
*/
countBy(1, 10);  // [1,2,3,4,5,6,7,8,9,10]
countBy(2, 5);  // [2,4,6,8,10]



/*19 Учитывая случайное неотрицательное число, вы должны вернуть цифры этого
числа в массиве в обратном порядке.

Пример (ввод => вывод):
35231 => [1,3,2,5,3]
0 => [0]*/

function digitize(n) {
  n = String(n);
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    arr.push(+n[i])
  }

  return arr.reverse()
}

/*
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
*/

digitize(35231);  //[1, 3, 2, 5, 3]
digitize(0);  //[0]



/*20 Дан треугольник последовательных нечетных чисел:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Вычислите сумму чисел в n -й строке этого треугольника (начиная с индекса 1),
например: ( Ввод --> Вывод )

1 -->  1
2 --> 3 + 5 = 8
3 --> 7 + 9 + 11 = 27
4 --> 13 + 15 + 17 + 19 = 64
5 --> 21 + 23 + 25 + 27 + 29 = 125
*/

function rowSumOddNumbers(n) {
  return Math.pow(n, 3)
}

/* let rowSumOddNumbers = n => n ** 3; */

rowSumOddNumbers(1); // 1
rowSumOddNumbers(42); // 74088



/*21 Бобу нужен быстрый способ вычисления объема прямоугольного параллелепипеда
с тремя значениями: length, width, height.
Напишите функцию, которая поможет Бобу в этом вычислении.*/

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}

Kata.getVolumeOfCuboid(1, 2, 2);  //  4
Kata.getVolumeOfCuboid(6, 2, 5);  // 60



/*22 В этом ката вы создадите функцию, которая берет список целых чисел и строк
и возвращает новый список с неотрицательными числами и отфильтрованными строками.*/

function filter_list(arr) {
  let positiveNumList = [];
  for (i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) && arr[i] >= 0) positiveNumList.push(arr[i]);
  }
  return positiveNumList
}

//filter_list([1, 2, 'a', 'b']); // [1,2]
//filter_list([1, 'a', 'b', 0, 15]); // [1,0,15]
//filter_list([1, 2, 'aasf', '1', '123', 123]); // [1,2,123]
filter_list([-1, -2, 'aasf', '1', '123', 123]); // [123]



/*23 Проверьте, содержит ли строка одинаковое количество «x» и «o».
Метод должен возвращать логическое значение и не учитывать регистр.
Строка может содержать любой символ.

Примеры ввода/вывода:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

function XO(str) {
  let x = null;
  let o = null;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() == ('x').toUpperCase()) x += 1;
    if (str[i].toUpperCase() == ('o').toUpperCase()) o += 1;
  }
  return x == o
}

/*
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
*/

//XO('xo');  //true
XO("xxOo");  //true
//XO("xxxm");  //false
//XO("Oo");  //false
//XO("ooom");  //false



/*24 Напишите функцию с именем setAlarm, которая получает два параметра.
Первый параметр, used , истинен, когда вы работаете, а второй параметр,
Vacation истинен, когда вы находитесь в отпуске.

Функция должна возвращать true, если вы работаете, а не в отпуске (поскольку
это обстоятельства, при которых вам нужно установить будильник).
В противном случае он должен возвращать false. Примеры:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true*/

const setAlarm = (employed, vacation) => employed == true && vacation == false;

/* const setAlarm = (employed, vacation) => employed == true && vacation == false ? true : false; */

/* function setAlarm(employed, vacation) {
  if (employed == true && vacation == false) return true;
  else return false
} */

/*
const setAlarm = (employed, vacation) => employed && !vacation;
*/

setAlarm(true, true);  // false
setAlarm(false, true);  // false
setAlarm(true, false);  // true



/*25 Ваша задача — найти первый элемент массива, который не является последовательным.
Под непоследовательным мы подразумеваем больше 1, чем предыдущий элемент массива.
Если весь массив последовательный, верните null.*/

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i + 1] - arr[i]) != 1 && arr[i + 1] != undefined) {
      return arr[i + 1]
    }
  }
  return null
}

firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
firstNonConsecutive([0, 1, 2, 4, 5, 7, 8]);
firstNonConsecutive([-1, 0, 1, 2, 3, 4, 8]);
firstNonConsecutive([1, 2, 3, 4]);
firstNonConsecutive([]);

/* TEST
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it('a simple example', function() {
    const first = firstNonConsecutive([1,2,3,4,6,7,8])
    assert.strictEqual(first, 6)
    const second = firstNonConsecutive([1,2,3,4])
    assert.strictEqual(second, null)
  })
})
*/



/*
Write a function that takes an array of numbers and returns the sum of the numbers.
The numbers can be negative or non-integer. If the array does not contain any
numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
 */

/* function sum (numbers) {
  "use strict";

  if (numbers.length == 0) console.log(0);
  else {
    let sum = numbers.reduce((sum, current) => (sum = sum + current))
    console.log(sum)
  }
}; */
//my refactoring
const sum = (numbers) => numbers.length != 0 ? numbers.reduce((sum, current) =>
  (sum + current)) : 0;


/*
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
*/

sum([]);  // 0
sum([1, 5.2, 4, 0, -1]);  // 9.2



/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square
after the one passed as a parameter. Recall that an integral perfect square is
an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned.
You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144 (11-->12)
625 --> 676
114 --> -1 since 114 is not a perfect square
*/
/* function findNextSquare(sq) {
  let sqRoot = Math.sqrt(sq);
  if (Number.isInteger(sqRoot)) {
    return Math.pow((sqRoot + 1), 2);
  } else {
    return -1;
  }
} */
//my refactoring
//const findNextSquare = (sq) => Number.isInteger(Math.sqrt(sq)) ? Math.pow((Math.sqrt(sq) + 1), 2): -1;

const findNextSquare = (sq) => Number.isInteger(sq = Math.sqrt(sq)) ? Math.pow((sq + 1), 2): -1;
/*
const findNextSquare = sq => ( sq = Math.sqrt(sq) ) % 1 ? -1 : Math.pow(++sq, 2)
*/
findNextSquare(121);  // 144, "Wrong output for 121"
findNextSquare(625);  // 676, "Wrong output for 625"
findNextSquare(319225);  // 320356, "Wrong output for 319225"
findNextSquare(15241383936);  // 15241630849, "Wrong output for 15241383936"
findNextSquare(155);  // -1, "Wrong output for 155"