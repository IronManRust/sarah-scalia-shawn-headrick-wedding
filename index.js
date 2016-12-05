document.addEventListener("DOMContentLoaded", function(event) {
    showPage("welcome");
});

var showPage = function(name) {
    var pages = document.getElementsByClassName("page");
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = (pages[i].id === "page-" + name) ? "block" : "none";
    }
};

var responsiveHeader = function() {
    var header = document.getElementById("header");
    if (header.className === "header standard") {
        header.className = "header responsive";
    } else {
        header.className = "header standard";
    }
};