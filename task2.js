// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.addEventListener("DOMContentLoaded", () => {
    const userNameInput = document.getElementById('userNameInput');
    const getUserButton = document.getElementById('getUserButton');
    const userCity = document.getElementById('userCity');
  
    getUserButton.addEventListener('click', () => {
      const userName = userNameInput.value.trim();
      
      if (userName === '') {
        userCity.textContent = 'Введіть ім\'я користувача.';
        return;
      }
  
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          const user = users.find(u => u.name.toLowerCase() === userName.toLowerCase());
          if (user) {
            userCity.textContent = user.address.city;
          } else {
            userCity.textContent = 'Користувач не знайдений.';
          }
        })
        .catch(error => {
          console.error('Error fetching users:', error);
          userCity.textContent = 'Сталася помилка при отриманні даних.';
        });
    });
  });
  