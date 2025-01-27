window.onload = function () {
    // Selecting the necessary elements
    const track = document.querySelector('.banner_track');
    const slides = document.querySelectorAll('.banner_block');
    const indicators = document.querySelectorAll('.org_circle');
    const leftBtn = document.getElementById('left');
    const rightBtn = document.getElementById('right');

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * slides[0].offsetWidth;
        track.style.transform = `translateX(${offset}px)`;

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('selected', i === currentIndex);
        });
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function movePrev() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i; 
            updateCarousel(); 
        });
    });

    rightBtn.addEventListener('click', moveNext);
    leftBtn.addEventListener('click', movePrev);


    updateCarousel();
};
