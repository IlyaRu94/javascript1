const Light_green = document.querySelector('#Light_green');
const Light_yellow = document.querySelector('#Light_yellow');
const Light_red = document.querySelector('#Light_red');

function make() {
        Light_red.removeEventListener('click', make);
        Light_yellow.removeEventListener('click', make);
        Light_green.removeEventListener('click', make);
        Light_red.style.background = ('red');
    setTimeout(function(){
        Light_yellow.style.background = ('yellow');
        Light_red.style.background='';
    },500);
    setTimeout(function(){
        Light_green.style.background = ('green');
        Light_yellow.style.background='';
    },1000);
    setTimeout(function(){
        Light_green.style.background='';
        Light_green.addEventListener('click', make);
        Light_yellow.addEventListener('click', make);
        Light_red.addEventListener('click', make);        
    },1500);
}



Light_red.addEventListener('click', make);
Light_yellow.addEventListener('click', make);
Light_green.addEventListener('click', make);