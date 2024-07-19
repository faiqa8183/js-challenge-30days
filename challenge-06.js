//Arrays
let myArray = [1,2,3,4,5]
console.log(myArray);

console.log(myArray[0]);
console.log(myArray[myArray.length-1]);

myArray.push(7);
console.log("push op",myArray);

myArray.pop()
console.log("pop op",myArray);

//shift and unshift 
let arraytwo = [1,2,3,4,5]
let temp = arraytwo.shift()
console.log(temp);
console.log(arraytwo);

arraytwo.unshift(4);
console.log(arraytwo);

//Array Methods

//map
let ArrayOne = [1,2,3]
let doubled = ArrayOne.map((num)=>( num+num))
console.log("doubled using map  "+doubled);

//filter
let evens = ArrayOne.filter((num)=>(num%2==0))
console.log("evens  "+evens);

//reduce 
let reduced  = ArrayOne.reduce((acc,num)=>{return acc+num},0)
console.log("sum reduced ",reduced);

console.log("logged using for ");
for(let i = 0 ; i < myArray.length ; i++)
{
    console.log(myArray[i]);
}


console.log("logged using for Each ");

myArray.forEach((element) => {
    console.log(element);
});

// /2D array

let matrix = [
    [1,2,3,4,5],
    [5,7,6,5,4],
    [9,8,7,6,5]
]

console.log(matrix);