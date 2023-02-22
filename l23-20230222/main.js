const btn = document.querySelector('.btn-hill');
const textDiv = document.querySelector('.ghosts');
const textClock = document.querySelector('.clock');

btn.onclick = () => {
    const r = Math.floor(Math.random() * Date.now()).toString(35);
    textDiv.innerText = r;
}

let start = 0;
setInterval(() => {
    start++;
    textClock.innerText = `${ start } --- ${ Date.now() }`;
}, 1000);


/*
Створити Таймер.
При кліці на кнопку "Старт" запускається таймер. Кнопка перетворюється на кнопку "Стоп". При кліку на кнопку "Стоп" вона перетворюється на "Старт". На екран показується час.

*./