let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let convert = document.getElementById('convert');




convert.addEventListener('click',function(){

        seconds.textContent = parseInt(hours.value)*3600 + parseInt(minutes.value)*60 + 's';
        seconds.classList.add('seconds');


    
})
