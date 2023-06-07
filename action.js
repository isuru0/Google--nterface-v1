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
/// Navigation Bar Links
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

/// Google Apps Links
function linkaccount(){
    location.href = "https://myaccount.google.com/?utm_source=OGB&utm_medium=app&authuser=0";
}
function linksearch(){
    location.href = "https://www.google.com/?authuser=0";
}
function linkbusiness(){
    location.href = "https://business.google.com/?gmbsrc=ww-ww-ot-gs-z-gmb-l-z-h~z-ogb-u&authuser=0";
}

function linkmap(){
    location.href = "https://maps.google.com/?authuser=0";
}
function linkyoutube(){
    location.href = "https://www.youtube.com/?authuser=0";
}
function linkplay(){
    location.href = "https://play.google.com/?authuser=0";
}

function linknews(){
    location.href = "https://news.google.com/?authuser=0";
}
function linkmeet(){
    location.href = "https://meet.google.com/?hs=197&authuser=0";
}

function linkchat(){
    location.href = "https://chat.google.com/?authuser=0";
}
function linkcontact(){
    location.href = "https://contacts.google.com/?authuser=0";
}
function linkdrive(){
    location.href = "https://drive.google.com/?authuser=0";
}

function linkcalender(){
    location.href = "https://calendar.google.com/calendar?authuser=0";
}
function linktranslate(){
    location.href = "https://translate.google.com/?authuser=0";
}
function linkphoto(){
    location.href = "https://photos.google.com/?authuser=0";
}

function linkadcenter(){
    location.href = "https://myadcenter.google.com/?ref=app-launcher&authuser=0";
}
function linkshoppin(){
    location.href = "https://www.google.com/shopping?source=og&authuser=0";
}

function linkfinance(){
    location.href = "https://www.google.com/finance?authuser=0";
}
function linkdoc(){
    location.href = "https://docs.google.com/document/?usp=docs_alc&authuser=0";
}
function linksheet(){
    location.href = "https://docs.google.com/spreadsheets/?usp=sheets_alc&authuser=0";
}

function linkside(){
    location.href = "https://docs.google.com/presentation/?usp=slides_alc&authuser=0";
}
function linkbook(){
    location.href = "https://books.google.com/?authuser=0";
}
function linkblogger(){
    location.href = "https://www.blogger.com/?authuser=0";
}

function linkhangout(){
    location.href = "https://hangouts.google.com/?authuser=0";
}
function linkkeep(){
    location.href = "https://keep.google.com/?authuser=0";
}
function linkjamboard(){
    location.href = "https://jamboard.google.com/?authuser=0";
}

function linkclassroom(){
    location.href = "https://classroom.google.com/?authuser=0";
}
function linkearth(){
    location.href = "https://artsandculture.google.com/?utm_source=ogs.google.com&utm_medium=referral&authuser=0";
}
function linkcollection(){
    location.href = "";
}

function linkart(){
    location.href = "";
}
function linkads(){
    location.href = "https://ads.google.com/home/?subid=ww-ww-xs-ip-awhc-a-ogb_cons!o2&authuser=0";
}
function linkpodcast(){
    location.href = "https://podcasts.google.com/";
}

function linkone(){
    location.href = "https://one.google.com/?utm_source=app_launcher&utm_medium=web&utm_campaign=all&utm_content=google_oo&authuser=0";
}
function linktravel(){
    location.href = "https://www.google.com/travel/?dest_src=al&authuser=0";
}
function linkform(){
    location.href = "https://docs.google.com/forms/?authuser=0";
}

function linkchrome(){
    location.href = "https://chrome.google.com/webstore?utm_source=app-launcher&authuser=0";
}

function linkmfg(){
    location.href = "https://about.google/products/";
}

/// Footer Links
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