const fieldDOM = document.querySelector('.field');
const spanCount = document.querySelector('.count');
let count = 0;

//Створювати випадкові прямокутники по кліку на кнопці
document.querySelector('.btn-create').addEventListener('click', () => {
    createBlock();
    count++;
    showData(spanCount, count);
});

document.querySelector('.btn-random').addEventListener('click', () => {
    const rN = r();
    const rT = r(3, 10) * 1000;

    setTimeout(() => {
        for(let i = 0; i < rN; i += 1){
            createBlock();
        }
        count += rN;
        showData(spanCount, count);
    }, rT);

});

function createBlock(){
    const bl = document.createElement('div');

    const width = r(10, 100);
    const height = r(10, 100);
    const color = rColor();
    bl.style.width = `${ width }px`;
    bl.style.height = `${ height }px`;
    bl.style.backgroundColor = color;
    bl.addEventListener('click', handleDelete);

    fieldDOM.append(bl);
}

function showData(where, what){
    where.innerText = what;
}

function r(from = 0, to = 1000){
    return Math.floor(Math.random() * ( to - from + 1) + from);
}

function rColor(){
    return `rgb(${ r(0, 255) },${ r(0, 255) },${ r(0, 255) })`;
}

function handleDelete({ target }){
    target.remove();
    count--;
    showData(spanCount, count);
}

