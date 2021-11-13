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
images[0] = "assets/images/caroussel/4.png";
images[1] = "assets/images/caroussel/7.png";
images[2] = "assets/images/caroussel/8.png";
images[3] = "assets/images/caroussel/10.png";
images[4] = "assets/images/caroussel/11.png";
images[5] = "assets/images/caroussel/14.png";
images[6] = "assets/images/caroussel/16.png";
images[7] = "assets/images/caroussel/58.png";
images[8] = "assets/images/caroussel/32.png";
images[9] = "assets/images/caroussel/37.png";
images[10] = "assets/images/caroussel/38.png";
images[11] = "assets/images/caroussel/42.png";
images[12] = "assets/images/caroussel/43.png";
images[13] = "assets/images/caroussel/45.png";
images[14] = "assets/images/caroussel/46.png";
images[15] = "assets/images/caroussel/81.png";
images[16] = "assets/images/caroussel/51.png";
images[17] = "assets/images/caroussel/52.png";
images[18] = "assets/images/caroussel/53.png";
images[19] = "assets/images/caroussel/54.png";
images[20] = "assets/images/caroussel/55.png";
images[21] = "assets/images/caroussel/58.png";
images[22] = "assets/images/caroussel/37.png";
images[23] = "assets/images/caroussel/61.png";
images[24] = "assets/images/caroussel/62.png";
images[25] = "assets/images/caroussel/64.png";
images[26] = "assets/images/caroussel/68.png";
images[27] = "assets/images/caroussel/69.png";
images[28] = "assets/images/caroussel/72.png";
images[29] = "assets/images/caroussel/73.png";
images[30] = "assets/images/caroussel/74.png";
images[31] = "assets/images/caroussel/75.png";
images[32] = "assets/images/caroussel/78.png";
images[33] = "assets/images/caroussel/79.png";
images[34] = "assets/images/caroussel/81.png";
images[35] = "assets/images/caroussel/62.png";
images[36] = "assets/images/caroussel/43.png";
images[37] = "assets/images/caroussel/90.png";
images[38] = "assets/images/caroussel/68.png";
images[39] = "assets/images/caroussel/38.png";
images[40] = "assets/images/caroussel/94.png";
images[41] = "assets/images/caroussel/100.png";



//pb car ne trouve pas img-carou --> est exécuté avant que root (et donc img-carou) ne soit créée 


    