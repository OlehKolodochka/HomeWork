/* 1- присвоить каждому из следующих значений свою переменную:'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7 16, true, false Вывести каждую при помощи console.log , alert, document.write
 */

/*  let greeting = 'hello';
 let school = 'owu';
 let domain = 'com';
 let nationaldomain = 'ua';
 let numeric1 = 1;
 let numeric2 = 10;
 let numeric3 = -999;
 let numeric4 = 123;
 let numeric5 = 3.14;
 let numeric6 = 2.7;
 let numeric7 = 16;
 let isStudent = true;
 let isMentor = false;

 console.log(greeting);
 console.log(school);
 console.log(domain);
 console.log(nationaldomain);
 console.log(numeric1);
 console.log(numeric2);
 console.log(numeric3);
 console.log(numeric4);
 console.log(numeric5);
 console.log(numeric6);
 console.log(numeric7);
 console.log(isStudent);
 console.log(isMentor);

 alert(greeting);
 alert(school);
 alert(domain);
 alert(nationaldomain);
 alert(numeric1);
 alert(numeric2);
 alert(numeric3);
 alert(numeric4);
 alert(numeric5);
 alert(numeric6);
 alert(numeric7);
 alert(isStudent);
 alert(isMentor);

 document.write(greeting); 
 document.write(school);
 document.write(domain);
 document.write(nationaldomain);
 document.write(numeric1);
 document.write(numeric2);
 document.write(numeric3);
 document.write(numeric4);
 document.write(numeric5);
 document.write(numeric6);
 document.write(numeric7);
 document.write(isStudent);
 document.write(isMentor);
 */

 
/*  2- переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
 */
/*  greeting = 'Hi';
 school = 'PNTU';
 domain = 'edu';
 nationaldomain = 'ua';
 numeric1 = 3;
 numeric2 = 80;
 numeric3 = 96;
 numeric4 = 0;
 numeric5 = 71;
 numeric6 = 27;
 numeric7 = 41;
 isStudent = false;
 isMentor = true;

 console.log(greeting);
 console.log(school);
 console.log(domain);
 console.log(nationaldomain);
 console.log(numeric1);
 console.log(numeric2);
 console.log(numeric3);
 console.log(numeric4);
 console.log(numeric5);
 console.log(numeric6);
 console.log(numeric7);
 console.log(isStudent);
 console.log(isMentor);
 
 alert(greeting);
 alert(school);
 alert(domain);
 alert(nationaldomain);
 alert(numeric1);
 alert(numeric2);
 alert(numeric3);
 alert(numeric4);
 alert(numeric5);
 alert(numeric6);
 alert(numeric7);
 alert(isStudent);
 alert(isMentor);

 document.write(greeting);
 document.write(school);
 document.write(domain);
 document.write(nationaldomain);
 document.write(numeric1);
 document.write(numeric2);
 document.write(numeric3);
 document.write(numeric4);
 document.write(numeric5);
 document.write(numeric6);
 document.write(numeric7);
 document.write(isStudent);
 document.write(isMentor);
 */


/* 3- Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
 */

/* const numberPi = 3.14;
const numberFi = 1.618;
const speed = 299792458;
const numberArchimed = 'Константа Архімеда π'
const goldenSection = 'Золотий перетин φ'
const speedLight = 'Швидкість світла у вакуумі';

console.log('1');
console.log(numberArchimed);
console.log(numberPi);
console.log('----------------------');
console.log('2');
console.log(goldenSection);
console.log(numberFi);
console.log('----------------------');
console.log('3');
console.log(speedLight);
console.log(speed, 'м·с−1');
console.log('----------------------');

alert(numberArchimed);
alert(numberPi);
alert(goldenSection);
alert(numberFi);
alert(speedLight);
alert(speed);

document.write(numberArchimed, numberPi);
document.write(goldenSection, numberFi);
document.write(speedLight, speed);

 */

/* 4- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
 */

/* let mySurname = prompt('What is your surname?');
let myName = prompt('What is your name?');
let myPatronymic = prompt('What is your patronymic?');

console.log(mySurname);
console.log(myName);
console.log(myPatronymic);

alert(mySurname);
alert(myName);
alert(myPatronymic);

document.write(mySurname);
document.write('<br>');
document.write(myName);
document.write('<br>');
document.write(myPatronymic);
 */


/* 5- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
 */

/* let mySurname = prompt('What is your surname?');
let myName = prompt('What is your name?');
let myPatronymic = prompt('What is your patronymic?');

let person = mySurname + ' ' + myName + ' ' + myPatronymic
console.log(person);
 */


/* 6- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
 */

