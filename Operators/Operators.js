// // Arthmatic Operators
// const ArthmaticOperators=(a, b)=>{
//     // Addition
// console.log("addition===>", a + b);
// // // substraction
// console.log("substraction===>", a - b);
// // // multiplication
// console.log("multiplication===>", a * b);
// // // division
// console.log("division===>", a / b);
// // // modulus //  Remainder
// console.log("modulus===>", a % b);
// // // increment
// console.log("increment===>", a++); // a= a+1
// // //  decrement
// console.log("decrement===>", a--); // a= a-1
// };
// ArthmaticOperators(15, 10);



// const asignmentOperator=(a, b)=>{
    // Equal
//     let data = "Exaltech"
//     console.log(data);
// // addition asignment
// console.log("addition==>", (a += b)); // a= a+b
// // substraction asignment
// console.log("substraction==>", (a -= b)); // a= a-b
// // division
// console.log("division==>", (a /= b)); // a= a/b
// // modulus
// console.log("modulus==>", (a %= b)); // a= a%b
// // multiolication
// console.log("multiplication==>", (a *= b)); // a= a*b
// // exponentiation
// console.log("Exponentiation==>", (a **= 4)); // a=2*2*2*2
// };
// asignmentOperator(2, 10);


// camparison Operator
//  const ComparisonOperators=(a, b)=>{
// Equal to
// console.log(a==b);
// Not Equal to
// console.log(a!=b);
// Strict Equality Check
// console.log(a===b); // strictly chech data type as well as values
// Strictly not check equality
// console.log(a!==b);
// Greater than
// console.log(a>b);
// Greater Than equal to
// console.log(a>=b);
// Less Than
// console.log(a<b);
// Less Than equal to
// console.log(a<=b);
//  };
//  ComparisonOperators(10, "10")

// Logical Operators
const LogicalOperators=(a, b)=>{
// AND AND      both condition should be true
console.log(10 >=10 && 20 > 10); // Ture && true = true
console.log(5 >=10 && 9 > 10); // false && false = false
console.log(10 >=10 && 9 > 10); // true && false = false
console.log(5 >=10 && 20 > 10); // false && true = false

// ||

console.log(a<=b || a < b); // True || True = True
console.log( 5 <=10 || 20 < 10); // True || false = True
console.log(20 <=10 || 5 < 10); // false || true = true
console.log(20 <=10 || 20<10); // false || false = false

};
LogicalOperators(5, 11)