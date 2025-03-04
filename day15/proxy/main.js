
const handler = {
    set(target, prop, value) {
        if (prop === 'name') {
            if (typeof value !== 'string' || value.length <= 7) {
                throw new Error('Name must be a string with more than 7 characters.');
            }
        } else if (prop === 'address') {
            if (typeof value !== 'string') {
                throw new Error('Address must be a string.');
            }
        } else if (prop === 'age') {
            if (typeof value !== 'number' || value < 25 || value > 60) {
                throw new Error('Age must be a number between 25 and 60.');
            }
        } else {
            throw new Error(`Invalid property: ${prop}`);
        }

        target[prop] = value; 
        return true; 
    }
};

const person = new Proxy({}, handler);


document.getElementById('personForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const age = parseInt(document.getElementById('age').value);

    try {
        
        person.name = name;
        person.address = address;
        person.age = age;

    
        document.getElementById('output').textContent = JSON.stringify(person, null, 2);
    } catch (error) {
        alert(error.message);
    }
});
