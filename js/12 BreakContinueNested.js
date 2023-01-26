outer: for(let counter = 0; counter < 10; counter++){
    document.write(counter);
    document.write("<br>");

    inner: for(let counter2 = 0; counter2 < 2; counter2++){
        if(counter == 5){
            continue;
        }
        if(counter == 8){
            break outer;
        }
        document.write("Taha");
        document.write("<br>");
    }
}