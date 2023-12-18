let form =document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();


    let height=parseInt(document.querySelector('#height').value);

    let weight=parseInt(document.querySelector('#weight').value);

    let result=document.querySelector('#result');


    // let weightGuide=document.querySelector('.for-guide');


if(height==='' || height<0 || isNaN(height)){
    result.innerHTML=`Please Give a valid Height`;
    result.style.textAlign="center" 
}


else if(weight==="" || weight<0 || isNaN(weight)){
    result.innerHTML=`Please Give a valid Weight`;
    result.style.textAlign="center"
    result.style.color="blue"
    
}

else{
    let bmi=(weight/((height*height)/10000)).toFixed(2);

    result.innerHTML=`<span>Result : ${bmi} </span> `

    result.style.textAlign="center"
    
}

})



