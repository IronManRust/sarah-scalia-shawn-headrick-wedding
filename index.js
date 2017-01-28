document.addEventListener("DOMContentLoaded", function(event) {

    showPage("welcome");

    window.setInterval(function() {
        updateCountdownClock();
    }, 1000);

    initializePhotoViewer();

});

window.addEventListener("load", function execute(event) {

    window.removeEventListener("load", execute, false);

    var spinner = document.getElementById("spinner");
    window.setTimeout(function() {
        spinner.classList.add("faded");
        window.setTimeout(function() {
            spinner.classList.add("hidden");
        }, 1000);
    }, 1000);

});

var showPage = function(name) {

    var headerMenuItems = document.getElementsByClassName("header-menu-item");
    for (i = 0; i < headerMenuItems.length; i++) {
        if (headerMenuItems[i].id === ("header-menu-item-" + name)) {
            headerMenuItems[i].classList.add("selected");
        } else {
            headerMenuItems[i].classList.remove("selected");
        }
    }

    var pages = document.getElementsByClassName("page");
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = (pages[i].id === "page-" + name) ? "block" : "none";
    }

    var header = document.getElementById("header");
    header.classList.add("standard");
    header.classList.remove("responsive");

};

var showModal = function(name) {

    var modal = document.getElementById(name);
    if (modal) {
        var close = modal.getElementsByClassName("modal-content-header-close")[0];
        if (close) {
            toggleNavigationDisplay(false);
            modal.classList.remove("modal-hidden");
            window.setTimeout(function () {
                modal.classList.remove("modal-faded");
                var frame = modal.getElementsByTagName("iframe")[0]
                if (frame) {
                    frame.src = frame.getAttribute("data-src"); // Load Content
                }
            }, 300);
            close.addEventListener("click", function execute(event) {
                modal.classList.add("modal-faded");
                window.setTimeout(function () {
                    modal.classList.add("modal-hidden");
                    toggleNavigationDisplay(true);
                    var frame = modal.getElementsByTagName("iframe")[0]
                    if (frame) {
                        frame.src = ""; // Unload Content
                    }
                }, 300);
                close.removeEventListener("click", execute, false);
            });
        }
    }

};

var updateCountdownClock = function() {

    var dateWedding = Date.parse("September 2, 2017 12:00:00 CDT");
    var dateCurrent = Date.now();
    var dateDifference = dateWedding - dateCurrent;

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var divisorDD = 1000 * 60 * 60 * 24;
    var divisorHH = 1000 * 60 * 60;
    var divisorMM = 1000 * 60;
    var divisorSS = 1000;

    var differenceDD = 0;
    var differenceHH = 0;
    var differenceMM = 0;
    var differenceSS = 0;

    var displayDate = new Date(dateWedding);
    var display = months[displayDate.getMonth()] + " " + displayDate.getDate() + ", " + displayDate.getFullYear();

    var countdown = "";
    if (dateDifference > 0) {
        differenceDD = Math.floor(dateDifference / divisorDD); dateDifference = dateDifference - (differenceDD * divisorDD);
        differenceHH = Math.floor(dateDifference / divisorHH); dateDifference = dateDifference - (differenceHH * divisorHH);
        differenceMM = Math.floor(dateDifference / divisorMM); dateDifference = dateDifference - (differenceMM * divisorMM);
        differenceSS = Math.floor(dateDifference / divisorSS); dateDifference = dateDifference - (differenceSS * divisorSS);
        countdown = " (" + differenceDD + " Days, " + differenceHH + " Hours, " + differenceMM + " Minutes, " + differenceSS + " Seconds Remaining)";
    } else {
        countdown = " (We're Married!)";
    }

    document.getElementById("countdown-clock-standard").innerHTML = display + countdown;
    document.getElementById("countdown-clock-responsive").innerHTML = display;

};

var initializePhotoViewer = function () {

    var viewer = new Viewer(document.getElementById("page-photos-images"),
                            {
                                inline: false,
                                button: true,
                                navbar: true,
                                title: true,
                                toolbar: true,
                                tooltip: true,
                                movable: false,
                                zoomable: true,
                                rotatable: true,
                                scalable: true,
                                transition: true,
                                fullscreen: false,
                                keyboard: true,
                                interval: 5000,
                                minHeight: 0,
                                minWidth: 0,
                                zoomRatio: 0.1,
                                minZoomRatio: 0.01,
                                mazZoomRatio: 100,
                                zIndex: 2,
                                url: "src",
                                show: function () {
                                    toggleNavigationDisplay(false);
                                    togglePhotoListDisplay(false);
                                },
                                hide: function () {
                                    toggleNavigationDisplay(true);
                                    togglePhotoListDisplay(true);
                                }
                            });

};

var toggleNavigationDisplay = function (display) {

    var header = document.getElementById("header");
    var footer = document.getElementById("footer");

    if (display) {
        header.classList.remove("navigation-hidden");
        footer.classList.remove("navigation-hidden");
        window.setTimeout(function () {
            header.classList.remove("navigation-faded");
            footer.classList.remove("navigation-faded");
        }, 300);
    } else {
        header.classList.add("navigation-faded");
        footer.classList.add("navigation-faded");
        window.setTimeout(function () {
            header.classList.add("navigation-hidden");
            footer.classList.add("navigation-hidden");
        }, 300);
    }

};

var togglePhotoListDisplay = function (display) {

    var photoList = document.getElementById("page-photos-images");
    photoList.style.display = display ? "block" : "none";

};

var responsiveHeader = function() {

    var header = document.getElementById("header");
    header.classList.toggle("standard");
    header.classList.toggle("responsive");

};
