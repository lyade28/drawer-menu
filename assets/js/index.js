const navToggler = document.querySelector('.nav-toggler');
const navigation = document.querySelector('nav');

navToggler.addEventListener('click', toggleNav);

function toggleNav() {
    navToggler.classList.toggle('active');
    navigation.classList.toggle('active');
}


