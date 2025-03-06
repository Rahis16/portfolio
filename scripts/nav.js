const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
menuOpen = false;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    if (menuOpen) {
        menu.classList.remove('open');
        menu.classList.add('close');

        menuOpen = false;
    } else {
        menu.classList.remove('close');
        menu.classList.add('open');
        menuOpen = true;
    }
});