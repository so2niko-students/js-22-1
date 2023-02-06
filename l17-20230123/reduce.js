const randomArr = getRandomArray(20, 3, 10);

//! Універсальний метод(мультитул) - reduce
//Отримати якийсь результат на основі масиву

// let sum = 0;
// for(let i = 0; i < randomArr.length; i += 1){
//     sum += randomArr[i];
// }

const sum = randomArr.reduce((acc, el) => acc + el);


console.log('sum: ', sum, randomArr);

const url = 'https://randomuser.me/api/?results=100';
fetch(url).then(r => r.json()).then(d => {
    console.log(d);
    const stat = d.results.reduce((acc, el) => {
        const g = el.gender;
        const nat = el.nat;
        const age = el.dob.age;

        if(age < 30){
            acc.age.kids += 1;
        }else{
            if(age >= 65){
                acc.age.seniors += 1;
            }else{
                acc.age.adults += 1;
            }
        }
        
        acc[g] += 1;
        if(!acc[nat]){
            acc[nat] = 0;
        }

        acc[nat] += 1;
        return acc;
    }, {male : 0, female : 0, age : {kids : 0, adults : 0, seniors : 0}})
    console.log(stat);
})