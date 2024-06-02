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

let side_nav = document.getElementById("side-nav");
let side_content = document.getElementById("side-content");
let close_btn = document.getElementById("close");
let open_btn = document.getElementById("toggle-btn");

function openNav() {
    side_nav.style.width = "100%";
    setTimeout(() => {
        side_content.style.display = "block";    
    }, 70);
}

function closeNav() {
    side_content.style.display = "none";
    side_nav.style.width = "0";
}
