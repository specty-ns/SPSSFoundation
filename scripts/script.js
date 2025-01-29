// window.onload = function () {
//     const track = document.querySelector('.banner_track');
//     const slides = document.querySelectorAll('.banner_block');
//     const leftBtn = document.getElementById('left');
//     const rightBtn = document.getElementById('right');

//     let currentIndex = 0;
//     const visibleItems = 3;
//     const totalSlides = slides.length;

//     function updateCarousel() {
//         const offset = -currentIndex * (slides[0].offsetWidth);
//         track.style.transform = `translateX(${offset}px)`;
//     }

//     function moveNext() {
//         if (currentIndex + visibleItems < totalSlides) {
//             currentIndex += visibleItems;
//         } else {
//             currentIndex = 0;
//         }
//         updateCarousel();
//     }

//     function movePrev() {
//         if (currentIndex - visibleItems >= 0) {
//             currentIndex -= visibleItems;
//         } else {
//             currentIndex = totalSlides - visibleItems;
//         }
//         updateCarousel();
//     }

//     rightBtn.addEventListener('click', moveNext);
//     leftBtn.addEventListener('click', movePrev);

//     setInterval(moveNext, 3000);
// };
