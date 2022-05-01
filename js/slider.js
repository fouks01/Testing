const slider = () => {
    const prevArrow = document.querySelector('.check-prev');
    const nextArrow = document.querySelector('.check-next');
    const checkBlock = document.querySelectorAll('.check-block');


    const checkSlides = document.querySelector('.check-start');
    const checkSlidesEnd = document.querySelector('.check-end');


    let currentSlide = 0;

    prevArrow.addEventListener('click', () => {
        checkBlock[currentSlide].classList.remove('check-block--active');

        if (currentSlide === 0) {
            currentSlide = checkBlock.length;
        }

        currentSlide--;

        checkBlock[currentSlide].classList.add('check-block--active');

        checkSlides.textContent = (currentSlide + 1);

    });

    nextArrow.addEventListener('click', () => {
        checkBlock[currentSlide].classList.remove('check-block--active');

        currentSlide++;

        if (currentSlide === checkBlock.length) {
            currentSlide = 0;
        }

        checkBlock[currentSlide].classList.add('check-block--active');


        checkSlides.textContent = (currentSlide + 1);


    });
};
slider();

// export default slider;