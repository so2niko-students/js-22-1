const URL_HP = 'https://hp-api.onrender.com/api/characters';
const tableBodyDOM = document.querySelector('#hp-characters-table-body');
const tableFavDOM = document.querySelector('#hp-characters-table-fav');
const selectHouses = document.querySelector('#sel_houses');
const headerName = document.querySelector('.header_name');
let isNameASCsort = false;
let DATA = null;
let FILTERED_DATA = null;
const FAVOURITES = new Set();

tableBodyDOM.addEventListener('click', handleAddToFav);
tableFavDOM.addEventListener('click', handleRemoveFromFav);

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

function renderTable(d, table = tableBodyDOM){
    console.log(d);
    const rows = d.map(getCharacterRow);
    const charactersRowsString = rows.join('');
    table.innerHTML = charactersRowsString;
}

function getCharacterRow({ id, name, house, gender, actor, wizard }){
    return `<tr>
    <td>${ name }</td>
    <td>${ gender }</td>
    <td>${ house }</td>
    <td>${ actor }</td>
    <td>${ Boolean(wizard) ? '🧙' : 'other' }</td>
    <td><button data-btn="add-to-fav" data-id="${ id }">+</button></td>
    </tr>`;
}

function handleAddToFav({ target }){
    if(target.dataset.btn !== 'add-to-fav') return false;//Перевірка кліку по кнопці
    const searchedID = target.dataset.id;
    let character;
    for(let i = 0; i < DATA.length; i += 1){
        if(DATA[i].id === searchedID){
            character = DATA[i];
            break;
        }
    }

    // const character = DATA.find(({ id }) => id === searchedID);

   FAVOURITES.add(character);
   
   console.log(FAVOURITES);

   renderTable([...FAVOURITES], tableFavDOM);
    
}

function handleRemoveFromFav({ target }){
    if(target.dataset.btn !== 'add-to-fav') return false;//Перевірка кліку по кнопці
    const searchedID = target.dataset.id;
    const el = [...FAVOURITES].find(({ id }) => id === searchedID);
    FAVOURITES.delete(el);

    renderTable([...FAVOURITES], tableFavDOM);
}