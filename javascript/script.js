var images = [];
var bigImage;
var imageIndex = 1;
var timer;

function onInit() {
    imageInit();
    timer = setInterval(function() {
        nextImage();
    }, 3000);
}

function imageInit() {
    bigImage = document.getElementById("largeImage");

    for (var i = 1; i < 5; i++) {
        images.push(document.getElementById("image" + i));
    }
    images[0].onclick = function() {
        setImage(0);
    };
    images[1].onclick = function() {
        setImage(1);
    };
    images[2].onclick = function() {
        setImage(2);
    };
    images[3].onclick = function() {
        setImage(3);
    };
}

function setImage(index) {
    bigImage.src = images[index].src;
    clearInterval(timer);
    timer = setInterval(function() {
        nextImage();
    }, 3000);
}

function nextImage() {
    bigImage.src = images[imageIndex].src;
    imageIndex = (imageIndex + 1) % images.length;
}

function boeken() {
    if (confirm("Zeker weten dat je wilt boeken?") == true) {
        alert("Geboekt")
    } else {
        alert("Boeken geannuleerd")
    }
}