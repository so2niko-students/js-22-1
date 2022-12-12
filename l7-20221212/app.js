//Спитати у користувача зріст в сантиметрах
//Константи
const questionHeight = 'Який в тебе зріст в СМ?';

//блок вводу даних
const heightCM = Number(prompt(questionHeight));

//блок логіки
const heightM = heightCM / 100;
const dd = heightCM + 10;
console.log(dd);
const answer = `Твій зріст - ${ heightM }м`;

//блок виводу даних
alert(answer);

