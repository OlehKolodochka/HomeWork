/* --створити масив та вивести його в консоль:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу */



/* let namber = [1, 2, 3, 4, 5];
console.log(namber);

let name = ['Олег', 'Євгеній', 'Ірина', 'Владислав', 'Людммила'];
console.log(name);

let fdfdfd = ['jskcjd', 'bchd', 254, true, 456];
console.log(fdfdfd); */



/* -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
 */

/* let xxx = [];
xxx.unshift(1);
xxx [1] = 2;
xxx [2] = 3;
xxx [3] = 4;
xxx.push(5);
console.log(xxx);
 */


/* - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
 */

/* const div = ['<div>kehfkehfkwehfk</div>', '<div>ghkghwkhefqkh</div>', '<div>ncjachakc</div>', '<div>msbcmasbcka</div>', '<div>kahfkwehf</div>', '<div>kjghdhfjkhkh</div>', '<div>mhjfhtdh</div>', '<div>nvhsgxgc</div>', '<div>kugfhtdgfgkljl</div>', '<div>ngvchhnvmbmbx</div>'];

for (let i = 0; i < div.length; i++) {
   document.write(div[i] + '<hr>');
}
 */


/*  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
 */

/* const div = ['<div>kehfkehfkwehfk</div>', '<div>ghkghwkhefqkh</div>', '<div>ncjachakc</div>', '<div>msbcmasbcka</div>', '<div>kahfkwehf</div>', '<div>kjghdhfjkhkh</div>', '<div>mhjfhtdh</div>', '<div>nvhsgxgc</div>', '<div>kugfhtdgfgkljl</div>', '<div>ngvchhnvmbmbx</div>'];

for (let i = 0; i < div.length; i++) {
document.write(i + div[i] + '<hr>');
}
 */


/*  - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 */

/* let aaa = ['<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>'];
let i = 0;
while (i < aaa.length) {
   document.write(aaa[i] + '<hr>');
   i++;
}
 */

/*  - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
 */


/* let aaa = ['<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>', '<h1>jkasjjjchhuiedhicshskcchis</h1>'];
let i = 0;
while (i < aaa.length) {
   document.write(i + aaa[i] + '<hr>');
   i++;
}
 */



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

/* let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < n.length; i++) {
   console.log(n[i]);
}
 */


/*  - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
 */

/* let str = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (let i = 0; i < str.length; i++) {
   console.log(str[i]);
}
 */



/* - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
 */

/* let str = ['a', 'b', 1, 2, true, false, 'true', undefined, null, '555'];
for (let i = 0; i < str.length; i++) {
   console.log(str[i]);
}
 */


/* - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
 */

/* let str = ['a', 'b', 1, 2, true, false, 'true', undefined, null, '555'];
for (let i = 0; i < str.length; i++) {
   if (typeof str[i] === 'boolean') {
      console.log(str[i]);
   }
}
 */


/* - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
 */

/* let str = ['a', 'b', 1, 2, true, false, 'true', undefined, null, '555'];
for (let i = 0; i < str.length; i++) {
   if (typeof str[i] === 'number') {
      console.log(str[i]);
   }
}
 */


/* - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
 */

/* let str = ['a', 'b', 1, 2, true, false, 'true', undefined, null, '555'];
for (let i = 0; i < str.length; i++) {
   if (typeof str[i] === 'string') {
      console.log(str[i]);
   }
}
 */


/* - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
 */

/* let zzz = [];
zzz[0] = 1;
zzz[1] = 2;
zzz[2] = 'a';
zzz[3] = 'b';
zzz[4] = true;
zzz[5] = false;
zzz[6] = null;
zzz[7] = undefined;
zzz[8] = 'true';
zzz[9] = '456';

for (let i = 0; i < zzz.length; i++) {
   console.log(zzz[i]);
}
 */


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/* for (let i = 0; i < 10; i++) {
   console.log(i + 1);
   document.write((i + 1) + '<hr>' );
}
 */


/*  - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 */

/*  for (let i = 0; i < 100; i++) {
   console.log(i + 1);
   document.write((i + 1) + '<hr>' );
}
 */


/*  - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
 */

/* for (let i = 0; i < 200; i+=2) {
   console.log(i / 2 + 1);
   document.write((i / 2 + 1) + '<hr>' );
}
 */


/*  - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
 */

/* for (let i = 0; i <= 200; i+=2) {
   console.log(i);
   document.write((i) + '<hr>' );
}
 */


