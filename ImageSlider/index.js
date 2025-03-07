// Array of image URLs
const images = [
    "https://images.unsplash.com/photo-1741091475787-8cf779895451?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741070487520-907d1359cb95?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1740676176364-03eb7bdb2bb4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1740514531864-ea9cec02fbac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

// Function to show the current image
function showImage() {
    sliderImage.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.style.opacity = 1; // Fade in effect
    }, 300);
}

// Function for next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

// Function for previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

// Initialize slider with first image
showImage();
