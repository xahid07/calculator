var allButton=document.querySelectorAll('button');
var input =document.querySelector('.display input');

allButton.forEach(elem=>elem.addEventListener('click',()=>{
    if(elem.textContent==='AC'){
        input.value='0';
    }
    else if(elem.textContent==='='){
        input.value=eval(input.value);
    }
    else{
        input.value+=elem.textContent;
    }
}))
