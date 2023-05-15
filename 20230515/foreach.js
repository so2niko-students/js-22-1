const a = [1, 2, 3];
const b = ['a', 'b', 'c', 'd'];
const c = [true, false, false, true, true, false];
const d = [33, false, null, 'aaaa', undefined, -3, .443, 'Dnipro', 'Eurovision 2023', 44n, -4543n];

//number, string, boolean, null, undefined, symbol, big int
//object
const telBook = {
    repair: '+380998765433',
    principal: '+380667778899',
    'main door lock': '+380567654433',
    11: 'eleven',//не нормально записувати ключи не рядками (не рекомендується)
    33: 44,//
    true: false,//
};

// console.log(telBook.principal);
// console.log(telBook[11]);
// console.log(telBook["main door lock"]);

const lesson = {
    date: '2023-05-15',
    dateInfo: {
        month: 5,
        day: 15,
        year: 2023
    },
    group: 'JS-22-1',
    online: ['Mykola', 'Evgen', {
        name: 'Ostap',
        surname: 'Spas',
        fullname: 'Spas Ostap'
    }, {
            name: 'Marharyta',
            surname: 'Pluzhnikova',
            fullname: 'Pluzhnikova Marharyta',
            languages: ['ukrainian', 'russian', 'english', 'serbian', 'deutsch']
        }
    ]
};

// console.log(lesson.online[2].surname);
console.log(lesson.online[3].languages[2]);

// const gr = lesson.online;

// console.log(gr[0]);
// console.log(lesson.online[3]);
// console.log(lesson.dateInfo.year);
// console.log(lesson.dateInfo['year']);
// console.log(lesson['dateInfo'].year);
// console.log(lesson['dateInfo']['year']);



// console.log(33 + 44n);

const sea = [
    [
        's', '.', '.', '.', '.'
    ],
    [
        '.', '.', 's', '.', 's'
    ],
    [
        '.', '.', '.', '.', 's'
    ],
    [
        '.', '.', '.', '.', 's'
    ],
    [
        's', 's', '.', '.', '.'
    ]
];

// console.log(sea[1][1]);
// console.log(sea[4][1]);
// console.log(sea[2][4]);

const cube = [
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        [11,12,13],
        [14,15,16],
        [17,18,19]
    ],
    [
        [21,22,23],
        [24,25,26],
        [27,28,29]
    ]
];

// console.log(cube[1][0][1]);//12
// console.log(cube[0][2][2]);//9
// console.log(cube[2][1][1]);//25

//передумова
// let o = 0;
// while(o < 5){//тіло циклу
//     console.log('Loop while');
//     o += 1;
// }

// for(let i = 0; i < 5; i += 1){
//     console.log('Loop for', i);
// }

//після умова
// let j = 10;
// do{
//     console.log('Loop do-while');
//     j += 1;
// }while(j < 5);

const languages = ['ukrainian', 'russian', 'english', 'serbian', 'deutsch'];

//Вивести в консоль список мов по черзі


//----------------------
// for(let i = 0; i < languages.length; i += 1){
//     show(languages[i]);
// }

// for(let i = 0; i < languages.length; i += 1){
//     lang2chars(languages[i]);
// }

// for(let i = 0; i < languages.length; i += 1){
//     langLvl(languages[i], i);
// }

// for(let i = 0; i < languages.length; i += 1){
//     countVowels(languages[i]);
// }
//----------------------
function show(lang){ console.log(lang); }

function langLvl(lang, i){
    const lvl = Math.floor(Math.random() * 5) + 1;
    console.log(`${ i }: ${ lang } lvl = ${ lvl }`);
}

function lang2chars(lang){ console.log(lang.slice(0, 2)); }

function countVowels(lang){
    const vowelsRegExp = /[aouiey]/g;
    const consonant = lang.replace(vowelsRegExp, '');
    const count = lang.length - consonant.length;
    console.log(lang, count);
}

function myForEvery(arr, func){
    for(let i = 0; i < arr.length; i += 1){
        func(arr[i], i);
    }
}

// myForEvery(languages, countVowels);
languages.forEach(countVowels);
// myForEvery(languages, lang2chars);
languages.forEach(lang2chars);
// myForEvery(languages, show);
languages.forEach(show);
// myForEvery(languages, langLvl);
languages.forEach(langLvl);