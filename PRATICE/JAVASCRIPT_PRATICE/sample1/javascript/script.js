var username = prompt("Enter your name:");
var message = "Welcome, " + username + "!" + " I am alexa and I am here to help you.";
alert(message);


// Algorithm to solve the follwing problem :-
//      1. Create a global variable to store the count
//      2. Listen for clicks on the increment button
//      3. Increment the count variable when the button is clicked
//      4. Change the count-el in the HTML to reflect the new count


// using a global variable
let count = 0;
console.log(count);

function increment() {
    count = count + 1;
    document.getElementById("count_people").innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called 

function save()
{
    let temp = document.getElementById("count_people").innerText;
    let prev_log = document.getElementById("logs").innerText;
    let result = prev_log + " + " + temp; 
    document.getElementById("logs").innerText = result;
    count = 0;
    document.getElementById("count_people").innerText = 0;
    
}

