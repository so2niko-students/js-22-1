const randomArr = getRandomArray(10, 0, 22);
const searchedNumb = random(0, 22);

//! операція пошуку елемента

// let searchedValue;

// for(let i = 0; i < randomArr.length; i += 1){
//     console.count('loop');
//     if(randomArr[i] == searchedNumb){
//         searchedValue = randomArr[i];
//         break;
//     }
// }

let searchedValue = randomArr.find(el => {
    console.count('loop');
    return el == searchedNumb;
});

console.log(randomArr);
console.log(`Шукав: ${searchedNumb}, знайшов : ${searchedValue}`);