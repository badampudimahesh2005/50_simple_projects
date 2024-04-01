const panels=document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeAvctiveClasses(panel);
        panel.classList.add('active');
    })
})


function removeAvctiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
} 