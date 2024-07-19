//operators
// add ,subtract , multiply,divide , remainder 

function calculation(a,b)
{
  console.log("Addition:",a+b);
  console.log("Subtraction",a-b);
  console.log("Multiply",a*b);
  console.log("divide",a/b);
  console.log("remainder",a%b);

}

calculation(9,3)

function comparison(a,b) {
    console.log(a<b);
    console.log(a>b);
    console.log(a<=b);
    console.log(a>=b);
    console.log(a===b);
    console.log(a==b);
}

comparison(2,"2") //==,<=,>= evaluated true

function logicalOperator(a,b)
{
     if(a<0 && b<0)
     {
        console.log("both are negative");
     }
     else if(a<0 || b<0)
     {
           console.log("one of them is negative");
     }
     else if(!a)
     {
        console.log("no parameter given");
     }
     else{
        console.log("Okayy");
     }
}

logicalOperator(1,2);
logicalOperator(-1,2);
logicalOperator(-1,-2);
logicalOperator("",2);
let a = 5;
let positiveNum = (a<0)? 'No':'yes';
console.log(positiveNum);