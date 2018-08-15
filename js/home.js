window.onload = function() {
    const rows = document.getElementsByClassName("main")[0].getElementsByClassName("row");
    node = rows[rows.length - 1];
    node.style.maxHeight = "75vh";
    console.log(node.style);

    const hideOpen = () => {
        node.style.maxHeight == "150vh" ? node.style.maxHeight = "75vh" : node.style.maxHeight = "150vh";
    }
    
    node.onclick = hideOpen;
}

