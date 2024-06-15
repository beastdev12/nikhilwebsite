const sliderContainer = document.querySelector('.slider-container');
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');
const sliderItems = document.querySelectorAll('.slider-content');

var scrollVAL = [0, 700, 1600, 2500, 3400, 4300, 5200, 5902];
scrollVAL[sliderItems.length - 1] = sliderContainer.scrollLeftMax;
let count = 0;
let isScrolling = false;
let isFastScroll = false;

scrollLeftButton.addEventListener('click', scrollLeft);
scrollRightButton.addEventListener('click', scrollRight);

function scrollLeft() {
  if (count > 0) {
    count--;
  } else {
    count = sliderItems.length - 1;
  }
  const scrollAmount = scrollVAL[count];
  console.log(scrollVAL[count])
  animateScroll(scrollAmount);
}

function scrollRight() {
  if (count < sliderItems.length - 1) {
    count++;
  } else {
    count = 0;
  }
  const scrollAmount = scrollVAL[count];
  console.log(scrollVAL[count])
  animateScroll(scrollAmount);
}

function animateScroll(targetScroll) {
  if (!isScrolling) {
    const currentScroll = sliderContainer.scrollLeft;
    
    // Adjust these step values as needed for your desired scroll speed
    const normalScrollStep = 50; // Speed for normal scrolling
    const fastScrollStep = 100;   // Speed for fast scrolling
    
    const step = isFastScroll ? fastScrollStep : normalScrollStep;

    if (currentScroll < targetScroll) {
      isScrolling = true;
      requestAnimationFrame(function scrollRightStep() {
        if (sliderContainer.scrollLeft < targetScroll) {
          sliderContainer.scrollLeft += step;
          requestAnimationFrame(scrollRightStep);
        } else {
          isScrolling = false;
          isFastScroll = false; // Reset fast scroll flag
        }
      });
    } else if (currentScroll > targetScroll) {
      isScrolling = true;
      requestAnimationFrame(function scrollLeftStep() {
        if (sliderContainer.scrollLeft > targetScroll) {
          sliderContainer.scrollLeft -= step;
          requestAnimationFrame(scrollLeftStep);
        } else {
          isScrolling = false;
          isFastScroll = false; // Reset fast scroll flag
        }
      });
    } else {
      isFastScroll = true; // Set fast scroll flag for transitions
    }
  }
}
