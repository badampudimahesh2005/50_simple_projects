

const progress=document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');

let currentActive= 1;

next.addEventListener('click',()=>{
    currentActive++;

    if(currentActive > circles.length){
        currentActive=circles.length;
    }
    // console.log(currentActive); 

    update();
})

prev.addEventListener('click',()=>{
    currentActive--;

    if(currentActive<1){
        currentActive=1;
    }
    // console.log(currentActive); 

    update();

})

function update(){
    circles.forEach((circle,idx)=>{
        // if(idx+1 == currentActive)
        if(idx<currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    });

    //for progress bar
      const active=document.querySelectorAll('.active');
      progress.style.width=((active.length-1)/(circles.length-1))*100+"%";

      //for buttons to be disable and enable
      if(currentActive===1){
        prev.disabled=true;
      }
      else if(currentActive===circles.length){
        next.disabled=true;
      }else{
        prev.disabled=false;
        next.disabled=false;
      }
      
}


