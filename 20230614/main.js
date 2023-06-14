const URL_HP = 'https://hp-api.onrender.com/api/characters';
const tableBodyDOM = document.querySelector('#hp-characters-table-body');
const filtersBtns = document.querySelectorAll('.btn-filters');
let DATA = null;

filtersBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.dataset.facultet);

        if(btn.dataset.filter === 'All'){
            renderTable(DATA);
            return;  
        } 
        const choice = btn.dataset.filter === 'None' ? '' : btn.dataset.filter;
        const filteredArr = DATA.filter(ch => ch.house === choice);
        renderTable(filteredArr);

        // Додаткове
        btn.innerText = `${ btn.dataset.filter } ${ filteredArr.length }`;
        // Кінець додаткового
        // console.log(DATA);
    });
});
 
fetch(URL_HP)
    .then(r => r.json())
    .then((d) => {
        DATA = d;
        renderTable(DATA);
    });

function renderTable(d){
    const rows = d.map(getCharacterRow);
    const charactersRowsString = rows.join('');
    tableBodyDOM.innerHTML = charactersRowsString;
}

function getCharacterRow({ name, house, gender, actor, wizard }){
    return `<tr>
    <td>${ name }</td>
    <td>${ gender }</td>
    <td>${ house }</td>
    <td>${ actor }</td>
    <td>${ Boolean(wizard) ? '🧙' : 'other' }</td>
    </tr>`;
}

