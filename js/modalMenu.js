const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelector('.appointment');
    const buttonSecond = document.querySelector('.check-btn');
    const modalBlock = modal.querySelector('.popup-content');
    const email = document.querySelectorAll('[type="email"]');


    let count = 0;
    let modalMove;

    const modalAnimation = () => {
        count++;
        modalMove = requestAnimationFrame(modalAnimation);

        if (count < 51) {
            modalBlock.style.left = count + '%';
        } else {
            cancelAnimationFrame(modalMove);
        }
    };

    buttons.addEventListener('click', () => {
        if (screen.width > 767) {
            modalAnimation();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

        }
    });



    buttonSecond.addEventListener('click', () => {
        if (screen.width > 767) {
            modalAnimation();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

        } else {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

        }
    });


    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            count = 0;
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';

        };
    });


    email.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w0-9\-\.\_\!\~\*\'@]/gi, '');
        });
    });

};
modal();