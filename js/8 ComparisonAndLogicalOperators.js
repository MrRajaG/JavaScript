// == (Equal to)
// === (Equal value and type)
// != (Not equal to)
// !== (Not equal value or not equal type)
// > (Greater than)
// < (Less than)
// >= (Greater than or equal to)
// <= (Less than or equal to)
// && (And)
// || (Or)
// ! (Not)

let age = 18;
let voterId = "No";

if(age >= 18){
    if(voterId == "Yes"){
        console.log("You can vote.");
    }
    else{
        console.log("Get your voterID.");
    }
}
else{
    console.log("you cannot vote.");
}

// Ternary operator
let loggedIn = 0;
let option = loggedIn == 1 ? "yes" : "no";

console.log(option);

// Null operator
let user;
// user = "Taha";

console.log(user ?? "Guest");