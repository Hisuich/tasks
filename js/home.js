window.onload = function() {
    const rows = document.getElementsByClassName("main")[0].getElementsByClassName("row");
    node = rows[rows.length - 1];
    node.style.height = "75vh";

    const hideOpen = () => {
        node.style.height == "150vh" ? node.style.height = "75vh" : node.style.height = "150vh";
    }
    
    node.onclick = hideOpen;
}

