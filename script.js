const cardSlider = document.getElementById('cardSlider');
const slideIndicators = document.querySelectorAll('.carousel-indicators-vertical button');

cardSlider.addEventListener('slide.bs.carousel', event => {

    slideIndicators.forEach(indicator => {
        indicator.classList.remove('active');
    });

    slideIndicators[event.to].classList.add('active');
});

document.addEventListener("DOMContentLoaded", function() {
    // Находим нашу карусель
    const carouselElement = document.getElementById('carouselExampleControls');

    // --- ИСПРАВЛЕНИЕ ЗДЕСЬ ---
    // Находим кнопки по атрибуту data-bs-target, так как они теперь ВНЕ блока карусели
    const prevButton = document.querySelector('.carousel-control-prev[data-bs-target="#carouselExampleControls"]');
    const nextButton = document.querySelector('.carousel-control-next[data-bs-target="#carouselExampleControls"]');

    // Проверяем, нашлись ли все элементы, чтобы избежать ошибок
    if (!carouselElement || !prevButton || !nextButton) {
        console.error("Не удалось найти карусель или ее кнопки управления.");
        return; // Прерываем выполнение скрипта, если что-то не найдено
    }

    // Получаем общее количество слайдов
    const totalSlides = carouselElement.querySelectorAll('.carousel-item').length;

    // Функция для обновления состояния кнопок
    function updateButtonState(activeIndex) {
        // Если активный слайд - первый (индекс 0), отключаем кнопку "назад"
        if (activeIndex === 0) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }

        // Если активный слайд - последний, отключаем кнопку "вперед"
        if (activeIndex === totalSlides - 1) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }

    // "Слушаем" событие, которое происходит ПОСЛЕ смены слайда
    carouselElement.addEventListener('slide.bs.carousel', function(event) {
        // event.to содержит индекс нового активного слайда
        updateButtonState(event.to);
    });

    // Устанавливаем правильное состояние кнопок при загрузке страницы
    // (находим активный слайд и вычисляем его индекс)
    const initialActiveElement = carouselElement.querySelector('.carousel-item.active');
    const initialIndex = Array.from(carouselElement.querySelectorAll('.carousel-item')).indexOf(initialActiveElement);
    updateButtonState(initialIndex);
});

