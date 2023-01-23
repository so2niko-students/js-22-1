const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

//! Створити новий масив на базі старого
const randomArray = getRandomArray(10, 0, 5);

// const randomColors = [];
// for(let i = 0; i < randomArray.length; i += 1){
//     const color = colors[randomArray[i]];
//     randomColors[i] = color;
// }

const randomColors = randomArray.map(el => colors[el]);

console.log(randomColors);