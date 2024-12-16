// Hamburger Menu Toggle Functionality
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
    "COMPUTER ENGINEER"
];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    // Button click event listeners for filtering slides
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Filter functionality for the buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.dataset.filter; // Get the filter value (e.g., 'all', 'hardware', 'software')
            
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            this.classList.add('active');

            // Show or hide slides based on the filter value
            const slides = document.querySelectorAll('.swiper-slide');
            
            slides.forEach(slide => {
                const slideCategory = slide.dataset.category; // Get the category of the slide (hardware/software)

                // Show the slide if it matches the filter, or show all slides if 'all' is selected
                if (filterValue === 'all' || slideCategory === filterValue) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });

            // Force Swiper to update the layout and correctly handle visibility of slides
            swiper.update();
            swiper.slideTo(0, 0); // Reset slide index to the first slide after filtering
        });
    });
});

// Select the .image element
const imageElement = document.querySelector('.main-container .image');

// Create an audio object
const audio = new Audio('E:/Downloads/Portfolio/Web/files/audio/music.mp3'); // Replace with your actual audio file path

// Play audio on hover
imageElement.addEventListener('mouseenter', () => {
    audio.currentTime = 0; // Reset to the beginning
    audio.play();
});

// Pause audio when hover ends
imageElement.addEventListener('mouseleave', () => {
    audio.pause();
});



// Start Typewriter Effect when the page loads
window.onload = typeWriter;
