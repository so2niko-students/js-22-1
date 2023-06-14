const URL_HP = 'https://hp-api.onrender.com/api/characters';
const tableBodyDOM = document.querySelector('#hp-characters-table-body');
 
fetch(URL_HP)
    .then(r => r.json())
    .then(renderTable);

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