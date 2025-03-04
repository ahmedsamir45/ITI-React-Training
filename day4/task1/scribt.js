var myArray = []
var mySumm  = 0
var myMult  = 1
var mysub   = 0
var myDivs  = 0


for(let i = 0; i < 3 ; i++){
    myArray[i] = parseInt(prompt("Enter a number:"))
}


mysub = myArray[0]
myDivs = myArray[0]


for(let j = 1; j < myArray.length; j++){
    mySumm += myArray[j]
    myMult *= myArray[j]
    mysub -= myArray[j]
    myDivs /= myArray[j]
}


mySumm += myArray[0]


document.write(`your result:-`)
document.write(`<h2>Your sum = ${mySumm}</h2>`)
document.write(`<h2>Your subtraction = ${mysub}</h2>`)
document.write(`<h2>Your multiplication = ${myMult}</h2>`)
document.write(`<h2>Your division = ${myDivs}</h2>`)
