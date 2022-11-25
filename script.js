document.querySelector('#testTextField').addEventListener('click', 
  (event) => {
    this.textContent = 'Это событие: ' + event.type;
})