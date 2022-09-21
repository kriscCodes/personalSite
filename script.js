let nextButton = document.getElementById("next");

let previousButton = document.getElementById("previous");

let firstImage = document.getElementById("firstImage");

let projectDescription = document.getElementById("projectFunction");

let projectLink = document.getElementById("projectLinks");


let describeArr = ["Covid Tracker", "Weather App", "Current Project"];

let imageArr = ["images/tracker.png", "images/weather.png", "images/calc.png"];

let linkArr = ["https://krisccodes.github.io/BionicSources/statistics.html", "https://www.google.com/", "https://www.apple.com/"];

let imageCounter = 0;

nextButton.onclick = function(){

    imageCounter ++;
    if(imageCounter == imageArr.length){
        imageCounter = 0;
    }
    firstImage.src = imageArr[imageCounter];
    projectDescription.innerHTML = describeArr[imageCounter];
    projectLink.href = linkArr[imageCounter];

    
}

previousButton.onclick = function(){

    imageCounter --;
    if(imageCounter == -1){
        imageCounter = imageArr.length - 1;
    }
    firstImage.src = imageArr[imageCounter];
    projectDescription.innerHTML = describeArr[imageCounter];
    projectLink.href = linkArr[imageCounter];
}