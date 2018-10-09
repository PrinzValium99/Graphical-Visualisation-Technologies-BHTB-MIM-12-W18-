var imageNr = 0;

function loadImage(filename) {
    var imageObj = new Image();
    imageObj.onload = function() {
        var img = document.getElementById('Kreis');
        img.setAttribute('src', this.src);
    };
    imageObj.src = "textures/" + filename;
}

window.onkeydown = function(evt) {
    console.log(evt);
    var key = evt.which ? evt.which : evt.keyCode;
    var c = String.fromCharCode(key);
    switch (c) {
    case ('R'):
        decreaseImage();
        break;
    case ('I'):
        increaseImage();
        break;
    }
};

function decreaseImage() {
	
	imageNr = (imageNr - 1)%8;
	if (imageNr < 0) {
		imageNr += 8;
	}

	loadImage("Kreis-"+imageNr+".png");
}

function increaseImage() {
	
	imageNr = (imageNr + 1)%8;
	
	loadImage("Kreis-"+imageNr+".png");
}



//function changeImage(imagename) {
        var elem = document.getElementById('textSpan');
        elem.style.color = color;
    }