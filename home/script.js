document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.querySelector('.scroll-arrow.left');
    const rightButton = document.querySelector('.scroll-arrow.right');
    const cardContainer = document.querySelector('.card-container');

    leftButton.addEventListener('click', function() {
        cardContainer.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', function() {
        cardContainer.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});