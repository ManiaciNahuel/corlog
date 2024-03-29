const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

function openNav() {
    document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("mySidenav").style.opacity = "1";
    document.getElementById("header_1").style.opacity = "0.7";
    document.getElementById("main").style.opacity = "0.7";
}

function closeNav() {
    document.getElementById("mySidenav").style.visibility = "hidden";
    document.getElementById("header_1").style.opacity = "1";
    document.getElementById("main").style.opacity = "1";
}

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip "]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover "]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})