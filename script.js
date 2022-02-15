const bars = document.getElementById('bar');
const menu = document.querySelector('.menu');

bars.addEventListener('click', () => {
    bars.classList.toggle('fa-times');
    menu.classList.toggle('show');

    if (bars.classList.contains('fa-times')) {
        bars.style.color = '#737373';
    }
    else {
        bars.style.color = 'white';
    };
});

const logo = document.getElementById('logo');



