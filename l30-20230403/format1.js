const request = async () => {
    const url = 'https://randomuser.me/api/?results=100';
    const res = await fetch(url);
    const data = await res.json();
    const usersHTML = getUsersHTML(data.results);
    renderUsers(usersHTML);
}

const renderUsers = usersHTML => {
    const usersDOM = document.querySelector('.users');
    usersDOM.innerHTML = usersHTML;
}

const getUsersHTML = users => users.map(user => (`<div class="card mb-3" style="width: 400px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${ user.picture.large }" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${ user.name.title } ${ user.name.first } ${ user.name.last }</h5>
      <p class="card-text">${ user.location.country } : ${ user.location.city }</p>
      <p class="card-text">${ user.phone } / ${ user.cell }</p>
      <p class="card-text"><small class="text-body-secondary">${ user.email }</small></p>
    </div>
  </div>
</div>
</div>`)).join('');

request();