document.querySelector('#consoleLog').addEventListener('click', 
  (event) => {
    alert('Метод для вывода сообщения в веб-консоль.');
});
document.querySelectorAll('code')[0].textContent = 'Пример использования команды console.log';
document.querySelector('#alert').addEventListener('click', 
  (event) => {
    alert('Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK.');
});
document.querySelectorAll('code')[1].textContent = 'Пример использования команды alert()';
document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    alert('Отображает диалоговое окно с запросом на ввод текста.');
});
document.querySelectorAll('code')[2].textContent = 'Пример использования команды prompt()';