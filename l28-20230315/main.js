const r1 = () => {
    const text1 = 'Микола сидить за столом';
    const text2 = 'У Миколи все добре';
    const text3 = 'Миколине тістечко';
    const text4 = 'У Миколиного тістечка скоро закінчиться строк використання';
    const text5 = 'Зараз 2023 рік 99';
    // Regular Expressions
    
    //object
    const r11 = new RegExp('Микол[аи]\\s');
    //literal
    const r12 = /Микол[аи]\s/;

    const r13 = /Миколин(е)|(ого)\s/;

    const r14 = /\d{4}/g; //квантифікатори
    
    const r141 = /\d{1,4}/g; //квантифікатор діапазон
    
    const r142 = /\d{1,}/g; //квантифікатор не менше
    
    const r1421 = /\d+/g; //квантифікатор не менше
    
    const r143 = /\d{0,}/g; //квантифікатор пофіг скільки

    const r1431 = /\d*/g; //квантифікатор пофіг скільки
    
    const r144 = /\d{0,1}/g; //квантифікатор Шрьодінгера

    const r1441 = /\d?/g; //квантифікатор Шрьодінгера

    const r15 = /[0123456789]/; // \d
    const r151 = /[0-9]/; // \d

    const r16 = /[0123456789_abcdefghijklmnopqrstuvwxyz]/; // \w
    const r161 = /[0-9_a-z]/; // \w

    const rLinerSize = /^[01]\.\d{1,2}$/; //0.1 0.01 0.2 0.3 0.4 0.5 0.6... 1 1.1

    // Перевірити на правильність
    // console.log('r11.test(text1)', r11.test(text1));
    // console.log('r11.test(text2)', r11.test(text2));
    // console.log('r11.test(text3)', r11.test(text3));
    // console.log('r13.test(text2)', r13.test(text2));
    // console.log('r13.test(text3)', r13.test(text3));
    // console.log('r13.test(text4)', r13.test(text4));
    // console.log('r14.test(text2)', r14.test(text2));
    // console.log('r14.test(text3)', r14.test(text3));
    // console.log('r14.test(text4)', r14.test(text4));
    // console.log('r14.test(text5)', r14.test(text5));

    // Збирати дані(вичитувати)
    // console.log(text5.match(r143));
    // console.log(text4.match(r13));
    // console.log(text3.match(r13));

    // Гнучко заміняти дані
}

const createR = (text) => {
    return new RegExp(text);
}

const nick = createR('Nick');
const sotula = createR('Sotula');
const sotulaUkr = createR('Сотула');

r1();

const checkLinerSize = size => {
    const rLinerSize = /^[01]\.\d{1,2}$/; 
    return rLinerSize.test(size);
}

const funnyPassword = pwd => {
    const pwd1 = pwd.replace(/(\w+)\s(\w+)/g, '$2_$1');
    const pwd2 = pwd1.replace(/[оo]/g, '0');
    const pwd3 = pwd2.replace(/[t]/g, '+');
    const pwd4 = pwd3.replace(/[s]/g, '5');

    return pwd4;
}

console.log(funnyPassword('Strong Password'));


// console.log('12', checkLinerSize(12));
// console.log('1', checkLinerSize(1));
// console.log('99', checkLinerSize(99));
// console.log('"hello"', checkLinerSize('hello'));
// console.log('true', checkLinerSize(true));
// console.log('11.1', checkLinerSize(11.1));
// console.log('1.1!', checkLinerSize('1.1!'));
// console.log('Hello1.1--', checkLinerSize('Hello1.1--'));
// console.log('1.1', checkLinerSize(1.1));
// console.log('0.1', checkLinerSize(0.1));
// console.log('.6', checkLinerSize(.6));
// console.log('.06', checkLinerSize(.06));