let sum = 0;
let promp = parseInt(window.prompt("Enter a number"));
while( isNaN( promp)){
    alert("please add an integer")
    promp = parseInt(window.prompt("Enter a number"))
}
while(promp !== 0 && sum <= 100) {
    if (sum > 100) {
        break;
    }
    sum = sum + promp;
    promp = parseInt(window.prompt("Enter a number"));
}

document.write(`Your total is equal to ${sum}`);
