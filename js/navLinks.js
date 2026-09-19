function linkToFindUs() {
    if (window.innerWidth > 500) {
        window.location = window.location.origin + "/findus";
    } else {
        window.location.hash = "#findus";
        document.getElementById('toggle').checked = false;
    }
}

/*const nav_links = document.getElementById("navB").children
for (var nav_links_array=[], i=nav_links.length; i;) nav_links_array[--i] = nav_links[i];

nav_links_array.forEach(element => {
    element.addEventListener("click", function () {
        localStorage.setItem("navAnimation", true);
        window.location = window.location.origin + element.attributes.my_url.value;
    }, false);
});

if (localStorage.navAnimation) {
    if (localStorage.navAnimation === "true") {
        localStorage.navAnimation = false;

    } else {
        document.getElementById("toggle").checked = false;
    }
} else {
    document.getElementById("toggle").checked = false;
}
if (window.innerWidth <= 500) {
    document.getElementById("navB").style.transition = "height 0.3s";
    document.getElementById("toggle").checked = false;
}*/