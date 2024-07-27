//Object Creation and Access
const book = {
    title:"hello World",
    Author:"DS MAlIK",
    year:2012
}

console.log(book);
console.log(book.Author);
console.log(Object.keys(book));
console.log(Object.values(book));
console.log(Object.entries(book));

//Object Methods
book.returName = function(){
    return `Books is ${this.title} and author is ${this.Author}`;
}
console.log(book.returName());

book.updateYear = function(years)
{
    return this.year = years
}
console.log(book.updateYear(2012));
console.log(book.year);

//nestedObjects

const obj = {
    obj1 : {
         obj2:{
            name : "faiqa"
         }
    }
}
console.log(obj.obj1.obj2.name);

const library = [
    {
        id:2,
        name : "English"
    },
    {
        id:3,
        name:"Maths"
    },
    {
        id:4,
        name:"science"
    }
]
console.log(Object.keys(library));
console.log(Object.values(library));

for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

        