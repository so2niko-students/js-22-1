const randomArr = getRandomArray(20, 0, 100);

//! Фільтрація даних

console.log(randomArr);

// const divide3Arr = [];

// for(let i = 0; i < randomArr.length; i += 1){
//     const n = randomArr[i];
//     if(n % 3 == 0){
//         divide3Arr.push(n);
//         // divide3Arr[i] = n;
//     }
// }

const divide3Arr = randomArr.filter(el => el % 3 == 0);


console.log(divide3Arr);