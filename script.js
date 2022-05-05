document.querySelector('.hamburger').addEventListener('click', function () {
    document.getElementById('closeHamburger').classList.remove('hidden');
})

document.getElementById('clHamburger').addEventListener('click', function () {
    document.getElementById('closeHamburger').classList.add('hidden');
})