let fractionalBackground = document.getElementById('dark_fractional');
let toggleMode = document.getElementById('dark_toggle');
let layoutContainer = document.getElementById('dark_layout');
let navItem = document.getElementsByClassName('navigation-item');
let contactModal = document.getElementById('contact');

let contactButton = document.getElementById('contact-button');
let toggleButton = document.getElementById('toggle');

let i;

const darkMode = () => {
    fractionalBackground.className = 'fractional-background_dark';
    toggleMode.className = 'toggle-mode_dark';
    layoutContainer.className = 'layout-container_dark dark_text';
    contactModal.className = 'contact_dark'
    for (i = 0; i < navItem.length; ){
        navItem[i].className = 'navigation-item_dark dark_text';
    };
    i++
}

toggleButton.addEventListener('change', darkMode);

// Calculates how old I am and inserts it in innerHTML.
let age;
let birthday = new Date('Sep 18 1988');
let dateToday = new Date();

if (dateToday.getMonth() <= birthday.getMonth() && dateToday.getDate() <= birthday.getDate()){
    age = (dateToday.getFullYear() - birthday.getFullYear()) - 1; // subtracts one from value if month is less than birthday month
} else {
    age = dateToday.getFullYear() - birthday.getFullYear();
}

document.getElementById('years-old').innerHTML = age; // Prints age to index.html

const contactPopUp = () => {
    
    if(contactModal.style.display === 'none'){
        contactModal.style.display = 'block';
    } else{
        contactModal.style.display = 'none';
    }
}

contactButton.addEventListener('click', contactPopUp);