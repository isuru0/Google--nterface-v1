// Onload hidden Google Apps
var appsbox = document.getElementById("googleApps");
appsbox.style.display = "none";

// Google apps Show and Hidden action
function apps(){
    var appsbox = document.getElementById("googleApps");
    if (appsbox.style.display === "none"){
        appsbox.style.display = "block";
    } else if (appsbox.style.display === "block"){
        appsbox.style.display = "none";
    }
}

// Google apps hidden action When click other area
function hiddenClick(){
    var appsbox = document.getElementById("googleApps");
    if (appsbox.style.display = "block"){
        appsbox.style.display = "none";
    }
}

// Search Action
function searchGoogle(){
    var searchinput = document.getElementById("searchBar").value;
    window.location = "https://www.google.com/search?q=" + (searchinput);
}