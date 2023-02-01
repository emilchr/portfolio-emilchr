let fractionalBackground = document.getElementById('dark_fractional');
let toggleMode = document.getElementById('dark_toggle');
let layoutContainer = document.getElementById('dark_layout');
let navItem = document.getElementsByClassName('navigation-item');

let toggleButton = document.getElementById('toggle');

let i;

const darkMode = () => {
     // enable function on mobile devices
    fractionalBackground.className = 'fractional-background_dark';
    toggleMode.className = 'toggle-mode_dark';
    layoutContainer.className = 'layout-container_dark dark_text';
    
    for (i = 0; i < navItem.length; ){
        navItem[i].className = 'navigation-item_dark dark_text';
    };
    i++
}

toggleButton.addEventListener('change', darkMode);