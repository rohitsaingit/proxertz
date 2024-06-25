document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    };

    // Animate the counter from 0 to the target number
    const animateCounter = (elementId, targetNumber) => {
        let currentNumber = 0;
        const increment = targetNumber / 100; // Adjust the increment value for smoother animation

        const updateCounter = () => {
            currentNumber += increment;
            document.getElementById(elementId).textContent = Math.floor(currentNumber);

            if (currentNumber < targetNumber) {
                requestAnimationFrame(updateCounter);
            } else {
                document.getElementById(elementId).textContent = targetNumber;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    // Initialize typed.js for dynamic text typing animation
    const initializeTypedJs = () => {
        new Typed(".role", {
            strings: [
                "VIDEO EDITOR ?",
                "YOUTUBE PROMOTION ?",
                "VIDEOGRAPHER ?",
                "ADVERTISEMENT ?",
                "MARKETING ?"
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000
        });
    };

    // Initialize all functions
    const initialize = () => {
        toggleMobileMenu();
        animateCounter('years-counter', 5);
        animateCounter('videos-counter', 300);
        animateCounter('views-counter', 150);
        initializeTypedJs();
    };

    // Call the initialize function on DOMContentLoaded
    initialize();
});

// Background images array
const bgImages = [
    '/static/asset/hero_bg1.jpg',
    '/static/asset/hero_bg2.jpg',
    '/static/asset/hero_bg3.jpg',
    '/static/asset/hero_bg4.jpg'
];

let currentImageIndex = 0;
const heroSection = document.getElementById('hero-section');

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % bgImages.length;
    heroSection.style.backgroundImage = `url(${bgImages[currentImageIndex]})`;
}

// Change background image every 5 seconds
setInterval(changeBackgroundImage, 5000);

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in');
    
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

document.addEventListener('DOMContentLoaded', function() {
    function animateCounter(id, start, end, duration) {
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        const counter = document.getElementById(id);

        const timer = setInterval(() => {
            current += increment;
            counter.textContent = `+${current}`;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    animateCounter("experienceCounter", 0, 5, 2000);
    animateCounter("projectsCounter", 0, 100, 2000);
    animateCounter("collaborationsCounter", 0, 30, 2000);
});

const btns = document.querySelectorAll(".btn");
const slideRow = document.getElementById("slide-row");
const main = document.querySelector("main");

let currentIndex = 0;
let startX;
let isDragging = false;

function updateSlide() {
  const mainWidth = main.offsetWidth;
  const translateValue = currentIndex * -mainWidth;
  slideRow.style.transform = `translateX(${translateValue}px)`;

  btns.forEach((btn, index) => {
    btn.classList.toggle("active", index === currentIndex);
  });
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

window.addEventListener("resize", () => {
  updateSlide();
});

main.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

main.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diffX = startX - currentX;

  if (diffX > 50) {
    currentIndex = (currentIndex + 1) % btns.length;
    updateSlide();
    isDragging = false;
  } else if (diffX < -50) {
    currentIndex = (currentIndex - 1 + btns.length) % btns.length;
    updateSlide();
    isDragging = false;
  }
});

main.addEventListener("touchend", () => {
  isDragging = false;
});

function autoScroll() {
  currentIndex = (currentIndex + 1) % btns.length;
  updateSlide();
}

let autoScrollInterval = setInterval(autoScroll, 5000);

main.addEventListener("mouseover", () => {
  clearInterval(autoScrollInterval);
});

main.addEventListener("mouseout", () => {
  autoScrollInterval = setInterval(autoScroll, 5000);
});


const getInTouchBtn = document.getElementById('getInTouchBtn');
const popupDialog = document.getElementById('popupDialog');
const closePopup = document.getElementById('closePopup');

getInTouchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupDialog.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
    popupDialog.classList.add('hidden');
});

 document.addEventListener('DOMContentLoaded', function () {
    // Initialize Tilt.js on elements with the class 'card_team'
    const cards = document.querySelectorAll('.card_team');
    cards.forEach(card => {
      VanillaTilt.init(card, {
        max: 25,         // Maximum tilt angle
        speed: 400,      // Speed of the tilt effect
        glare: true,     // Enables glare effect
        maxGlare: 1,     // Maximum glare opacity
        perspective: 1000, // Perspective for the tilt effect
        gyroscope: true  // Enables gyroscope support
      });
    });
  });

// project work showcase effects
//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){a
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
        