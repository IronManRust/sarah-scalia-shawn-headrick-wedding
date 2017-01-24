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
        spinner.className += "faded";
        window.setTimeout(function() {
            spinner.className += "faded hidden";
        }, 1000);
    }, 1000);

});

var showPage = function(name) {

    var pages = document.getElementsByClassName("page");
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = (pages[i].id === "page-" + name) ? "block" : "none";
    }

    var header = document.getElementById("header");
    header.className = "header standard";

};

var showModal = function(name) {

    var modal = document.getElementById(name);
    if (modal) {
        var close = modal.getElementsByClassName("modal-content-header-close")[0];
        if (close) {
            toggleNavigationDisplay(false);
            modal.style.display = "block";
            var frame = modal.getElementsByTagName("iframe")[0]
            if (frame) {
                frame.src = frame.getAttribute("data-src"); // Load Content
            }
            close.addEventListener("click", function execute(event) {
                toggleNavigationDisplay(true);
                modal.style.display = "none";
                var frame = modal.getElementsByTagName("iframe")[0]
                if (frame) {
                    frame.src = ""; // Unload Content
                }
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

    var headerWrapper = document.getElementById("wrapper-header");
    var footerWrapper = document.getElementById("wrapper-footer");

    if (display) {
        headerWrapper.style.display = "";
        footerWrapper.style.display = "";
    } else {
        headerWrapper.style.display = "none";
        footerWrapper.style.display = "none";
    }

};

var togglePhotoListDisplay = function (display) {

    var photoList = document.getElementById("page-photos-images");

    if (display) {
        photoList.style.display = "";
    } else {
        photoList.style.display = "none";
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
