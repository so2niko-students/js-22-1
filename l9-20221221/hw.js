/*
5. Навпаки

Запитайте у користувача тризначне число і виведіть його задом наперед. Для вирішення завдання вам знадобиться оператор % (залишок від ділення).
*/

//!отримати рядок
const enterMessage = 'Введіть тризначне число';
const row = prompt(enterMessage);//'456'

//!логіка
//variant 1
// const answer = `${ row[2] }${ row[1] }${ row[0] }`;
//variant 2
//456
const d3 = row % 10;//6
const d2 = (row - d3) % 100;//50
const d1 = (row - d2 - d3) / 100;//4
const answer = d3 * 100 + d2 + d1;
//variant 3
// const answer = row.split('').reverse().join('');

//!вивести рядок
alert(answer);


/*
7. Конвертер кольору.

Користувач вводить по черзі кольори (червоний, зелений, синій) у вигляді шістнадцяткового запису, а вивести йому цей колір у вигляді rgb(12,13,14)

#112233 --> rgb(17,34,51)
#f3e4a0 --> rgb(243,228,160)
*/

const hex = prompt('Введіть колір у вигляді #ffffff');
const r = Number.parseInt(hex[1] + hex[2], 16);
const g = Number.parseInt(hex[3] + hex[4], 16);
const b = Number.parseInt(hex[5] + hex[6], 16);
const rgb = `rgb(${ r },${ g },${ b })`;

