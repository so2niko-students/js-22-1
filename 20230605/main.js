const inpIPSelector = '#inp-ip';
const cookieWindowSelector = '.cookie';
const btnRejectSelector = '.btn-reject';
const btnAcceptSelector = '.btn-accept';

const inpIPDOM = document.querySelector(inpIPSelector);
const CookieWindowDOM = document.querySelector(cookieWindowSelector);
const btnRejectDOM = document.querySelector(btnRejectSelector);
const btnAcceptDOM = document.querySelector(btnAcceptSelector);

// inpIPDOM.onkeypress = (ev) => console.log('onkeypress', ev.target.value, ev);
// inpIPDOM.onkeyup = (ev) => console.log('onkeyup', ev.target.value, ev);
// inpIPDOM.onkeydow = (ev) => console.log('onkeydow', ev.target.value, ev);
// inpIPDOM.onchange = (ev) => console.log('onchange', ev.target.value, ev);
inpIPDOM.oninput = (ev) => {
    const val = inpIPDOM.value;
    const ipArr = val.split('.');
    const lastVal = Number(ipArr.slice(-1));
    // const lastVal = Number(ipArr.at(-1));
    if(lastVal >= 26 && ipArr.length < 4){
        inpIPDOM.value = `${ val }.`;
    }
}

const closeCookie = (ev) => {
    CookieWindowDOM.style.display = 'none';
    console.log(ev.target.innerText);
}

btnAcceptDOM.onclick = closeCookie;
btnRejectDOM.onclick = closeCookie;
