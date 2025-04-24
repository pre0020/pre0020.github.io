var button = document.getElementById("toggle");
var div = document.getElementById("yes");
toggled = false;
function yahoo() {
    if (toggled) {
        toggled = false;
        div.style.display = "none";

    } else {
        toggled = true;
        div.style.display = "block";
    }
}
button.onclick = yahoo();