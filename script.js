const bars = document.getElementById('bar');
const menu = document.querySelector('.menu');
const logo = document.getElementById('logo');


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

const links = document.querySelectorAll('nav ul li');


for (let link of links) {
    link.addEventListener('click', function () {
        menu.classList.remove('show');
    })
};

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if(this.window.scrollY > header.scrollHeight) {
        bars.style.color = 'black';
    }
    if(this.window.scrollX > 900) {
        this.document.querySelector('input').style.backgroundColor = 'red';
    }
    else {
        bars.style.color = 'white';
    }
});

// ScrollReveall

ScrollReveal().reveal('.container .about-input', {duration: 1000, distance: '100px', position: 'bottom'});

ScrollReveal().reveal('.card-review', {duration: 2000, distance: '100px', position: 'bottom'});
ScrollReveal().reveal('.container', {duration: 2000, distance: '100px', position: 'bottom'});