/* let mySurname = prompt('What is your surname?');
let myName = prompt('What is your name?');
let myPatronymic = prompt('What is your patronymic?');

let myPerson = (mySurname + ' ' + myName + ' ' + myPatronymic);
alert(myPerson);


let myWifeorHusbandSurname = prompt('What is the surname of your wife (your husband)?');
let myWifeorHusbandName = prompt('What is the name of your wife (your husband)?');
let myWifeorHusbandPatronymic = prompt('What is the patronymic of your wife (your husband)?');

let myWifeorHusbandPerson = (myWifeorHusbandSurname + ' ' + myWifeorHusbandName + ' ' + myWifeorHusbandPatronymic);
alert(myWifeorHusbandPerson);


let myChildSurname = prompt('What is the surname of your child?');
let myChildName = prompt('What is the name of your child?');
let myChildPatronymic = prompt('What is the patronymic of your child?');

let myChildPerson = (myChildSurname + ' ' + myChildName + ' ' + myChildPatronymic);
alert(myChildPerson);

document.write(myPerson);
document.write('<br>');
document.write(myWifeorHusbandPerson);
document.write('<br>');
document.write(myChildPerson);

console.log(myPerson);
console.log('----------------------------------------------------------------------');
console.log(myWifeorHusbandPerson);
console.log('----------------------------------------------------------------------');
console.log(myChildPerson);
 */



/* 7- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
 */

/* let a = prompt('Give an answer: ' + '86*10');
let b = prompt('Give an answer: ' + '123+45');
let c = prompt('Give an answer: ' + '45/9');
console.log(+a);
console.log('-----------------------');
console.log(+b);
console.log('-----------------------');
console.log(+c);
 */

/* 8- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
 */

/* let food = prompt('How much money do you spend on FOOD during the week?');
let transport  = prompt('How much money do you spend on TRANSPORT  during the week?');
let alcohol = prompt('How much money do you spend on ALCOHOL during the week?');
let girls = prompt('How much money do you spend on GIRLS during the week?');

food = parseInt(food, 10);
transport = parseInt(transport, 10);
alcohol = parseInt(alcohol, 10);
girls = parseInt(girls, 10);

let result = (food + transport + alcohol + girls);
console.log('result = ' + result);
 */


/* 9- при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
 */


/*  let x = prompt('Give an answer: ' + '86/1000');
 let y = prompt('Give an answer: ' + '86/100');
 let z = prompt('Give an answer: ' + '86/10');

x = parseFloat(x);
y = parseFloat(y);
z = parseFloat(z);

let result = (x + y +z);
console.log(result); */



/* 10- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
 */


/* let x = prompt('Give an answer: ' + '158/100');
let y = prompt('Give an answer: ' + '324/100');
let z = prompt('Give an answer: ' + '999/100');

x = Math.round(parseFloat(x));
y = Math.round(parseFloat(y));
z = Math.round(parseFloat(z));


let result = (x + y +z);
console.log(result); */



/* 11- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
 */

/*  alert("Let's raise the number to the power!");
 let a = prompt('Write down the number!');
 let b = prompt('Write down the degree!');

 a = parseInt(a, 10);
 b = parseInt(b, 10);

 console.log(Math.pow(a, b)); */



/*  12- При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
 */

/* let a = 100;
let b = '100';
let c = true;
let d = undefined;

console.log(a + '-' + typeof a);
console.log('------------------------------');
console.log(b + '-' + typeof b);
console.log('------------------------------');
console.log(c + '-' + typeof c);
console.log('------------------------------');
console.log(d + '-' + typeof d); */



/* 13- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
 В одинаковых выражениях в задании не использовать два одинаковых оператора.
Каждое выражение вложить в свою переменную
    5 ? 6 -> true
    5 ? 6 -> false
    5 ? 6 -> false
    5 ? 6 -> false
    10 ? 10 -> true
    10 ? 10 -> true
    10 ? 10 -> false
    10 ? 10 -> false
    10 ? 10 -> false
    123 ? '123' -> false
    123 ? '123' -> true
 */
/* console.log('5 ? 6 -> true');
console.log(5 < 6);
console.log('-------------------------------');

console.log('5 ? 6 -> false');
console.log(5 > 6);
console.log('-------------------------------');

console.log('5 ? 6 -> false');
console.log(5 == 6);
console.log('-------------------------------');

console.log('5 ? 6 -> false');
console.log(5 >= 6);
console.log('-------------------------------');

console.log('10 ? 10 -> true');
console.log(10 == 10);
console.log('-------------------------------');

console.log('10 ? 10 -> true');
console.log(10 >= 10);
console.log('-------------------------------');

console.log('10 ? 10 -> false');
console.log(10 > 10);
console.log('-------------------------------');

console.log('10 ? 10 -> false');
console.log(10 < 10);
console.log('-------------------------------');

console.log('10 ? 10 -> false');
console.log(10 !== 10);
console.log('-------------------------------');

console.log("123 ? '123' -> false");
console.log(123 === '123');
console.log('-------------------------------');

console.log("123 ? '123' -> true");
console.log(123 == '123');
console.log('-------------------------------');
 */



