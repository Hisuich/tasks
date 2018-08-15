window.onload = function() {
    for (var i = 1; i <= 12; i++) {
        document.getElementById("gallery").innerHTML += 
        "<div class=\"col\">"
        + "<a href=\'../images/img-" + i + ".jpeg\' data-lightbox=\'mygallery\' data-title=\'img-" + i + "\'><img src=\'../images/img-" + i + ".jpeg\'></a>"
        + "</div>";
    }
}