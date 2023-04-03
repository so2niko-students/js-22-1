//AJAX - Assync. JS And XML

//JSON - JS Object Notation {}, [], [{}]

//XMLHttpRequest 

//fetch - функція, яка повертає специфічний об'єкт типу Promise
async function simpleReq(url, type = 'text'){
    console.log('one');
    console.log(2);
    // fetch(url).then(r => r.text()).then(d => console.log(d));
    const req = await fetch(url);
    console.log(req);
    let data;
    if(type === 'text'){
        data = await req.text();
    }
    if(type === 'json'){
        data = await req.json();
    }
    console.log(data);
    console.log('three');
}

const linksURL = '/links.md';
const randomuserURL = 'https://randomuser.me/api/';
simpleReq(randomuserURL, 'json');

//axios