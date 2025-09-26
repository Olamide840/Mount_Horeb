const slider = document.querySelector('.gallery-slider');
const leftBtn = document.querySelector('.gallery-btn.left');
const rightBtn = document.querySelector('.gallery-btn.right');

let scrollAmount = 0;

rightBtn.addEventListener('click',() => {
    slider.scrollBy({left: 320,behavior: 'smooth'});
});
leftBtn.addEventListener('click',() => {
    slider.scrollBy({left: -320,behavior: 'smooth'});
});
