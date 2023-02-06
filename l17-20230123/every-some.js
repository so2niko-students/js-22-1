const randomArr = getRandomArray(5, 1, 6);

//! Перевірка усіх елементів масиву (every)

let isChecked = true;
for(let i = 0; i < randomArr.length; i += 1){
    if(randomArr[i] == 6){
        isChecked = false;
        break;
    }
}

// const isChecked = randomArr.every(el => el != 6);

console.log('All elements are not 6: ', isChecked);
console.log(randomArr);

//! Хоча-б один відповідає умовам (some)

// let is6 = false;
// for(let i = 0; i < randomArr.length; i += 1){
//     if(randomArr[i] == 6){
//         is6 = true;
//         break;
//     }
// }

const is6 = randomArr.some(el => el == 6);


console.log('Array has 6: ', is6);
console.log(randomArr);

//Даємо деяким командам ім`я і за цим іменем можемо викликати

// function greeting(){
//     const greetings = ['Hello', 'Hi', 'Aloha', 'Hm'];
//     const r = Math.floor(Math.random() * 4);//0-3
//     console.log(greetings[r]);
// }

// function greeting(name){
//     const greetings = ['Hello', 'Hi', 'Aloha', 'Hm'];
//     const r = Math.floor(Math.random() * 4);//0-3
//     console.log(`${ greetings[r] }, ${ name }`);
// }

let answer;

function greeting(name){
    const greetings = ['Hello', 'Hi', 'Aloha', 'Hm'];
    const r = Math.floor(Math.random() * 4);//0-3
    answer = `${ greetings[r] }, ${ name }`;

    // return answer;
}

greeting('Nick');
console.log(answer);
// console.log(answer);
greeting('Marharyta');
document.body.innerText = answer;
// console.log(answer);
greeting('Anton')
alert(answer);