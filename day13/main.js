// start swap 

let list1 = [1, 2, 3];
let list2 = [4, 5, 6];

// lists before swapping 
console.log("before swap")

console.log(list1); 
console.log(list2); 


// lists after swapping 
[list1, list2] = [list2, list1];
console.log("after swap")
console.log(list1); 
console.log(list2); 

// end swap


// start min max 
function getMinMax(...arrays) {
   
    const max = Math.max(...arrays);
    const min = Math.min(...arrays);

    return { min, max };
}


const numbers = [5, 3, 9, 1, 12, 8];
const { min, max } = getMinMax(...numbers);
console.log(`min max of ${numbers}`)
console.log("Min value:", min); 
console.log("Max value:", max); 
// end min max

// start work in list
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];


const allAreStrings = fruits.every(fruit => typeof fruit === 'string');
console.log("Are all elements strings?", allAreStrings); 


const someStartWithA = fruits.some(fruit => fruit.startsWith('a'));
console.log("Do some elements start with 'a'?", someStartWithA); 


const filteredFruits = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
console.log("Fruits that start with 'b' or 's':", filteredFruits); 


const likedFruits = fruits.map(fruit => `I like ${fruit}`);
console.log("Liked fruits declarations:", likedFruits); 



likedFruits.forEach(likedFruit => console.log(likedFruit));
// end work in list 