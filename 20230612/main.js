//Робити запити
/*
1 - XMLHttpRequest - https://www.w3schools.com/js/js_ajax_http.asp
2 - fetch - вбудований асинхронний запит
3 - axios - бібліотека - https://axios-http.com/docs/intro


*/

const url = 'https://hp-api.onrender.com/api/characters';

fetch(url)
    .then(r => r.json())
    .then(t => console.log(t[22]));

// axios(url).then(d => console.log('axios', d));