/*  - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
 */

/*  for (let i = 1; i <= 200; i+=2) {
   console.log(i);
   document.write((i) + '<hr>' );
}
 */

/* - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
 */

/* for (let m = 0; m <= 2; m++) {
   for (let s = 0; s < 60; s++) {
      document.write(m + 'хв ' + s + 'сек' + '<hr>');
      console.log(m + 'хв ' + s + 'сек');
      if (m >= 2) {
         break;
      }
   }
}
 */


/* - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
 */


/* for (let h = 0; h <= 2; h++) {
   for (let m = 0; m < 60; m++) {
      // if (h === 2 && m > 20) {
      //    break;
      // }
      for (let s = 0; s < 60; s++) {
         if (h === 2 && m === 20 && s === 0) {
            console.log(h + 'год ' + m + 'хв. ' + s + 'сек.');
            document.write(h + 'год ' + m + 'хв. ' + s + 'сек.' + '<hr>');
         } else if (h === 2 && m >= 20) {
            break;
         } else {
            console.log(h + 'год ' + m + 'хв. ' + s + 'сек.');
            document.write(h + 'год ' + m + 'хв. ' + s + 'сек.' + '<hr>');
         }
      }
   }
}
 */


/* Додатково
 */


/*  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
 */






// let ffff = ['a', 'b', 'c']
// console.log(ffff.join(''));












// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

/* =================
=================
=================
=================
 */



/* - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
 */

/* let xxx = ['a', 'b', 'c'];
let n = 0;
do {
   n++;
   xxx.push(n);
} while (n < 3);
console.log(xxx);
 */



/* - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
 */

/* let xxx = [1, 2, 3];
Array.prototype.reverse.call(xxx);
console.log(xxx);
 */


/*  - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
 */

/* let xxx = [1, 2, 3];
xxx.push(4, 5, 6);
console.log(xxx);
 */


/*  - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
 */

/* let xxx = [1, 2, 3];
xxx.unshift(4, 5, 6);
console.log(xxx);
 */


/*  - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
 */

/* let str = ['js', 'css', 'jq'];
let first = str.shift();
console.log(first);
 */


/*  - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
 */

/* let str = ['js', 'css', 'jq'];
let last = str.pop();
console.log(last);
 */


/*  - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
 */

/* let namber = [1, 2, 3, 4, 5];
namber.splice(0, 3);
console.log(namber);
 */


/*  - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
 */

/* let namber = [1, 2, 3, 4, 5];
namber.splice(-3);
console.log(namber);
 */


/*  - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
 */

/* let namber = [1, 2, 3, 4, 5];
namber.splice(1, 2);
console.log(namber);
 */


/*  - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
 */

/* let namber = [1, 2, 3, 4, 5];
namber.splice(3, 0, 'a', 'b', 'c');
console.log(namber);
 */


/*  - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
 */

/* let namber = [1, 2, 3, 4, 5];
namber.splice(5, 0, 'e');
namber.splice(4, 0, 'c');
namber.splice(1, 0, 'a', 'b');
console.log(namber);
 */


/*  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
 */

/* let namber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < namber.length; i++) {
   if (!(namber[i] % 2)) {
      console.log(namber[i]);
   }
}
 */


/* - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
 */

/* let namber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let namberTwo = [];

for (let i = 0; i < namber.length; i++) {
   namberTwo.push(namber[i]);
}

console.log(namberTwo);
 */




// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// let namber [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while


/* let namber = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < namber.length) {
   console.log(namber[i]);
   i++;
}
 */

// 2. перебрати його циклом for


/* let namber = [2,17,13,6,22,31,45,66,100,-18];

for (let i = 0; i < namber.length; i++) {
console.log(namber[i]);   
}
 */

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом


/* let namber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 1;

while (i < namber.length) {
   console.log(i + ' - НЕПАРНИЙ ІНДЕКС');
   console.log(namber[i] + ' - ЗНАЧЕННЯ');
   console.log('--------------------------------');
   i += 2;
}
 */


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

/* let namber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 1; i < namber.length; i+=2) {
console.log(i + ' - НЕПАРНИЙ ІНДЕКС');
console.log(namber[i] + ' - ЗНАЧЕННЯ');
console.log('-------------------------------');
}
 */



// 5. перебрати циклом while та вивести  числа тільки парні  значення

