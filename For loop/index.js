// Syntax
// for (initialization; condition; increment / decrement){
// statement1;
// statement2;
// statement3;
// statement4;
//}

// // Example
// for (let i = 1; i <= 10; i++){
// console.log(i, "code will be executed if the given condition is ture");
// }
// console.log("out of loop");

// Example
// // alert("assalam u alikum");
// for (let exercise = 1; exercise <= 3; exercise++){
//     console.log("exercise", exercise);
//     for(let rep=1;rep<=5;rep++){
//         console.log("repitition 🦾", rep);
//     }
// }
// Exercise 1
// Rep1
// Rep2
// ..
// Rep5
// Exercise 2
// Rep1
// Rep2
// ..
// Rep5
// Exercise 3
// Rep1
// Rep2
// ..
// Rep5

// Dynamic Value For Loop To Be Repaeted
var anyNumber = prompt("Please enter a number");

for (let i = 1;i <= anyNumber; i++) {
    console.log("i ", i);
}