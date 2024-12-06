const header = document.querySelector("header");


// Add event listener for scroll
window.addEventListener("scroll", function(){
    // Get the scroll position
    header.classList.toggle("sticky" , window.scrollY > 150);

});

let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.navlinks');

menu.onclick = () => {
    navlinks.classList.toggle('open');
    menu.classList.toggle('bx-x');
}

window.onscroll = () => {
    navlinks.classList.remove('open');
    menu.classList.remove('bx-x');
}