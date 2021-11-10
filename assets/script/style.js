const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img-carou").src = images[x];
}
function startTimer() {
    setInterval(displayNextImage, 500);
}
var images = [], x = -1;
images[0] = "assets/images/56.png";
images[1] = "assets/images/65.png";
images[2] = "assets/images/91.png";
images[3] = "assets/images/97.png";

//pb car ne trouve pas img-carou --> est exécuté avant que root (et donc img-carou) ne soit créée 


    