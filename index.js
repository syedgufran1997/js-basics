/*var profession = "Engineering";

var reverse = "";
for (var i = 0; i < profession.length; i++) {
  reverse = profession.charAt(i) + reverse;
}
console.log(reverse);

// control loops(if statement)


var ihavemobile = true;
if (ihavemobile) {
  console.log("this expression is true");
  document.write("i have oneplus");
}


var mynum = 8;

if (mynum == 10) {
  console.log("my num equal to 10");
  document.write("my num equal to 10");
} else if (mynum < 10) {
  console.log("my num is less than 10");
}

var youlikemeat = false;

if (youlikemeat) {
  console.log("here is meat menu");
} else {
  console.log("we have veg menu");
}


var myage = 9;
if (myage > 30) {
  console.log("you are over 30!");
} else if (myage > 20) {
  console.log("you are over 20!");
} else if (myage > 10) {
  console.log("you are over 10!");
} else {
  console.log("you are not even 10!");
}

var myage = 15;

if (myage >= 18 || myage <= 30) {
  console.log("you are eligible!");
} else {
  console.log("You are not eligible!");
}

var age = 8;
while (age < 10) {
  console.log("your age is less than 10");
  age++;
}
document.write("you are now over 10");

var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++) {
  console.log("This is link number" + i);
}
document.write("All links are looped");

for (i = 0; i < 10; i++) {
  if (i === 2 || i === 5) {
    continue;
  }
  console.log(i);

  if (i === 8) {
    break;
  }
}
console.log("break loop");

var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {
  links[i].className = "link-" + i;
}

function getaverage(a, b) {
  var average = (a + b) / 2;
  console.log(average);
  return average;
}
var myResult = getaverage(7, 11);

function logresult() {
  console.log("the average is  " + myResult + " inside the function");
}
logresult();

var a = "5";
var b = 5;

if (!isNaN(a)) {
  console.log("answer is " + a / b);
}
else {
  console.log("answer is " + a / b);
}

var mystring = 'i\'m a "fun" ninja string';

if (mystring.paints
  Of("ninja") === -1) {
  console.log("the word ninja is not in string");
} else {
  console.log("the word is at " + mystring.paints
  Of("ninja"));
}

var mycar = new Object();
mycar.driver = "tony";
mycar.speed = 70;
mycar.drive = function() {
  console.log("driving");
};

mycar.drive();





// const myBooks = [
//   {
//     name: "Joy ride",
//     pages: 50,
//     price: 130,
//   },
//   {
//     name: "Happy ride",
//     pages: 50,
//     price: 140,
//   },
//   {
//     name: "Long ride",
//     pages: 50,
//     price: 150,
//   },
//   {
//     name: "Bore ride",
//     pages: 60,
//     price: 160,
//   },
//   {
//     name: "Instant ride",
//     pages: 50,
//     price: 190,
//   },
//   {
//     name: "Speed ride",
//     pages: 70,
//     price: 180,
//   },
//   {
//     name: "Cool ride",
//     pages: 50,
//     price: 170,
//   },
// ];

// const ages = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22,
//   23,
//   25,
//   26,
//   27,
//   28,
//   29,
//   30,
// ];



// For Of loop in es6 with array and strings

//Array
let colors = ["red", "blue", "green"];
for (let paints in colors) {
  console.log(colors[paints]);
}

// String 
let name = "Gufran";
for (let myname of name) {
  console.log(myname);
}

const circle = ["round", "flat", "hallow"];
for (let key in circle) {
  console.log(key, circle[key]);
}

console.log(myBook.length);
console.log(myBook[6]);
console.log(myBook[5]);


// Arrays methods
const numbers = [2, 4, 6, 8, 9, 10];
// numbers.unshift(2, 4);
// numbers.shift();
// numbers.splice(3, 0, 1);


console.log(numbers);
var mycar2 = {
  maxspeed: 70,
  driver: "tony",
  drive: function () {
    console.log("now driving");
  },
};
console.log(mycar2.driver);
console.log(mycar2.maxspeed);
mycar2.drive();
*/

// for (let i = 0; i < myBook.length; i++) {
//   console.log(myBook[i]);
// }

// forEach
// myBooks.forEach(function (company) {
//   console.log(company);
// });

// filter
// const result = ages.filter(function (age) {
//   if (age <= 30) {
//     return true;
//   }
// });

// const result = ages.filter((age) => age <= 30);
// console.log(result);

// const result = myBooks.filter((Books) => Books.price >= 170);
// console.log(result);

// map
// const result = myBooks.map((books) => `${books.name} ${books.pages}`);

// const result = ages.map((age) => age * 2);
// console.log(result);

// Sort
//sorting price books for low to high
// const sortmyBooks = myBooks.sort((a, b) => (a.price > b.price ? 1 : -1));
// console.log(sortmyBooks);

// const result = ages.sort((a, b) => b - a);
// console.log(result);

// Reduce
// const result = ages.reduce((total, age) => total + age, 0);

// const result = myBooks.reduce(
//   (total, book) => total + (book.price - book.pages),
//   0
// );
// console.log(result);

const person = [
  { name: "aaa", age: 20, street: "rmg" },
  { name: "bbb", age: 21, street: "cpt" },
  { name: "ccc", age: 22, street: "blr" },
  { name: "ddd", age: 23, street: "mys" },
  { name: "eee", age: 24, street: "kar" },
  { name: "fff", age: 25, street: "tn" },
];

// console.log(person.name[0]);

// const result = person.map((value) => value.name);
// console.log(result);

// for (let key in person) {
//   console.log(key, person[key]);
// }

// const result = person.sort((a, b) => (a.person > b.person ? 1 : -1));
const result = person.reduce((total, umar) => total + umar.age, 0);
console.log(result);
