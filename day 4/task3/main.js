let inputString = window.prompt("Enter a string to check if it is a palindrome:");
let considerCase = window.prompt("Do you want to consider case sensitivity? (yes or no)");

let reversedStr = inputString.split('').reverse().join('');


if(considerCase!=="yes"){
    reversedStr = reversedStr.toLowerCase()
    inputString = inputString.toLowerCase()
}





if (inputString===reversedStr) {
    document.write(`The string "${inputString}" is a palindrome.`);
} else {
    document.write(`The string "${inputString}" is not a palindrome.`);
}
