// Function to preload images
function preloadImages(images, callback) {
    let loaded = 0;
    images.forEach((src) => {
        const img = new Image();
        img.onload = () => {
            loaded++;
            if (loaded === images.length) {
                callback();
            }
        };
        img.src = src;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // List of image URLs to preload 
    const imageUrls = ["assets/img/ordekh-swapna.webp"]; // Add your image URLs here

    preloadImages(imageUrls, function () {
        // After all images are preloaded
        const loader = document.querySelector(".loader");
        const spinner = document.querySelector(".spinner");
        const body = document.body;
        const content = document.querySelector('.page-content')

        // Remove 'inload' class from spinner
        setTimeout(function () {
            spinner.classList.remove("inload");
        }, 3000); //3000

        // Set a timeout to hide the loader and change classes
        setTimeout(function () {
            loader.classList.add("hidden");
            body.classList.remove("light");
            body.classList.add("dark");
            content.classList.remove("hidden")
        }, 4200); // 1.2 seconds (1200 milliseconds) +1200
    });
});

