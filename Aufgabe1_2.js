var imageNr = 0;
var intervalID;
var speed = 50;

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
		window.clearInterval(intervalID);
		intervalID = window.setInterval(decreaseImage, 50);
        break;
    case ('I'):
		window.clearInterval(intervalID);
		intervalID = window.setInterval(increaseImage, 50);
        break;
	case ('Z'):
		window.clearInterval(intervalID);
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