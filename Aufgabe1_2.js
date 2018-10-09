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
		var intervalID = window.setInterval(decreaseImage, 500);
        break;
    case ('I'):
		var intervalID = window.setInterval(IncreaseImage, 500);
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