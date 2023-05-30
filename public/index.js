// Get a hold on both burger and menu elements
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

// Add event listener to burger element
burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
});

