// function add(num1, num2){
//     return num1 + num2;
// }
// let c = add(5, 9);
// document.write(c);

function compare(a, b){
    if(a > b){
        return 1;
    }
    else if(a < b){
        return -1;
    }
    else{
        return 0;
    }
}
let x = compare(1, 2);
document.write(x);