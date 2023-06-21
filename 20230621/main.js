const fieldDOM = document.querySelector('.field');

//Створювати випадкові прямокутники по кліку на кнопці
document.querySelector('.btn-create').addEventListener('click', () => {
    const bl = document.createElement('div');

    const width = r(10, 100);
    const height = r(10, 100);
    const color = rColor();
    bl.style.width = `${ width }px`;
    bl.style.height = `${ height }px`;
    bl.style.backgroundColor = color;
    bl.addEventListener('click', handleDelete);

    fieldDOM.append(bl);
});

function r(from = 0, to = 1000){
    return Math.floor(Math.random() * ( to - from + 1) + from);
}

function rColor(){
    return `rgb(${ r(0, 255) },${ r(0, 255) },${ r(0, 255) })`;
}

function handleDelete({ target }){
    console.dir(target);
    target.remove();
}