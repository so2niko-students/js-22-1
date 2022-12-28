//!опис функції - function declaration
//ключове слово - функція
//ім`я функції
//дужки з аргументами функції
function sum3nums(nums){
    //тіло функції
    const n1 = nums % 10;
    const n2 = (nums - n1) % 100;
    const n3 = (nums - n1 - n2) / 100;
    const sum = n1 + n2 / 10 + n3;

    //поверненя результату 
    //ключове слово return
    //якийсь операнд/змінна/константа
    return sum;
    //весь код після return не виконується
}

//!опис функції - function expression
//функція без імені - анонімна
//властивості за замовчуванням - default properties
const clog = function(text, color = 'black'){
    const styles = `color:${ color }; padding:10px; background-color: white; font-family: Arial;`;
    console.log(`%c${ text }`, styles);
    //якщо функція не повертає значення, то вона повертає undefined
}

//!опис функції - arrow functions
//стрілкова функція - один із варіантів анонімної функції
//опсується без ключового слова function, замість неї - стрілка =>
//в стрілкових функціях нема власного this, arguments 
// const random6Num = () => {
//     return Math.floor(Math.random() * 900000 + 100000);
// }
const random6Num = () => Math.floor(Math.random() * 900000 + 100000);

const message = 'Enter the number: ';
// const number = prompt(message);
const number = random6Num();
const num456 = number % 1000;//456
const num123 = (number - num456) / 1000;//123456-456=123000

const sum1 = sum3nums(num123);
const sum2 = sum3nums(num456);

clog(number, 'red');

// if(sum1 == sum2){
//     clog('Lucky ticket!');
// } else {
//     clog('Unlucky ticket!');
// }

//!тернарний оператор
// sum1 == sum2 ? clog('Lucky ticket!') : clog('Unlucky ticket!');
const answer = sum1 == sum2 ? 'Lucky ticket!' : 'Unlucky ticket!';
clog(answer);