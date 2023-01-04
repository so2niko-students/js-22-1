// const qestionNum1 = "Enter the first number";
// const num1 = prompt(qestionNum1);
// const qestionNum2 = "Enter the second number";
// const num2 = prompt(qestionNum2);
// const sum = num1 + num2;
// const sub = num1 - num2;
// const mult = num1 * num2;
// const div = num1 / num2;
// const qestionSimb = "Enter sign (+ or - or * or /)";
// const simb = prompt(qestionSimb);
// if ((simb === "+")) alert(sum);
// if ((simb == "-")) alert(sub);
// if ((simb == "*")) alert(mult);
// if ((simb == "/")) alert(div);

// const question1 = "Enter the first number";
// const x = prompt(question1, 10);
// const question2 = "Enter the second  number";
// const y = prompt(question2, 110);
// const question3 = "Enter  1 if you want +, 2 - , 3 * , 4 / ";
// const a = prompt(question3);

// function count(result) {
//   const x1 = parseInt(x);
//   const y1 = parseInt(y);

//   switch (a) {
//     case '1':
//       result = x1 + y1;
//       break;
//     case "2":
//       result = x1 - y1;
//       break;
//     case "3":
//       result = x1 * y1;
//       break;
//     case "4":
//       result = x1 / y1;
//       break;
//     default:
//       alert("ERROR");
//   }
//   alert(result);
// }

// count();


function interface(){
    let answer = calculator(1, 2, '+');
    console.log(answer);
    answer = calculator(1, 2, '*');
    console.log(answer);
    answer = calculator(1, 2, '/');
    console.log(answer);
}

function calculator(x, y, operator){
    let answer = 0;
    switch(operator){
        case '+':{
            answer = x + y;
            break;
        }
        case '-':{
            answer = x - y;
            break;
        }
        case '*':{
            answer = x * y;
            break;
        }
        case '/':{
            answer = x / y;
            break;
        }
    }

    return answer;
}

interface();