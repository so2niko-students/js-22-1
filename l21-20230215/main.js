//Можливістсь відкласти виконання якогось коду на час

let count = 0;

function hello(){
    count++;
    console.count('Hello');
    if(count > 10){
        clearInterval(intervalID);
    }
}

//! setTimeOut - виконання 1 раз через ... мс
// const intervalID0 = setTimeout(hello, 5000);

//! setInterval - виконання кожні ... мс
// const intervalID = setInterval(hello, 1000);
// console.log(intervalID0);
// console.log(intervalID);

//! clearInterval - метод зупинки setTimeOut & setInterval