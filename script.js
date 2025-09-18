const cardSlider = document.getElementById('cardSlider');
const slideIndicators = document.querySelectorAll('.carousel-indicators-vertical button');

cardSlider.addEventListener('slide.bs.carousel', event => {

    slideIndicators.forEach(indicator => {
        indicator.classList.remove('active');
    });

    slideIndicators[event.to].classList.add('active');
});
