let str = "Taha";
console.log(str);

// let greet = `Hi ${str}`;
// console.log(greet);

let str2 = "Muhammad\nTaha";
console.log(str2);

let str3 = "Muhammad\tTaha";
console.log(str3);

let str4 = "Muhammad\\Taha";
console.log(str4);

let str5 = "Muhammad\"Taha";
console.log(str5);

console.log(str.length);

console.log(str[2]);

let str6 = "Muhammad";
let str7 = "Taha";
console.log(str6 + " " + str7);

let str8 = str6.concat(" ", str7);
console.log(str8);

let str9 = "My name is Muhammad Taha. I study at NUML.";
let subStr = str9.substr(11, 13);
let subString = str9.substring(11, 24);
console.log(subStr);
console.log(subString);

let pos = str9.indexOf("study");
console.log(pos);

let str10 = "    My name is Muhammad Taha. I study at NUML.     ";
let trimmed = str10.trim();
console.log(trimmed);

let upper = str9.toUpperCase();
console.log(upper);
let lower = str9.toLowerCase();
console.log(lower);

let replacedStr = str9.replace("study", "don't study");
console.log(replacedStr);

let includedStr = str9.includes("Taha");
console.log(includedStr);