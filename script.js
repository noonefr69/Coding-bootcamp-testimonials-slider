let slider = document.getElementsByClassName('aks');
let prev = document.getElementById("prevBottum");
let next = document.getElementById('nextBottum');
let n = 0;
const para = document.getElementById('paraaa');
const aks1 = document.getElementById('aks1');
const aks2 = document.getElementById('aks2');
const namew = document.getElementById('esm');
const job = document.getElementById('job');

function displayNone(){
    for(let i = 0; i < slider.length; i++){
        slider[i].style.display = 'none';
    }
};

function noActive(){
    for(let i = 0; i < slider.length; i++){
        slider[i].classList.remove('show1');
    }
};

next.addEventListener('click' , () =>{
    n++;
    if(n > slider.length-1){
        n = 0;
    }

    displayNone();
    noActive();
    slider[n].style.display = "block";
    slider[n].classList.add('show1');

    if(aks1.style.display === "block"){
        para.innerHTML = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
        namew.innerHTML = "Tanya Sinclair";
        job.innerHTML = "UX Engineer";
    }
    if(aks2.style.display === "block"){
        para.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
        namew.innerHTML = "John Tarkpor";
        job.innerHTML = "Junior Front-end Developer";
    }
});


prev.addEventListener('click' , () =>{
    n--;
    if(n < 0){
        n = slider.length-1;
    }

    displayNone();
    noActive();
    slider[n].style.display = "block";
    slider[n].classList.add('show1');

    if(aks1.style.display === "block"){
        para.innerHTML = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
        namew.innerHTML = "Tanya Sinclair";
        job.innerHTML = "UX Engineer";
    }
    if(aks2.style.display === "block"){
        para.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
        namew.innerHTML = "John Tarkpor";
        job.innerHTML = "Junior Front-end Developer";
    }
});