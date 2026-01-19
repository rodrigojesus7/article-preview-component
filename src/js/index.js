const mobileMediaQuery = window.matchMedia("(max-width: 767px)");


let shareButton = document.querySelector('#share-button');
let shareButtonIcon = document.querySelector('#share-button-icon');
let user = document.querySelector('#user');
let userSection = document.querySelector('#user-section');

let shareSection = document.querySelector('#share-section');



shareButton.addEventListener('click', function () {


    if (mobileMediaQuery.matches) {

        if (shareButtonIcon.getAttribute('src') === './src/images/new-icon-share.svg') {
            shareButtonIcon.setAttribute('src', './src/images/new-icon-share-modified.svg');
        } else {
            shareButtonIcon.setAttribute('src', './src/images/new-icon-share.svg');
        }

        shareButton.classList.toggle('share-button--modifier');
        user.classList.toggle('hidden');
        shareSection.classList.toggle('hidden');
        userSection.classList.toggle('user-section--share-modifier');
    }


})








