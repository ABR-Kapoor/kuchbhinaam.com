burger= document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
rightnav=document.querySelector('.rightnav');



burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp')
    rightnav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
})