const formSelector = '#formAuth';
const emailSelector = '#inputEmail1';
const passwordSelector = '#inputPassword1';
const emailTextSelector = '#emailHelp';
const passwordTextSelector = '#passwordHelp';

const MESSAGE_INVALID_EMAIL = 'Please enter a valid email!';
const MESSAGE_INVALID_PWD = 'Please enter a valid password (minimum 6 symbols)!';

const formDOM = document.querySelector(formSelector);
const inputEmailDOM = document.querySelector(emailSelector);
const inputPasswordDOM = document.querySelector(passwordSelector);
const emailTextDOM = document.querySelector(emailTextSelector);
const passwordTextDOM = document.querySelector(passwordTextSelector);

const emailRE = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

function checkForm(ev){
    ev.preventDefault();

    emailTextDOM.innerText = '';
    passwordTextDOM.innerText = '';

    const email = inputEmailDOM.value;
    const pwd = inputPasswordDOM.value;
    
    if(!emailRE.test(email)){
        emailTextDOM.innerText = MESSAGE_INVALID_EMAIL;
        return;
    }

    if(pwd.length < 6){
        passwordTextDOM.innerText = MESSAGE_INVALID_PWD;
        return;
    }

    console.log('your data is success', email, pwd);
}

formDOM.onsubmit = checkForm;