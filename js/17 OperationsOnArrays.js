let book1 = ["Math", "Physics", "Biology", "Computer"];
let book2 = ["English", "Urdu", "Islamiyat"];
// console.log(book.length);

// book.push("English");
// console.log(book);

// book.unshift("English");
// console.log(book);

// book.pop();
// console.log(book);

// book.shift();
// console.log(book);

// book.splice(1, 1);
// console.log(book);

// let pos = book.indexOf("Biology");
// console.log(pos);

// console.log(Array.isArray(book));

// let text = "My name is Muhammad Taha";
// let wordArray = text.split(" ");
// console.log(wordArray);

// let wordArray = book.join(",");
// console.log(wordArray);

// let newBook = book1.concat(book2);
// console.log(newBook);

// let bookWithPages = [["Math", 300], ["Physics", 200], ["Biology", 250]];
// console.log(bookWithPages[1][0]);

// for(let i = 0; i < book1.length; i++){
//     console.log(`Element ${i} is ${book1[i]}\n`);
// }

book1.forEach(myFunction);

function myFunction(value){
    console.log(value);
}