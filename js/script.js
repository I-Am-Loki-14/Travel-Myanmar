// Handle Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle 'active' class to show/hide menu
    navLinks.classList.toggle('active');
});

// Home Section Background Image Carousel Logic
const homeSection = document.querySelector('.home');
const images = [
    'image/bg1.jpg', 
    'image/bg2.jpg',
    'image/bg3.jpg'
];
let currentImgIndex = 0;

// Function to rotate background images
function changeBg() {
    if (homeSection) {
        homeSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${images[currentImgIndex]}')`;
        currentImgIndex = (currentImgIndex + 1) % images.length;
    }
}

// Initialize home carousel
setInterval(changeBg, 5000);
changeBg();

// Destination Carousel Navigation Logic
const destinationCarousel = document.querySelector('.destination-image-carousel');
const destinationContent = document.querySelector('.destination-content');

if (destinationCarousel && destinationContent) {
    const carouselItems = destinationCarousel.querySelectorAll('.carousel-item');
    const prevBtn = destinationCarousel.querySelector('.prev');
    const nextBtn = destinationCarousel.querySelector('.next');
    let currentDestinationIndex = 0;

    // Show specific image and update text based on index
    function showDestinationItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });

        // Text content mapping for each slide to match the images
        const content = [
            {
                h2: "ရွှေရောင်ဆည်းဆာနှင့် ပုဂံကဗျာ",
                p: "ရှေးဟောင်းစေတီပုထိုးများစွာ ကိန်းဝပ်စိုးစံရာ ပုဂံမြေပြင်ထက်သို့ ညို့မှိုင်းတဲ့ နေဝင်ဆည်းဆာ အလင်းတန်းများ ဖြာကျနေသည့် မြင်ကွင်းဖြစ်ပါသည်။ စိမ်းစိုနေသော သစ်တောအုပ်များနှင့် မြူခိုးဝေဝေကြားတွင် ထည်ဝါစွာ မတ်တပ်ရပ်နေသည့် ဘုရားပုထိုးများက ရာစုနှစ်များစွာက အတိတ်သမိုင်းကြောင်းကို ဖော်ပြနေပါတယ်။"
            },
            {
                h2: "ပုဂံမြို့ဟောင်း၏ အလှတရား",
                p: "ပုဂံသည် မြန်မာနိုင်ငံ၏ အဓိက ခရီးသွားဆွဲဆောင်မှုရှိသော နေရာဖြစ်ပြီး ကမ္ဘာ့အမွေအနှစ်စာရင်းဝင် ဒေသတစ်ခုဖြစ်ပါသည်။ ရှေးဟောင်းအနုပညာလက်ရာများကို လေ့လာနိုင်ပါသည်။"
            },
            {
                h2: "သမိုင်းဝင် စေတီပုထိုးများ",
                p: "ရာစုနှစ်ပေါင်းများစွာကတည်းက တည်ထားကိုးကွယ်ခဲ့သော ဘုရားပုထိုးများက ပုဂံရှုခင်းကို ပိုမိုပြည့်စုံစေပါသည်။ သမိုင်းကြောင်းနှင့် ဗိသုကာပညာရပ်များကို တွေ့ရှိနိုင်ပါသည်။"
            },
            {
                h2: "ငပလီ ကမ်းခြေ အလှ",
                p: "ကြည်လင်ပြာလဲ့သော ရေပြင်နှင့် လှပသော သဲသောင်ပြင်တို့ ပေါင်းစပ်ထားသော ငပလီကမ်းခြေသည် အပန်းဖြေရန် အကောင်းဆုံးနေရာတစ်ခု ဖြစ်ပါသည်။"
            },
            {
                h2: "အင်းလေးကန် ဒေသ",
                p: "ရှမ်းပြည်နယ်၏ အလှတရားတစ်ခုဖြစ်သော အင်းလေးကန်သည် ရိုးရာဓလေ့များနှင့် သဘာဝအလှတရားများ ပြည့်နှက်နေသော နေရာတစ်ခုဖြစ်ပါသည်။"
            }
        ];

        if (content[index]) {
            destinationContent.querySelector('h2').textContent = content[index].h2;
            destinationContent.querySelector('p').textContent = content[index].p;
        }
    }

    // Prev/Next Event Listeners
    prevBtn.addEventListener('click', () => {
        currentDestinationIndex = (currentDestinationIndex - 1 + carouselItems.length) % carouselItems.length;
        showDestinationItem(currentDestinationIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentDestinationIndex = (currentDestinationIndex + 1) % carouselItems.length;
        showDestinationItem(currentDestinationIndex);
    });
}

// Gallery Lightbox Logic
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const closeLightbox = document.querySelector('.close-lightbox');

// Open Lightbox when any gallery image is clicked
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src; // Set modal image to clicked image source
        lightbox.classList.add('active'); // Show the modal
    });
});

// Close Lightbox when clicking the 'X' button
closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Close Lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Contact Section Auto-Sliding Image logic
const contactSlides = document.querySelectorAll('.contact-slide');
let currentContactSlide = 0;

function autoSlideContact() {
    if (contactSlides.length > 0) {
        // Cycle through images by toggling the active class
        contactSlides[currentContactSlide].classList.remove('active');
        currentContactSlide = (currentContactSlide + 1) % contactSlides.length;
        contactSlides[currentContactSlide].classList.add('active');
    }
}

// Start the auto-slider every 3 seconds
setInterval(autoSlideContact, 3000);