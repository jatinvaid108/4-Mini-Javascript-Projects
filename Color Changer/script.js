const buttons=document.querySelectorAll(".button");
const conatiner=document.querySelector(".container");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='gray'){
            conatiner.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='red'){
            conatiner.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='blue'){
            conatiner.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white'){
            conatiner.style.backgroundColor=e.target.id;
        }

    });
});