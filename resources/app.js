let fractionalBackground = document.getElementById('dark_fractional');
let toggleMode = document.getElementById('dark_toggle');
let layoutContainer = document.getElementById('dark_layout');
let navItem = document.getElementsByClassName('navigation-item');
let contactModal = document.getElementById('contact');

let profilePic = document.getElementById('profile-picture');

let checkbox = document.getElementById('toggle');

let contactButton = document.getElementById('contact-button');
let aboutButton = document.getElementById('about-button');
let toggleButton = document.getElementById('toggle');


checkbox.checked = false; // resets checkbox each refresh

let i;
const darkMode = () => {
    if (checkbox.checked === true) {
        fractionalBackground.className = 'fractional-background_dark';
        toggleMode.className = 'toggle-mode_dark';
        layoutContainer.className = 'layout-container_dark dark_text';
        contactModal.className = 'contact_dark'
        navItem = document.getElementsByClassName('navigation-item')

        for (i = 0; i < navItem.length;){
            navItem[i].className = 'navigation-item_dark dark_text';
        };
        i++
        
    } else {
        fractionalBackground.className = 'fractional-background';
        toggleMode.className = 'toggle-mode';
        layoutContainer.className = 'layout-container';
        contactModal.className = 'contact';
        navItem = document.getElementsByClassName('navigation-item_dark');

        for (i = 0; i < navItem.length;){
            navItem[i].className = 'navigation-item';
        };
        i++
    }  
    return;
}

toggleButton.addEventListener('click', darkMode); //toggles darkMode

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

// Contact modal
const contactPopUp = () => { // shows or hides contact modal

    contactModal.classList.toggle('show')
    contactButton.classList.toggle('button-on')

}

contactButton.addEventListener('click', contactPopUp);

// listens to the window and closes modal if clicks happen in the window but not on the button
window.onclick = (event) => {
    if (!event.target.matches('#contact-button')){
        if (contactModal.classList.contains('show')) {
            contactModal.classList.remove('show');
            contactButton.classList.remove('button-on')
        }
    }
}

// disables event listener on the contact modal
contactModal.addEventListener('click', event => event.stopPropagation())

const colorPicture = () => {
    profilePic.src = "./resources/images/emilbilde.png"
}
const bwPicture = () => {
    profilePic.src = "./resources/images/emilbildeBW.png"
}


profilePic.addEventListener('mouseenter', colorPicture)
profilePic.addEventListener('mouseleave', bwPicture)