//ES6+ Features
//template literal

const name = "FAIQA";
const age = 20;
const Result = `I'm ${name} and my age is ${age}`;
console.log(Result);
//multiline string

const Stringy = `I'm ${name}
and AGE is ${age}`;
console.log(Stringy);

//Destructuring 
const Array = [1,2,3,4,5,6,7,8];
const[first,,,,,,,last]= Array
console.log("First",first);
console.log("Last",last);

//Another technique
const [second,...rest] = Array
console.log("Second Method",second);
console.log("REST",rest);

const lastAgain = rest[rest.length-1];
console.log("LASTAGAIN",lastAgain);

//Object destructuring
const object = { firstName: 'John', lastName: 'Doe', age: 30 };

// Destructuring to get the first and last properties
const { firstName: firstie, lastName: lastie } = object;

console.log(firstie); // Output: John
console.log(lastie);  // Output: Doe

//Substitute
const key = Object.keys(object);
const [firstkey] = key
const lastkey = key[key.length-1]

console.log(object[firstkey]);
console.log(object[lastkey]);

//spread and rest operators
let array = [1,2,3,4]
let newarray = [...array,5]
console.log(newarray);
//rest
function sum(...rest)
{
  
  return rest.reduce((acc,curr)=>acc+curr,0);
}
console.log(sum(2,3,4)); 
//enhnced object
const namee = "Alice";
const agee = 28;

const person = {
  namee,
  agee,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

console.log(person);


person.greet();

// computed property
