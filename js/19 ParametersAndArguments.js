function mulTable(number, last){
    for(i = 1; i<=last; i++){
        document.write(`${number} x ${i} = ${number*i}`);
        document.write("<br>");
    }
    document.write("<br>");
}

mulTable(3, 5);

function add(num1, num2){
    document.write(num1 + num2);
    document.write("<br>");
}

add(5, 9);