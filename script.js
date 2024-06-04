/* <--------------------NavBar-Scroll-Effect-------------------> */

window.onscroll = function () { NavScroll() };
let navbar = document.getElementById("navbar");

function NavScroll() {

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        navbar.classList.add("nav-scroll");
        navbar.classList.remove("nav-color");
    }
    else {
        navbar.classList.remove("nav-scroll");
        navbar.classList.add("nav-color");
    }
}

/* <--------------------NavBar-Items-------------------> */

let nav_items = document.getElementsByClassName("nav-item");
let nav_links = document.getElementsByClassName("nav-link");

for (const item of nav_items) {

    item.addEventListener("click", function () {
        for (const link of nav_links) {
            link.classList.remove("active");
        }

        let clickedLink = item.querySelector(".nav-link");
        if (clickedLink) {
            clickedLink.classList.add("active");
        }
    });
}

/* <--------------------NavBar-After-Collapse-------------------> */

let side_nav = document.getElementById("side-nav");
let side_content = document.getElementById("side-content");

function openNav() {
    side_nav.style.width = "100%";
    setTimeout(() => {
        side_content.style.display = "block";
    }, 220);
}

function closeNav() {
    side_content.style.display = "none";
    side_nav.style.width = "0";
}

/* <--------------------Hero-Slider-------------------> */

let Slider_Items = document.getElementsByClassName("slider-item");
let i = 0;

function SlideUpdate() {

    for (const Item of Slider_Items) {
        Item.classList.remove("active");
    }

    let Slider = Slider_Items[i];
    Slider.classList.toggle("active");

    if (i < Slider_Items.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
}

setInterval(SlideUpdate, 5500);
