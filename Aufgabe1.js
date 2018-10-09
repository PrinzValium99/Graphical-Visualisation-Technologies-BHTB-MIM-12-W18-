function loadImage(filename) {
    var imageObj = new Image();
    imageObj.onload = function() {
        var img = document.getElementById('x');
        img.setAttribute('src', this.src);
    };
    imageObj.src = "textures/" + filename;
}