const mobileMenu = () => {
    const menu = document.querySelector('menu');
    const menuMobile = document.querySelector('.menu-button');


    const handleMenu = () => {
        menuMobile.classList.toggle('menu-button--active');
        if (menu.classList.toggle('active-menu')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

    };

    menuMobile.addEventListener('click', handleMenu);

};

mobileMenu();