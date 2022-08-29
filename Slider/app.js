document.addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        changeImage(-1);
    } else if(e.keyCode === 39){
        changeImage(1);
    }
});

function changeImage (direction) {
    var imageContainer = document.getElementById("image");
    var source = imageContainer.src;
    var splittedSource = source.split("/");
    var currentSrc = splittedSource[splittedSource.length - 1];
    currentSrc = Number(currentSrc.split(".")[0]);
    if(direction === 1) {
        currentSrc++;
    } else {
        currentSrc--;
    }
    if (currentSrc > 5) {
        currentSrc = 1;
    } else if (currentSrc < 1) {
        currentSrc = 5;
    }
    imageContainer.src = "images/" + currentSrc + ".jpg";
    console.log(currentSrc)
}