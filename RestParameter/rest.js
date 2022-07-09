// Rest Parameter
// A rest parameter allows a function to indefinite parameter and stores in an array
// It must be in the last
// It introduced in ES
const RestParameter = (a, b, ...data)=>{
    console.log(data);
    console.log(a);
    console.log(b);
    console.log(data[2]);
    let c = data[2];
    console.log(c);
};
RestParameter(10, 20, 30, 40, 50, 60, 70);

//================================================================================
//Template Literal 

const TemplateLiteral = (name,age)=>{
console.log(`This is ${name} \n ${age} year old`);
};
TemplateLiteral("Fasi",30);