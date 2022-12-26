/*
Операція - дія, що складається з оператора та операндів.

Оператори по кількості операндів діляться на:
- унарні
- бінарні
- тернарні

*/

//! Оператори зрівняння
console.log(4 > 2);
console.log(4.0000000001 > 4);
console.log(4n > 2n);
console.log('Dnipro' > 'Dnapro');
console.log(3 < 4);
console.log(4 == '4');
console.log(4 === 6);
console.log(4 != 6);
console.log(4 !== '4');
console.log(4 >= 3);
console.log(4 <= 8);
//! Логічні оператори
console.log(true || false);// true = 1 , false = 0, || = +, && = *
console.log(false || false);//0 + 0 = 0
console.log(true || true);//1 + 1 = 1
console.log(false || true);//0 + 1 = 1

console.log(true && false);//1 * 0 = 0
console.log(false && false);//0 * 0 = 0
console.log(true && true);//1 * 1 = 1
console.log(false || true);//0 * 1 = 0

console.log(!true);
console.log(!false);

//! Перетворення типів
console.log(4 + 11);
console.log('4' + 11);
console.log(true + true);//2
console.log(true + false);//1
console.log(true + 'false');//10, 'truefalse', '1false'
console.log(true + 2);//3
console.log(3 + null);//3, null, '3null'
console.log(3 + undefined);//undefined, 3, null
console.log('4' * 11);//'411', 44
console.log('a' * 11);//NaN, 
console.log('2a' * 11);//NaN, 
console.log(Number.parseInt('2a') * 11);//22

//? Явні перетворення
//до числа
Number.parseInt('2a')
Number.parseFloat('2a')
Number('22');
//до рядка
String(44);
(44).toString();
//до логічного типу
console.log('Boolean(33)', Boolean(33));
console.log('Boolean(0)', Boolean(0));
console.log('Boolean(\'Hello\')',Boolean('Hello'));
console.log('Boolean(\'\')',Boolean(''));
console.log('Boolean(\'0\')',Boolean('0'));
console.log('Boolean(\'null\')',Boolean('null'));
console.log('Boolean(\'undefined\')',Boolean('undefined'));
console.log('Boolean(null)',Boolean(null));
console.log('Boolean(undefined)', Boolean(undefined));

//? Неявні перетворення
// до числа
console.log(+'4' + 11);
console.log(1 * '4' + 11);
console.log('4' / 1 + 11);
//до рядка
console.log('' + 4 + 5);
console.log(`${ 4 }` + 5);
//до логічного типу
console.log(!!33);
console.log(!!0);//false
console.log(!!null);//false
console.log(!null);//true