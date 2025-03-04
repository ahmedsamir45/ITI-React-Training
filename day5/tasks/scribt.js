let win;
let myInterval;

function start() {
    win = window.open("demo.html", "_blank", "width=300,height=200,top=0,left=0");
    win.resizeTo(200,200)
    win.focus
    movewin();
}

function movewin() {
    let positionY = 0;
    let directionY = 1;
    let step = 10; 
    myInterval = setInterval(() => {
        positionY += directionY * step;
        if (positionY <= 0 || positionY + 200 >= window.screen.height) {
            directionY *= -1;
        }
        win.moveTo(0, positionY);
    }, 50);
}

function stop() {
    clearInterval(myInterval);
}
function openWritePage(){
    var writeWindow = window.open("write.html", "_blank");
    writeWindow.focus();
}
function openScrollPage() {
    var scrollwin = window.open("scroll.html", "_blank");
    scrollwin.focus();
}