/* let namber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;

while (i < namber.length) {
   if ((namber[i] % 2) === 0) {
      console.log(namber[i] + ' - ПАРНЕ ЗНАЧЕННЯ');
      console.log('-------------------------------');
      i++
   } else {
      i++;
   }
}
 */


// 6. перебрати циклом for та вивести  числа тільки парні  значення

/*  let namber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

 for (let i = 0; i < namber.length; i++) {
    if ((namber[i]%2 === 0)) {
      console.log(namber[i] + ' - ПАРНЕ ЗНАЧЕННЯ');
      console.log('*****************************');
    }    
 }
 */


// 7. замінити кожне число кратне 3 на слово "okten"

/* let namber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let i = 0; i < namber.length; i++) {
   if ((namber[i] % 3) === 0) {
         console.log(namber[i] + ' - КРАТНЕ 3');
         console.log('okten');
         console.log('****************************************');
      } else {
         console.log(namber[i]);
         console.log('****************************************');
      }
   }
 */

// 8. вивести масив в зворотньому порядку.

/* let namber = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(namber.reverse());
 */


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)



// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

/* let xxx = [];

for (let i = 0; i < 50; i++) {
   xxx.push(i * 2);
}
console.log(xxx);
 */


// - заповнити його 50 непарними числами за допомоги циклу.

/*  let xxx = [];

 for (let i = 0; i < 50; i++) {
    xxx.push(i * 2 + 1);
 }
 console.log(xxx);
 */



// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.


/* let xxx = [];

for (let i = 0; i < 50; i++) {
   xxx.push(i * 2);
}
console.log(xxx);
 */



// 2. заповнити його 50 непарними числами за допомоги циклу.


/* let xxx = [];

for (let i = 0; i < 50; i++) {
   xxx.push(i * 2 + 1);
}
console.log(xxx);
*/


/* 3. используя Math.random заполнить массив из ???(сколько хотите) элементов. диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
 2. вывести на консоль  каждый третий елемент
 3. вывести на консоль  каждый третий елемент
 но при условии что его значение является парным.
 4. вывести на консоль  каждый третий елемент
 но при условии что он имеет парное значение и
 записать их в другой массив.
 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
 */

// let xxx = [];
// let yyy = [];

// for (i = 0; i < 50; i++) {
//    xxx.push(Math.round(Math.random() * 100));
// }

// for (let i = 0; i < 50; i++) {
//    yyy.push(Math.round(Math.random() * (732 - 8) + 8));
// }
// console.log('Без діапазона');
// console.log(xxx);
// console.log('***************************************************');
// console.log('Діапазон від 8 до 732');
// console.log(yyy);
// console.log('***************************************************');

/* for (let i = 2; i < yyy.length; i+=3) {
   console.log('Кожен третій елемент масива');   
   console.log(i + 1);
   console.log(yyy[i]);
   console.log('***************************************************');
}
 */


/* for (let i = 2; i < yyy.length; i += 3) {
   if (!(yyy[i] % 2)) {
      console.log('Кожен третій елемент масива, за умови, що він парний');
      console.log(i + 1);
      console.log(yyy[i]);
      console.log('***************************************************');
   }
}
 */


/*  let zzz = []

for (let i = 2; i < yyy.length; i += 3) {
   if (!(yyy[i] % 2)) {
      zzz.push(yyy[i])
   }
}
console.log('Новий масив');
console.log(zzz);
console.log('***************************************************');
 */

/* for (let i = 0; i < yyy.length; i++) {
   if (!(yyy[i + 1] % 2)) {
      console.log('Елемент масива, у якого зправа парний елмент');
      console.log(yyy[i]);
      console.log('***************************************************');
   }
}
 */



/*   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
 */

/* let a = [100,250,50,168,120,345,188];

let averageСheck = a.reduce((acc, value) => {
   return acc + value
}) / a.length;
console.log(Math.round(averageСheck) + ' - СЕРЕДНІЙ ЧЕК');
 */


// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

/* let a = [];
let b = [];

for (i = 0; i < 20; i++) {
   a.push(Math.round(Math.random() * 10));
   b.push(a[i] * 5);
}

console.log(a);
console.log('******************************************');
console.log(b);
 */


/* 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
 додати його в інший масив.
 */

/* let a = [4, 'a', 5, 98, 'dgfjfg', true, false, 0, 47, '548', 867];
let b = []
for (let i = 0; i < a.length; i++) {
   if (typeof (a[i]) === 'number') {
      b.push(a[i]);
   }
}
console.log(a);
console.log(b); */