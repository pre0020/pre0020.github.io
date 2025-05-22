var button = document.getElementById("toggle");
var div = document.getElementById("yes");
toggled = true;
function yahoo() {
    console.log(":(")
    if (toggled) {
        toggled = false;
        div.style.display = "none";

    } else {
        toggled = true;
        div.style.display = "block";
    }
}
button.onclick = "yahoo()";