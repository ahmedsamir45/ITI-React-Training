
const truncate = {
    [Symbol.replace](str) {
        if (str.length > 15) {
            return str.slice(0, 15) + '…';
        }
        return str;
    }
};


const long = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor ";
const short = "Short string";


console.log(long.replace(truncate)); 
console.log(short.replace(truncate)); 
