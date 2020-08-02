const person = function (name) {
    if (name) {
        alert(`Your name is ${name}`);
    } else {
        console.error("Enter a valid input");
        alert(`Sorry your input was not valid.
        Refresh the page and try again.`);
    }
}
let name = window.prompt("Please enter your name: ");
person(name)
