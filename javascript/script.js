var image1;
var image2;
var image3;
var image4;

function loadImages() {
    image1 = document.getElementById("lloret-image1")
    image1.onclick = function () {
        onClick(image1)
    };
    
    image2 = document.getElementById("lloret-image2")
    image2.onclick = function () {
        onClick(image2)
    };
    
    image3 = document.getElementById("lloret-image3")
    image3.onclick = function () {
        onClick(image3)
    };
    
    image4 = document.getElementById("lloret-image4")
    image4.onclick = function () {
        onClick(image4)
    };
}

function onClick(changeImage) {
    document.getElementById("lloret-image0").src = changeImage.src;
}



