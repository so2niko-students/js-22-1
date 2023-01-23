const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

//! Проход по масиву для використання даних
const randomArray = getRandomArray(10, 0, 5);

// for(let i = 0; i < randomArray.length; i += 1){
//     const n = randomArray[i];
//     const color = colors[n];
//     const text = `%c${i} : number ${n}, color ${color}`;
//     console.log(text, `background-color: ${color}; color: black; padding: 10px;`);
// }

// foreach

randomArray.forEach((el, i) => {
    const color = colors[el];
    const text = `%c${i} : number ${el}, color ${color}`;
    console.log(text, `background-color: ${color}; color: black; padding: 10px;`);
})
