let input;
input = 2;

switch(input){
    case 1:
    case "y":
    case "yes": 
        document.write("Continue....");
        break;
    case 0:
    case "n":
    case "no": 
        document.write("End....");
        break;
    default:
        document.write("Invalid Input!");
        break;
}