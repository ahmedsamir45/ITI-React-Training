function* fib1(n) {
    let a = 0, b = 1, count = 0;
    while (count < n) {
        yield a;
        [a, b] = [b, a + b];
        count++;
    }
}



const fibGen1 = fib1(15);
console.log(fibGen1)
for (const value of fibGen1) {
    console.log(value);
}

console.log("########################################################")

function* fib2(maxValue) {
    let a = 0, b = 1;
    while (a <= maxValue) {
        yield a;
        [a, b] = [b, a + b];
    }
}


const fibGen2 = fib2(50);
console.log(fibGen2)
for (const value of fibGen2) {
    console.log(value);
}
