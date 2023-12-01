num = prompt("Enter a number: ");

function check_Even_Odd(num) 
{
    // if else statement

    if (num%2 == 0)
    {
        console.log("Even number");
    }
    else
    {
        console.log("Odd number");
    }
}

check_Even_Odd(num);

var marks = prompt("Enter your marks: ");

function check_Grade(marks)
{
    // if else if statement

    if (marks >= 80)
    {
        console.log("A+");
    }
    else if (marks >= 70)
    {
        console.log("A");
    }
    else if (marks >= 60)
    {
        console.log("A-");
    }
    else if (marks >= 50)
    {
        console.log("B");
    }
    else if (marks >= 40)
    {
        console.log("C");
    }
    else if (marks >= 33)
    {
        console.log("D");
    }
    else
    {
        console.log("F");
    }
}

check_Grade(marks);