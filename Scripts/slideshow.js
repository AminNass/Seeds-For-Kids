let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // resets all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // move to the next slide
    currentSlide++;
    
    // Reset to first slide if at the end
    if (currentSlide > slides.length) {
        currentSlide = 1;
    }
    
    // Add active class to the current slide
    slides[currentSlide - 1].classList.add('active');
    
    // Change image every 9 seconds
    setTimeout(showSlides, 15000);
}

// Start the slideshow
showSlides();