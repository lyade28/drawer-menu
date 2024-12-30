const habungeBuntton = document.querySelector('.nav-toggler')
const navigation = document.querySelector('nav')
 
habungeBuntton.addEventListener('click', toggleNav) 

function toggleNav() {
  habungeBuntton.classList.toggle('active')
  navigation.classList.toggle('active')
}


