var showTab = function(name) {
    var tabs = ["welcome", "story", "photos", "party", "wedding", "guests", "registry"];
    for (i = 0; i < tabs.length; i++) {
        var x = document.getElementById("page-" + tabs[i]);
        x.style.display = name === tabs[i] ? "block" : "none";
    }
};

var responsive = function() {
    var x = document.getElementById("header");
    if (x.className === "header") {
        x.className = "header responsive";
    } else {
        x.className = "header";
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    showTab("welcome");
});