const menuIcon = document.getElementById('checkbox');
const MenuToggle = document.querySelector('.toggle');
const navBar = document.querySelector('.navbar');
let navLinks = document.querySelector('.nav-links');
const sliderbackgroundcontainer = document.querySelector('.slider-background-container');
const movieSlider = document.querySelector('.movie-preview-slider');
const portfolioWrapper = document.querySelector('.portfolio-wrapper');
const navBarMobileMenu = document.querySelector('.navMobileMenu');
const socialMediaLinks = document.querySelector('.socialMediaLinks');


var hidden = "hidden"

function CheckDeviceWidth() {
    let DeviceWidth = window.innerWidth;
    console.log(DeviceWidth);
    if (DeviceWidth < 767) {
        
        menuIcon.classList.remove(hidden);
        MenuToggle.classList.remove(hidden);
        
        navBar.style.width = (DeviceWidth-20) + 'px';
        
        navLinks = document.querySelector('.nav-links');
        navLinks.classList.add(hidden)
        
        navBar.appendChild(menuIcon);
        navBar.appendChild(MenuToggle);
        //sliderbackgroundcontainer.style.width = DeviceWidth + 'px';
    }
}

function menuHandler() {
    let checkbox = document.getElementById("checkbox");
      checkbox.addEventListener( "change", () => {
         if ( checkbox.checked ) {
            navBar.removeChild(navLinks);

            navBarMobileMenu.insertBefore(navLinks, navBarMobileMenu.firstChild);
            navLinks = document.querySelector('.nav-links');
            
            navLinks.classList.remove(hidden);
            
            movieSlider.classList.add(hidden);
            portfolioWrapper.classList.add(hidden);
            
            navBarMobileMenu.classList.remove(hidden);
        } else {
            navBarMobileMenu.classList.add(hidden)
            
            movieSlider.classList.remove(hidden);
            portfolioWrapper.classList.remove(hidden);
            
            navBar.appendChild(navLinks);
            navLinks = document.querySelector('.nav-links');
            navLinks.classList.add(hidden);
         }
      });
}

CheckDeviceWidth();
menuHandler();