const navbarColor = "#405665"

var navIsOpen = false;

function toggleNavigation() {
    if (!navIsOpen) {
        document.getElementById("navbar").style.width = "100%";
        document.getElementById("navbar").style.right = "0";
        document.getElementById("nav_ul").style.display = "block";
        document.body.style.overflow = "hidden";
        navIsOpen = true;
    }
    else {
        document.getElementById("navbar").style.width = "0%";
        setTimeout(function() {
            document.getElementById("navbar").style.right = "2%";
        }, 100);
        document.getElementById("nav_ul").style.display = "none";
        document.body.style.overflow = "visible";
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
    } else  {
        navIsOpen = true;
        toggleNavigation();
    }
}