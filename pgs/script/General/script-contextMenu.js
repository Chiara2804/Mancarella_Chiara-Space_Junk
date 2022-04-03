document.oncontextmenu = rightClick;

function rightClick(clickEvent) {
    clickEvent.preventDefault();
    // return false;
}

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById("contextMenu")
        .style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById("contextMenu")
        .style.display == "block")
        hideMenu();
    else {
        var menu = document.getElementById("contextMenu")

        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}

//funzione per ricaricare la pagina
function reload() {
    location.reload()
}