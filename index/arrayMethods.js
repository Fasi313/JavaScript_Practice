const letters = ["a","b", "c", "d", "e",  "f", "g", "h", "i", "j","k", "l","i", "m", "n", ];

// const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 200, 20 ]
// console.log(letters.pop() ,"-->", letters);
// console.log(letters.push("abc") ,"-->", letters);
// console.log(letters.shift("") ,"-->", letters);
// console.log(letters.unshift("1000", "100", "10","1",{value: 100}, [1,2,3,4,5]) ,"-->", letters);
// console.log(letters.find((item)=> item === "z"));
// console.log(letters.findIndex((item)=> item === "y"));
// console.log(letters.includes("y"));
// console.log(letters.indexOf("z"));
// console.log(nums.some((item)=> item > 10));
// console.log(nums.every((item)=> item > 10));
// console.log(letters.slice(5, 10));
// console.log(letters.splice(5, 1, 100, 200, 300, 400), "--->", letters);

// console.log(letters.filter((item)=> item ===  "i"));
const products = [
    {category: "shoes", size: 7, color: "Black", brand: "Adidas", id:1, price: 2000},
    {category: "shoes", size: 8, color: "Black", brand: "Puma",id:2, price: 4000},
    {category: "shoes", size: 9, color: "White", brand: "puma", id:3, price: 3000},
    {category: "shoes", size: 8, color: "Red", brand: "Nike", id:4, price: 4000},
    {category: "flipper", size: 9, color: "White", brand: "adidas", id:5, price: 2000},
    {category: "shoes", size: 7, color: "Red", brand: "nike", id:6, price: 7000},
];

// console.log(
    // products.filter((item)=> item.color === "Black" && item.brand === "Puma"));

    // console.log(products.filter((item)=> item.id !== 5));

    // console.log(products.map((item)=> item.size + 0.5));

    // const arr1 = ["a", "b"];
    // const arr2 = ["c", "d"];
    // console.log(arr2.concat(arr1));

    // const output = products.sort ((itemOne, itemTwo) => 
    // itemOne.brand > itemTwo.brand ? 1 : -1
    // );
    // console.log(output);

    // const output =  products.map(
    //     (item) => item.brand === "Adidas" ||item.brand === "adidas" 
    //     ? item.price * 2 
    //     : item.price
    //     );
    // //     console.log(output);

    // const output = products.sort((elemOne, elemTwo)=>
    // elemOne.brand.toLowerCase() > elemTwo.brand.toLowerCase() ? 1 : -1
    // );
    // console.log(output);

    // const output = products.reduce((accu, current) =>  {
    //     return accu + current.price * 2;
    // }, 100000);
        
    // console.log(output);

    // console.log(products.reverse());

    // console.log(Array.from("ABCDEFG"));

    // console.log(nums.fill("ABC", 2, 5));

    // console.log(nums.join());

    // console.log(Array.isArray(Object));

    // console.log(letters.toString());

    // console.log(letters.forEach((item, index) => console.log(`${index} ${item}`)));
     const nums = [2, 3, 5, 6, 8, 9, 13, 15 , 20]
     const output = nums.filter((item) => item >= 8)
    //  .map((item) => item * 2)
    //  .reduce((acc, cur)=> acc + cur , 0)
     console.log(output);