/* Дополнительно:
- Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
console.log(132 > 100 && 45 < 12 );
console.log(34 > 33 && 23 < 90 );
console.log(99 > 100 && 45 > 12 );
console.log(132 > 100 || 45 < 12 );
console.log(111 > 11 || 45 < 111 );
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
console.log(!!'-1');
console.log(!!-1);
console.log(!!'0');
console.log(!!'null');
console.log(!!'undefined');
console.log(!!(3/'owu'));
console.log((111 > 11 || 45 < 111) ||  !!'0');
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
 */


/* console.log('132 > 100 && 45 < 12' );
console.log(132 > 100 && 45 < 12 );
console.log('false');
console.log('-----------------------------------------------------------------------');

console.log('34 > 33 && 23 < 90' );
console.log(34 > 33 && 23 < 90 );
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log('99 > 100 && 45 > 12' );
console.log(99 > 100 && 45 > 12 );
console.log('false');
console.log('-----------------------------------------------------------------------');

console.log('132 > 100 || 45 < 12' );
console.log(132 > 100 || 45 < 12 );
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log('111 > 11 || 45 < 111' );
console.log(111 > 11 || 45 < 111 );
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log('(111 > 11 || 45 < 111) && (132 > 100 || 45 < 12)' );
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log('(111 > 11 || 45 < 56) || (132 > 100 || 45 < 12)' );
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log('(132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 )' );
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
console.log('false');
console.log('-----------------------------------------------------------------------');

console.log('(111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )');
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log("!!'-1'");
console.log(!!'-1');
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log("!!-1");
console.log(!!-1);
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log("!!'0'");
console.log(!!'0');
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log("!!'null'");
console.log(!!'null');
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log("!!'undefined'");
console.log(!!'undefined');
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log("!!(3/'owu')");
console.log(!!(3/'owu'));
console.log('false');
console.log('-----------------------------------------------------------------------');

console.log("(111 > 11 || 45 < 111) ||  !!'0'");
console.log((111 > 11 || 45 < 111) ||  !!'0');
console.log('true');
console.log('-----------------------------------------------------------------------');

console.log("(!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )");
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
console.log('false');
console.log('-----------------------------------------------------------------------'); */




// CLASS

/* 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
  При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
 */

/* let str = "Привет";
let num = 123;
let flag = true;
let txt = "true";

console.log('"Привет" ' + '--->' + '  ' + typeof(str));
console.log('------------------------------------------------');

console.log('123 ' + '--->' + '  ' + typeof(num));
console.log('------------------------------------------------');

console.log('true ' + '--->' + '  ' + typeof(flag));
console.log('------------------------------------------------');

console.log('"true" ' + '--->' + '  ' + typeof(txt));
console.log('------------------------------------------------');
 */



/* 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
    5 + 3,
    5 - 3,
    5 * 3,
    5 / 3,
    5 % 3
    поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
 */


/* let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;

console.log(a1);
console.log('-------------------------');
console.log(a2);
console.log('-------------------------');
console.log(a3);
console.log('-------------------------');
console.log(a4);
console.log('-------------------------');
console.log(a5);
console.log('-------------------------');
 */


/* 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
    5 % 3,
    3 % 5,
    5 + '3',
    '5' - 3,
    75 + 'кг'
 */


/* let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log(a6);
console.log('----------------------------');
console.log(a7);
console.log('----------------------------');
console.log(a8);
console.log('----------------------------');
console.log(a9);
console.log('----------------------------');
console.log(a10);
console.log('----------------------------');
 */



/* 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
  шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
 */


/* let height = 23;
let width = 10;
let s = height * width + 'см2';
console.log(s);
 */


/* 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
результат поместите в переменную v.
 */


/* let heightC = 10;
let dC = 4;
let v = Math.PI * Math.pow((dC / 2), 2) * heightC;
console.log(v + 'м3');
 */



/* 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
  Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
 */


/* let n = 3;
let m = 4;

let k = Math.hypot(n, m);
// або
let k1 = Math.sqrt(Math.pow(n, 2) + m ** 2);

console.log(k);
console.log('-------------------')
console.log(k1); */



/* 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
 */


/* let str = 'Hello world';

document.write(str);
alert(str);
console.log(str);
 */


/* 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
 */


/* alert('Колодочка Олег Володимирович\n' + '36 років\n' + 'Швидка їзда на автомобілі');
 */

/* 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
  Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
  Вывести в документ содержимое переменной concatenation спомощью document.write
 */


/*  let str1 = 'Кто ';
 let str2 = 'ты ';
 let str3 = 'такой?';
 let concatenation = str1 + str2 + str3;

 document.write(concatenation);
 */



// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
/*     let str = "20";
     let a = 5;
     document.write(str + a + "<br/>");
     document.write(str - a + "<br/>");
     document.write(str * "2" + "<br/>");
     document.write(str / 2 + "<br/>");

205
15
40
10
 */




/* // 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    parseInt("3.14") ===> 3;
    parseInt("-7.875") ===> -7;
    parseInt("435") ===> 435;
    parseInt("Вася") ===> NaN;
 */


/* 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    let str = prompt("Enter something", "ho-ho")
    console.log(str);
 */


/* let str = prompt("Enter something", "ho-ho")
console.log(str);
 */


/* 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
 */


/* let a = prompt('Виконайте дадавання:\n' + '10 + 20');
alert(a);
 */

/* 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
      Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
 */


/* let name = prompt('What is your name?');
let surname = prompt('What is your surname?');
let age = prompt('How old are you?');

alert('Доброго вечера ' + name + ' ' + surname + ', мои поздравления что вам ' + age);
 */


/* =====================
======ДОП============
=====================
 */



/* 1. Три різних числа вводяться через prompt().
За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
 */

/*  let a1 = prompt('Введіть перше довільне число');
 let a2 = prompt('Введіть друге довільне число');
 let a3 = prompt('Введіть третє довільне число');

 a1 = parseInt(a1, 10);
 a2 = parseInt(a2, 10);
 a3 = parseInt(a3, 10);

if (a1 <= a2 && a2 <= a3) {
    alert(a1 + '; ' + a2 + '; ' + a3)
} else {
    if ((a1 <= a2 && a2 >= a3) && a1 <= a3) {
        alert(a1 + '; ' + a3 + '; ' + a2)
    } else {
        if ((a1 <= a2 && a2 >= a3) && a1 >= a3) {
            alert(a3 + '; ' + a1 + '; ' + a2)
        } else {
            if ((a1 >= a2 && a2 <= a3) && a1 <= a3) {
                alert(a2 + '; ' + a1 + '; ' + a3)
            } else {
                if ((a1 >= a2 && a2 <= a3) && a1 >= a3) {
                    alert(a2 + '; ' + a3 + '; ' + a1)
                } else {
                    alert(a3 + '; ' + a2 + '; ' + a1)
                }
            }
        }
    }
}
 */


/* 2.
Все параматры получаем с клавиатуры!!!!
Имитируем поведение пешехода на перекстке.
Если светофор зеленый - вывести "иди".
Если светофор желтый - вывести "подожди".
Если светофор красный - вывести "стой".
Если светофор в аварийном режиме вывести "делай что хочешь"!
 */


/* let trafficLight = prompt('Виберіть відповідний варіант:\n' + 'світлофор зелений - натисніть 1\n' + 'світлофор жовтий - натисніть 2\n' + 'світлофор червоний - натисніть 3\n' + 'світлофор в аварійному режимі - натисніть 4\n');

switch (trafficLight) {
    case '1':
        alert('Іди!');
        break;

    case '2':
        alert('Зачекай!');
        break;

    case '3':
        alert('Стій!');
        break;

    case '4':
        alert('Роби, що хочеш!');
        break;

    default:
        alert('Натисніть F5 і повторіть спробу')
}
 */




/* 3
Все параметры получаем с клавиатуры!!!!(prompt , confirm)
Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
Улучшаем предыдущее задание.
Если светофор зеленый и машин нет - вывести "иди".
Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
Если светофор желтый и машины есть - вывести "жди".
Если светофор желтый и машин нет - вывести "все рано жди".
Если светофор красный и машин нет- вывести "стой все рано".
Если светофор красный - и машины есть вывести "стой и жди".
Если светофор в аварийном режиме вывести "делай что хочешь"! */


/* let trafficLight = prompt('Виберіть відповідний варіант:\n' + 'світлофор зелений - натисніть 1\n' + 'світлофор жовтий - натисніть 2\n' + 'світлофор червоний - натисніть 3\n' + 'світлофор в аварійному режимі - натисніть 4\n');
let isRoadClear = confirm("Автомобілі їдуть?")

switch (true) {
    case trafficLight === '1' && isRoadClear === true:
        alert('Зачекай доки порушники проїдуть!');
        break;

    case trafficLight === '1' && isRoadClear === false:
        alert('Іди!');
        break;

    case trafficLight === '2' && isRoadClear === true:
        alert('Чекай!');
        break;

    case trafficLight === '2' && isRoadClear === false:
        alert('Всерівно чекай!');
        break;

    case trafficLight === '3' && isRoadClear === true:
        alert('Стій і чекай!');
        break;

    case trafficLight === '3' && isRoadClear === false:
        alert('Стій всерівно!');
        break;

    case trafficLight === '4':
        alert('Роби, що хочеш!');
        break;

    default:
        alert('Натисніть F5 і повторіть спробу');
}
 */
