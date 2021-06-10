const overlayDiv = document.querySelector('.overlay-div');
const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
// const closeBtn = document.querySelector('.');

openBtn.addEventListener('click', function() {
    overlayDiv.classList.add('show-overlay-div');
});

closeBtn.addEventListener('click', function() {
    overlayDiv.classList.remove('show-overlay-div');
});