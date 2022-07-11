fetch('http://puzzle.mead.io/puzzle').then((res)=>{
    res.json().then((data)=>{
        console.log(data)
    })
})


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msg1=document.querySelector('#msg1');
const msg2=document.querySelector('#msg2');


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    msg1.textContent= 'Loading.....'
    msg2.textContent= ''

    fetch('http://puzzle.mead.io/puzzle').then((res)=>{
    res.json().then((data)=>{

        if(1){
            msg1.textContent= ''
    
            msg2.textContent= 'Location not Found'
    
        }
    })
})
    
    const location = search.value;
    console.log(location)
})