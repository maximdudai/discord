'use strict'

let activeNav = false;

const mobileButton = document.querySelector(".responsive-btn");
mobileButton.addEventListener("click", function() {
    document.querySelector(".home-links").classList.toggle("mobile-nav-link")
    document.querySelector(".home-links").classList.toggle("active");

    activeNav = !activeNav;
});

if(window.orientation > -1) {
    document.querySelector("#detect-mobile").textContent = "mobile";
    document.getElementById("open-app-btn").textContent = "Open Discord in your mobile";
}

const closeNavBtn = document.querySelector(".close-nav");
closeNavBtn.addEventListener("click", function() {
    document.querySelector(".home-links").classList.toggle("mobile-nav-link")
    document.querySelector(".home-links").classList.toggle("active");
});