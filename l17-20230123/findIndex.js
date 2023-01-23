const randomArr = getRandomArray(10, 0, 22);
const searchedNumb = random(0, 22);

//! операція пошуку порядкового номера елемента

// let searchedValueIndex = -1;

// for(let i = 0; i < randomArr.length; i += 1){
//     console.count('loop');
//     if(randomArr[i] == searchedNumb){
//         searchedValueIndex = i;
//         break;
//     }
// }

const searchedValueIndex = randomArr.findIndex(el => el == searchedNumb);

console.log(randomArr);
console.log(`Шукав: ${searchedNumb}, знайшов за індексом : ${searchedValueIndex}`);