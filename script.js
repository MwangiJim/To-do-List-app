let Inpkey = document.getElementById('InputKey');
let InpValue = document.getElementById('InputValue');
let Addbtn = document.getElementById('AddBtn');
let OutputSection = document.querySelector('.outputBox');


Addbtn.onclick = ()=>{
    const key = Inpkey.value;
    const value = InpValue.value;
   
    console.log(key,value);

    if(key && value){
        localStorage.setItem(key,value);
    }
    for(let i = 0;i<localStorage.length;i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        
        OutputSection.innerHTML += `<li>${key}:${value}<span onclick='deleteTask()'><i class="fas fa-trash"></i></span></li><br/>`;
    }
}

function deleteTask(){
    let columns = document.querySelector('li');

    columns.style.display = 'none';
}