// just a sample menu nothing special though


alert("Welcome to main menu:\n1. Add\n2. Edit\n3. Delete\n4. Quit");
option = prompt("Enter a number between 1 and 3");
switch (option) {
    case 1:
        console.log("Addition in progress...");
        break;
    case 2:
        console.log("Editing in progress...");
        break;
    case 3:
        console.log("Deleting in progress...");
        break;
    case 4:
        console.log("Quitting...");
        break;
    default:
        console.log("Invalid option");
        break;
}