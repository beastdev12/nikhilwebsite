const menuIcon = document.getElementById('checkbox');
const MenuToggle = document.querySelector('.toggle');
const navBar = document.querySelector('.navbar');
let navLinks = document.querySelector('.nav-links');


checkbox.addEventListener( "change", () => {
    if ( menuIcon.checked ) {
        navLinks.style.display = 'flex';
        setTimeout (() => {
            navLinks.style.opacity = 1;
        }, 100)
    } else {
        navLinks.style.opacity = 0 ;
        
        setTimeout (() => {
            navLinks.style.display = 'none';
        }, 600)
    }
});
