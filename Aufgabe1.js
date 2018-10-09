var imageNr = 0;
var numberSprites = 8;

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
	
	imageNr = (imageNr - 1)%numberSprites;
	if (imageNr < 0) {
		imageNr += numberSprites;
	}

	loadImage("Kreis-"+imageNr+".png");
}

function increaseImage() {
	
	imageNr = (imageNr + 1)%numberSprites;
	
	loadImage("Kreis-"+imageNr+".png");
}