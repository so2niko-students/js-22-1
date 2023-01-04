const LATES_COST = 20;
const LATES_DELIMITER = 3;
const LATES_FREE = 2;
const LINES_COST = 50;
const LINES_DELIMITER = 100;

function calculateLines(salary, latesCount){
    //lates to money
    const latesMoney = parseInt(latesCount / LATES_DELIMITER) * LATES_COST;

    //salary + lates money
    const pureSalary = salary + latesMoney;

    //last part of salary to lines
    const lines = Math.ceil(pureSalary / LINES_COST) * LINES_DELIMITER;

    return lines;
}

console.log('calculateLines(51, 2) == 200', calculateLines(51, 2) == 200 ? 'OK' : 'NOT OK');
console.log('calculateLines(100, 10) == 400', calculateLines(100, 10) == 400 ? 'OK' : 'NOT OK');

function calculateLates(lines, salary){
    //lines to money
    const moneyForLines = parseInt(lines / LINES_DELIMITER) * LINES_COST;
    
    //money - salary
    const moneyForLates = moneyForLines - salary;

    if(moneyForLates < 0){
        return LATES_FREE;
    }

    //free money to lates
    const latesCount = parseInt(moneyForLates / LATES_COST) * LATES_DELIMITER + LATES_FREE;

    return latesCount;
}


console.log('calculateLates(300, 130) == 5', calculateLates(300, 130) == 5 ? 'OK' : 'NOT OK');
console.log('calculateLates(490, 153) == 8', calculateLates(490, 153) == 8 ? 'OK' : 'NOT OK');
console.log('calculateLates(149, 44) == 2', calculateLates(149, 44) == 2 ? 'OK' : 'NOT OK');
console.log('calculateLates(149, 144) == 2', calculateLates(149, 144) == 2 ? 'OK' : 'NOT OK');


function calculateSalary(lines, latesCount){
    //lines to money
    const moneyForLines = parseInt(lines / LINES_DELIMITER) * LINES_COST;

    //lates to money
    const moneyForLates = parseInt(latesCount / LATES_DELIMITER) * LATES_COST;

    //money 4 lines - money 4 lates
    const salary = moneyForLines - moneyForLates;

    if(salary < 0){
        return 0;
    }

    return salary;
}


console.log('calculateSalary(201, 4) == 80', calculateSalary(201, 4) == 80 ? 'OK' : 'NOT OK');
console.log('calculateSalary(201, 24) == 0', calculateSalary(201, 24) == 0 ? 'OK' : 'NOT OK');

function vasia(){
    const text0 = `Оберіть опцію:
1 - Порахувати рядки
2 - Порахувати запізнення
3 - Порахувати дохід`;

    const textLines = 'Введіть рядки';
    const textLates = 'Введіть запізнення';
    const textSalary = 'Введіть дохід';

    let text1, text2, func;

    const option = parseInt(prompt(text0, 1));

    switch(option){
        case 1:{
            text1 = textSalary;
            text2 = textLates;
            func = calculateLines;
            break;
        }
        case 2:{
            text1 = textLines;
            text2 = textSalary;
            func = calculateLates;
            break;
        }
        case 3:{
            text1 = textLines;
            text2 = textLates;
            func = calculateSalary;
            break;
        }
    }



    const value1 = prompt(text1);
    const value2 = prompt(text2);
    const answer = func(value1, value2);

    alert(answer);
}

const a = 3;

if(a > 0){
    const b = 'a > 0';
    console.log('I am in condition, b == ', b);
}

// console.log(b);

//!Замикання
//!Closures

function counter(){
    let i = 0;
    return function(){
        i++;
        return i;
    }
}

const counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());