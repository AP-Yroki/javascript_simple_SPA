function route() {
  let content = document.getElementById('content');
  let hash = window.location.hash;

  if (hash === '#/register') {
    content.innerHTML = `
      <h1>Регистрация</h1>
      <input type="text" id="reg-username" placeholder="Имя пользователя" required><br>
      <input type="password" id="reg-password" placeholder="Пароль" required><br>
      <button onclick="register()">Зарегистрироваться</button>
    `;
  } else if (hash === '#/login') {
    content.innerHTML = `
      <h1>Вход</h1>
      <input type="text" id="login-username" placeholder="Имя пользователя" required><br>
      <input type="password" id="login-password" placeholder="Пароль" required><br>
      <button onclick="login()">Войти</button>
    `;
  } else if (hash === '#/posts') {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        content.innerHTML = '<h1>Посты</h1>' + posts.map(post => `
        <div class="wrap">
        <h3>Заголовок: ${post.title}</h3>
        <p>Содержание: ${post.body}</p>
        </div>
        `).join('');
      });
  } else if (hash === '#/comments') {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(comments => {
        content.innerHTML = '<h1>Коментарии</h1>' + comments.map(comment => `
        <div class="wrap">
          <h3>Имя: ${comment.name}</h3>
          <p>Email: ${comment.email}</p>
          <p>Содержание: ${comment.body}</p>
        </div>
        `).join('');
      });
  } else if (hash === '#/albums') {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albums => {
        content.innerHTML = '<h1>Альбомы</h1>' + albums.map(album => `
        <div class="wrap">
          <h3>Заголовок: ${album.title}</h3>
        </div>
        `).join('');
      });
  } else if (hash === '#/photos') {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(photos => {
        content.innerHTML = '<h1>Фотографии</h1>' + photos.map(photo => `
        <div class="wrap">
          <h3>Заголовок: ${photo.title}</h3>
          <p>Ссылка: ${photo.url}</p>
          <p>Ссылка:${photo.thumbnailUrl}</p>
        </div>
        `).join('');
      });
  } else if (hash === '#/todos') {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        content.innerHTML = '<h1>Задачи</h1>' + todos.map(todo => `
        <div class="wrap">
        <h3>Заголовок: ${todo.title}</h3>
        <p>Готовность: ${todo.completed}</p></div>
        `).join('');
      });
  } else if (hash === '#/users') {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        let usersHtml = users.map(user => `
          <div class="wrap">
            <h3>${user.name} (${user.username})</h3>
            <p>Email: ${user.email}</p>
            <p>Адрес: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p>Телефон: ${user.phone}</p>
            <p>Веб-сайт: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p>Компания: ${user.company.name}</p>
            <p>Девиз компании: "${user.company.catchPhrase}"</p>
            <p>Сфера деятельности: ${user.company.bs}</p>
          </div>
        `).join('');
        document.getElementById('content').innerHTML = `<h1>Пользователи</h1>${usersHtml}`;
      });
  } 
   else {
    content.innerHTML = '<h1>Главная страница</h1>';
  }
}

function register() {
  let username = document.getElementById('reg-username').value;
  let password = document.getElementById('reg-password').value;
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  alert("Регистрация успешна!");
}

function login() {
  let username = document.getElementById('login-username').value;
  let password = document.getElementById('login-password').value;
  if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
    alert("Вы успешно вошли!");
  } else {
    alert("Ошибка, неверное имя пользователя или пароль");
  }
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);

