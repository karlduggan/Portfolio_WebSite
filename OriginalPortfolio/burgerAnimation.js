// Hamburger menu animation
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// Toggle Button 
var toggle = false;
function toggleBtn(){
    if (toggle == false) {
        document.getElementById("dropdown-menu").className = "dropdown-menu-open";
        toggle = true;
    } else {
        document.getElementById("dropdown-menu").className = "dropdown-menu-closed";
        toggle = false;
    }
    console.log(toggle)
}

// Reset the burger graphic once selected 

homebtn = document.querySelector(".drop-homebtn");
homebtn.addEventListener('click', function(){
    menuBtn.classList.remove('open');
    menuOpen = false;
});

aboutbtn = document.querySelector(".drop-aboutbtn");
aboutbtn.addEventListener('click', function(){
    menuBtn.classList.remove('open');
    menuOpen = false;
});

portbtn = document.querySelector(".drop-portbtn");
portbtn.addEventListener('click', function(){
    menuBtn.classList.remove('open');
    menuOpen = false;
});

contactbtn = document.querySelector(".drop-contactbtn");
contactbtn.addEventListener('click', function(){
    menuBtn.classList.remove('open');
    menuOpen = false;
});