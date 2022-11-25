let text = document.querySelector('a');
text.addEventListener('click',
(ev)=>{
    text.textContent = prompt('Для изменения текста ссылки - напишите его здесь');
    ev.preventDefault();
})