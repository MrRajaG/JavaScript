function add(){
    if(arguments.length == 0){
        console.log("No arguments passed!");
    }
    else{
        let sum = 0;
        for(let i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        document.write(sum + "<br>");
    }
}
add();
add(3, 5);
add(4, 8, 1);
add(2, 8, 1, 9);