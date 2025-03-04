const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const button = document.getElementById("mybutton");
// Load the image
const image = new Image();
image.src = 'myimage.jpg'; 


image.onload = function() {

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';

    ctx.fillText('welcome bro!', canvas.width / 2, canvas.height);
};

button.addEventListener("click",function(){
    canvas.classList.toggle("showcanvas")
})