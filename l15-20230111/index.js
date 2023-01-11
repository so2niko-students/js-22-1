//!Loops

//?while
//цикл з передумовою

// let i = 1;

// while(i < 11){//умова виконання
//     //тіло циклу
//     console.log(i);
//     i += 1;
//     //1 повне виконання тіла циклу - ітерація
// }

//?do_while
//цикл з післяумовою

// let j = 11;

// do{
//     console.log('j == ', j);

//     j += 1;
// }while(j < 11);

//? for
//? цикл з лічильником

// for(let i = 1; i < 11; i += 1){
//     console.log('i => ', i);
// }

// let i = 11;

// for(; i >= 0; i -= 1){
//     console.log(i);
// }

let sum = 0;
for (let i = 0; i < 10; i += 1) {
  const r = ~~(Math.random() * 6) + 1;
  sum += r;
  console.log(r);
}

const average = ~~(sum / 10);
console.log("Середнє число: ", average);
console.log(~5);

//1
//Написати функцію, яка отримує 2 числа. Вивести користувачеві суму всіх чисел у цьому діапазоні, не враховуючи межі, що вводяться.
// 1, 33 -> 2, 3, 4, 5,...32

function n1(a, b) {
  //
}
n1(1, 33); //2,3,4,5,6,7,8....32
n1(5, 10); //6,7,8,9

// function n1(j, n) {
//     for (let i = j + 1; i < n; i += 1) {
//         console.log(i);
//     }
// }
// n1(1,33);

function n1(a, b) {
  // let sum = 0;
  // let question = 'Input a:';
  // let a = prompt(question);
  // let question2 = 'Input b:';
  // let b = prompt(question2);
  for (let i = a + 1; i < b; i += 1) {
    console.log(i);
  }
}

//2
//Yаписати функцію, яка отримує ширину та символ. Вивести в консоль лінію заданої ширини заданим символом
//5, * -> *****
function draw(width, symb) {
  //
}
draw(5, "*"); // *****
draw(3, "w"); // www

function draw(width, symb) {
//   let question = "Input width: ";
//   let width = prompt(question);
//   let question2 = "Input symb: ";
//   let symb = prompt(question2);
    let line = '';
  for (let i = 0; i < width; i += 1) {
    line += `${ symb },`;
  }
  console.log(line);
}

function n1(a,b){
    for(let i = a; i < b; i += 1){
        console.log(i);
    }
}
n1(2,7);
