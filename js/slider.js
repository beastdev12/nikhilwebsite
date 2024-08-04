function CheckDeviceWidth(width) {
  return window.innerWidth <= 767;
}

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselContent = document.querySelector('.carousel-content');
    const items = carouselContent.querySelectorAll('.carousel-item');
    const previousButton = document.querySelector('.carousel-previous');
    const nextButton = document.querySelector('.carousel-next');
  
    let currentIndex = 0;
    const totalItems = items.length;  
    const autoplaySpeed = 1 * 6 * 1000; // min : s : ms
    const offsetStart = CheckDeviceWidth() ? -5 : -7.5;
    const offsetsSkip = 50;
  
    function addClass(item) {
      item.style.minWidth = `50%`
      item.classList.add('active');
      item.querySelector('.play-button').style.height = `64px`;
      item.querySelector('.play-button').style.width = `64px`;
      item.querySelector('.under-text').style.opacity = 1;
    }
    
    function removeClass(item) {
      item.querySelector('.under-text').style.opacity = 0;
      item.querySelector('.play-button').style.height = `12px`;
      item.querySelector('.play-button').style.width = `12px`;
      item.classList.remove('active');
    }

    function calculateOffset(index) {
      return offsetStart - offsetsSkip * index;
    }

    function showItem(index) {
        const offset = calculateOffset(index);
        carouselContent.style.transform = `translateX(${offset}%)`;
        if (items[index].hasAttribute('dataUrl')) {
            carousel.style.opacity = `100%`;
            carousel.style.backgroundImage = `url("${items  [index].getAttribute('dataUrl')}")`;
        }
        else {
            carousel.style.opacity = `0%`;
            setTimeout(() => {
                carousel.style.backgroundImage = `none`;
                carousel.style.opacity = `100%`;
            }, 500);
          }
      addClass(items[index]);
    }
  
    function showNextItem() {
        removeClass(items[currentIndex]);
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }
    
    function showPreviousItem() {
        removeClass(items[currentIndex]);
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    }
  
    previousButton.addEventListener('click', showPreviousItem);
    nextButton.addEventListener('click', showNextItem);
  
    // Autoplay functionality  //removed for now
    //setInterval(showNextItem, autoplaySpeed);
  
    // Initial display
    
    showItem(currentIndex);
  });

  


