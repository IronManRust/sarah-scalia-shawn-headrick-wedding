document.addEventListener("DOMContentLoaded", function(event) {

    showPage("welcome");

    window.setInterval(function() {
        updateCountdownClock();
    }, 1000);

});

var showPage = function(name) {

    var pages = document.getElementsByClassName("page");
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = (pages[i].id === "page-" + name) ? "block" : "none";
    }

};

var updateCountdownClock = function() {

    var dateWedding = Date.parse("September 2, 2017");
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

var responsiveHeader = function() {

    var header = document.getElementById("header");
    if (header.className === "header standard") {
        header.className = "header responsive";
    } else {
        header.className = "header standard";
    }

};