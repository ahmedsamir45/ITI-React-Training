getUserInfo()
function getUserInfo() {
    let name = prompt("Enter your name (letters only):");
    while (!/^[A-Za-z]+$/.test(name)) {
        alert("Invalid name! Please enter letters only.");
        name = prompt("Enter your name (letters only):");
    }

    let phoneNumber = prompt("Enter your phone number (8 digits):");
    while (!/^\d{8}$/.test(phoneNumber)) {
        alert("Invalid phone number! It should be 8 digits.");
        phoneNumber = prompt("Enter your phone number (8 digits):");
    }

    let mobileNumber = prompt("Enter your mobile number (11 digits, starts with 010, 011, or 012):");
    while (!/^01[0-2]\d{8}$/.test(mobileNumber)) {
        alert("Invalid mobile number! It should be 11 digits and start with 010, 011, or 012.");
        mobileNumber = prompt("Enter your mobile number (11 digits, starts with 010, 011, or 012):");
    }

    let email = prompt("Enter your email address (format: 3letters@3numbers.com):");
    while (!/^[a-zA-Z]{3}@[0-9]{3}\.com$/.test(email)) {
        alert("Invalid email address! It should follow the format: 3letters@3numbers.com");
        email = prompt("Enter your email address (format: 3letters@3numbers.com):");
    }

    let color = prompt("Choose a color for the text (red, green, or blue):").toLowerCase();
    while (!["red", "green", "blue"].includes(color)) {
        alert("Invalid color! Please choose either red, green, or blue.");
        color = prompt("Choose a color for the text (red, green, or blue):").toLowerCase();
    }

    let result = `Welcome dear guest ${name}<br>` +
                 `Your telephone number is ${phoneNumber}<br>` +
                 `Your mobile number is ${mobileNumber}<br>` +
                 `Your email address is ${email}`;

    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.color = color;
}