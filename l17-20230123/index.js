//Об`єктний
const colors = new Array();
const colors2 = new Array('red', 'orange', 'yellow', 'green', 'blue', 'violette');
const colors3 = new Array(11);
console.log(colors);
console.log(colors2);
console.log(colors3);

//Літеральний
const rainbow = [];
const rainbow2 = ['red', 'orange', 'yellow', 'green', 'blue', 'violette'];
const rainbow3 = [];
rainbow3.length = 11;
console.log(rainbow);
console.log(rainbow2);
console.log(rainbow3);

//! length - властивість
//getter, setter

//! push, pop, shift, unshift - методи
//push - вставити в кінець масиву
//unshift - вставити в голову

//pop - забирає з кінця 1 елемент
//shift - забирає з голови один елемент

//! [] - доступ до елементів масиву
rainbow2[2] += ' жовтий';
console.log(rainbow2[2]);

