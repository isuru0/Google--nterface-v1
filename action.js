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

// Link to item links
function linkabout(){
    location.href = "https://about.google/?fg=1&utm_source=google-DE&utm_medium=referral&utm_campaign=hp-header";
}
function linkstore(){
    location.href = "https://store.google.com/DE?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-DE";
}
function linkgmail(){
    location.href = "https://mail.google.com/mail/&ogbl";
}
function linkimages(){
    location.href = "https://www.google.de/imghp?hl=en&ogbl";
}
function linksignin(){
    location.href = "https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=GAZAmgQ";
}

function linkadvertising(){
    location.href = "https://www.google.com/intl/en_de/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1";
}
function linkbusiness(){
    location.href = "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1";
}
function linkhsw(){
    location.href = "https://google.com/search/howsearchworks/?fg=1";
}
function linkprivacy(){
    location.href = "https://policies.google.com/privacy?hl=en-DE&fg=1";
}
function linkteams(){
    location.href = "https://policies.google.com/terms?hl=en-DE&fg=1";
}