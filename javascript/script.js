var image1, image2, image3, image4, image0;

function onInit() {
    imageInit()
}

function imageInit() {
    image0 = document.getElementById("lloret-image0")
    image1 = document.getElementById("lloret-image1")
    image2 = document.getElementById("lloret-image2")
    image3 = document.getElementById("lloret-image3")
    image4 = document.getElementById("lloret-image4")
                                     
    image1.onclick = function () {onImageClick(image1)};
    image2.onclick = function () {onImageClick(image2)};
    image3.onclick = function () {onImageClick(image3)};
    image4.onclick = function () {onImageClick(image4)};
}


function onImageClick(changeImage) {
    image0.src = changeImage.src;
}



