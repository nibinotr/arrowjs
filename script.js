const EnterString = () => {
    let input = prompt("Please enter a string:");

    if (input) {
        for (let i = 0; i < input.length; i++) {
            let uppercase = input.toUpperCase();
            document.write(`${i}${uppercase[i]}`); // Corrected syntax here
        }
    } else {
        document.write("No input provided.");
    }
}

// Call the function
EnterString();
