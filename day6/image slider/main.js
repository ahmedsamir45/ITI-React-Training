var list_urls = ["imgs/book1.jpeg", "imgs/book2.jpeg", "imgs/book3.jpeg", "imgs/book4.jpeg", "imgs/book5.jpeg"];
var myImage = document.getElementById("image");
var defualt = 0;
var myInterval;  

number = document.getElementsByTagName("span")[0];
showNumber();

function showNumber() {
    number.innerHTML = defualt + 1;
}

showImage();

function showImage() {
    myImage.src = list_urls[defualt];
}

function start() {
    myInterval = setInterval(function() {
        if (defualt >= list_urls.length - 1) {
            defualt = list_urls.length -1;
        } else {
            defualt++;
        }
        showImage();
        showNumber();
    }, 2000);
}

function stop() {
    clearInterval(myInterval);
}

function next() {
    if (defualt >= list_urls.length - 1) {
        defualt =  list_urls.length -1;
    } else {
        defualt++;
    }
    showImage();
    showNumber();
}

function previous() {
    if (defualt <= 0) {
        defualt = 0;
    } else {
        defualt--;
    }
    showImage();
    showNumber();
}
