const navbarColor = "#405665"

var navIsOpen = false;

function toggleNavigation() {
    if (!navIsOpen) {
        document.getElementById("navbar").style.width = "100%";
        document.getElementById("navbar").style.right = "0";
        document.getElementById("nav_ul").style.display = "block";
        document.body.style.overflow = "hidden";
        document.getElementById("toTop").style.display = "none";
        navIsOpen = true;
    }
    else {
        document.getElementById("navbar").style.width = "0%";
        setTimeout(function() {
            document.getElementById("navbar").style.right = "2%";
        }, 100);
        document.getElementById("nav_ul").style.display = "none";
        document.body.style.overflow = "visible";
        document.getElementById("toTop").style.display = "block";
        navIsOpen = false;
    }
}

function navItemClick() {
    if (window.innerWidth <= 850) {
        navIsOpen = true;
        toggleNavigation();
    }
}

function onResize() {
    if(window.innerWidth > 850) {
        document.getElementById("navbar").style.width = "100%";
        document.getElementById("navbar").style.right = "0";
        document.getElementById("nav_ul").style.display = "inline-block";

        navbarHeight = document.getElementById("navbar").offsetHeight;
    } else  {
        navIsOpen = true;
        toggleNavigation();
        navbarHeight = 0;
    }
}

// Fix scrolling to below navbar, modified from ()
var navbarHeight = 70;
function goTo(id) {
    let destination = document.querySelector(id);
    if(destination != null) {
        let yCoord = destination.offsetTop - navbarHeight;
        window.scrollTo({
        top: yCoord,
        behavior: "smooth"
        });
    }
}

// Back to top button
const threshold = 500; // Pixels
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if ((document.body.scrollTop > threshold || document.documentElement.scrollTop > threshold) && !navIsOpen) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}