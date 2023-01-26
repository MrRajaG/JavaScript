let car = "Audi";   // Global variable
function add(){
    let result = 33;    // Local variable

    console.log(result);
    console.log(car);   // No error
}

add();

console.log(result);    // Error

