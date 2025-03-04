

var myArray = []
for(let i = 0; i < 5 ; i++){
    myArray[i] = parseInt(prompt("Enter a number:"))
}

document.write("<h1>Sorting</h1>")
document.write(`<h1>u've entered the values of${myArray}</h1>`)
document.write(`<h1>ur values after being sorted decrecendig${myArray.sort((a, b) => a - b)}</h1>`)
document.write(`<h1>ur values after being sorted asendening${myArray.sort((a, b) => b - a)}</h1>`)
