const closePanel = () => {
    document.querySelector("#open-nav > img").setAttribute("src", "images/icon-hamburger.svg");
    document.getElementById("nav-mobile").classList.replace("active", "hidden");
}

const openPanel = () => {
    document.getElementById("nav-mobile").classList.replace("hidden", "active");
    document.querySelector("#open-nav > img").setAttribute("src", "images/icon-close.svg");
}

document.getElementById("open-nav").addEventListener("click", () => {
    if(document.getElementById("nav-mobile").classList.contains("active")) {
        closePanel();
    } else {
        openPanel ();
    }
});

const navMobileLinks = document.querySelectorAll("#nav-mobile a");
for (let navMobileLink of navMobileLinks) {
    navMobileLink.addEventListener("click", () => {
        closePanel();
    })
}


