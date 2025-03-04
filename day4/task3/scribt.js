
var p1 = parseFloat(prompt("Enter the radius of the circle"));
var area = Math.PI * Math.pow(p1, 2);
alert(`The area of the circle is ${area}`);


var p2 = parseInt(prompt("Enter a number"));
var squareRoot = Math.sqrt(p2);
alert(`Your square root is ${squareRoot}`);


var p3 = parseInt(prompt("Enter an angle in degrees"));
var angleInRadians = p3 * (Math.PI / 180); 
var cosine = Math.cos(angleInRadians)
alert(`The angle in radians is ${cosine}`);
