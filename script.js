document.querySelector('.hamburger').addEventListener('click', function () {
    document.getElementById('closeHamburger').classList.remove('hidden');
})

document.getElementById('clHamburger').addEventListener('click', function () {
    document.getElementById('closeHamburger').classList.add('hidden');
})



$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 1500
    });
});