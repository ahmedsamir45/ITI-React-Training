
// method one iterator
var obj1 = {
    usrnm: "All",
    address: 123,
    skills: ['x', "y"],

    [Symbol.iterator]: function() {
        let entries = Object.entries(this);
        let index = 0;

        return {
            next: () => {
                if (index < entries.length) {
                    return {
                        value: entries[index++],
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        };
    }
};

for (let [key, value] of obj1) {
    console.log(`${key}: ${value}`);
}


console.log("#######################################################################")

// method two generator 
var obj2 = {
    usrnm: "All",
    address: 123,
    skills: ['x', "y"],

    *[Symbol.iterator]() {
        for (let [key, value] of Object.entries(this)) {
            yield [key, value]; 
        }
    }
};


for (let [key, value] of obj2) {
    console.log(`${key}: ${value}`);
}
