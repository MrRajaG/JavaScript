// alert("Hello!");

// let age = prompt("Enter your age: ", 18);
// if(age != null){
//     document.write(`Your age is ${age}`);
// }
// else{
//     document.write("Empty Field!");
// }

let response = confirm("Are you sure you want to delete?");
if(response){
    document.write("Deleted");   
}
else{
    document.write("Not deleted");
}