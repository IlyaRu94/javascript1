let inputText = document.querySelector('input');
let dublicateFiled = document.querySelector('#duplicateField');
let submit = document.querySelector('button');
inputText.addEventListener('keyup', (event)=>{
    dublicateFiled.textContent = inputText.value;
});
submit.addEventListener('click', (ev)=>{
    console.log(inputText.value);
    dublicateFiled.textContent = '';
    inputText.value ='';
    ev.preventDefault();
});