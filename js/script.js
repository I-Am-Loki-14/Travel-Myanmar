const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Home background carousel
const homeSection = document.querySelector('.home');
const images = [
    'image/bg1.jpg', 
    'image/bg2.jpg',
    'image/bg3.jpg'
];
let currentImgIndex = 0;

function changeBg() {
    if (homeSection) {
        homeSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${images[currentImgIndex]}')`;
        currentImgIndex = (currentImgIndex + 1) % images.length;
    }
}

setInterval(changeBg, 5000);
changeBg();

// Destination carousel
const destinationCarousel = document.querySelector('.destination-image-carousel');
if (destinationCarousel) {
    const carouselItems = destinationCarousel.querySelectorAll('.carousel-item');
    const prevBtn = destinationCarousel.querySelector('.prev');
    const nextBtn = destinationCarousel.querySelector('.next');
    let currentDestinationIndex = 0;

    function showDestinationItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentDestinationIndex = (currentDestinationIndex - 1 + carouselItems.length) % carouselItems.length;
        showDestinationItem(currentDestinationIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentDestinationIndex = (currentDestinationIndex + 1) % carouselItems.length;
        showDestinationItem(currentDestinationIndex);
    });
}