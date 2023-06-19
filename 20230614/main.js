const URL_HP = 'https://hp-api.onrender.com/api/characters';
const tableBodyDOM = document.querySelector('#hp-characters-table-body');
const selectHouses = document.querySelector('#sel_houses');
const headerName = document.querySelector('.header_name');
let isNameASCsort = false;
let DATA = null;
let FILTERED_DATA = null;

selectHouses.addEventListener('input', (ev) => {
    const house = ev.target.value;

    if(house === 'All'){
        FILTERED_DATA = DATA;
        renderTable(DATA);
        return;  
    } 
    const choice = house === 'None' ? '' : house;
    const filteredArr = DATA.filter(ch => ch.house === choice);
    FILTERED_DATA = filteredArr;
    renderTable(filteredArr);
});

headerName.addEventListener('click', () => {
    isNameASCsort = !isNameASCsort;
    const sortASC = (a, b) => a.name > b.name ? 1 : -1;
    const sortDESC = (a, b) => b.name > a.name ? 1 : -1;

    const sortF = isNameASCsort ? sortASC : sortDESC;

    FILTERED_DATA.sort(sortF);
    
    renderTable(FILTERED_DATA);
});

fetch(URL_HP)
    .then(r => r.json())
    .then((d) => {
        DATA = d;
        FILTERED_DATA = [...d];
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

