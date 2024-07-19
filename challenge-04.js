//loops

function printNumbers()
{
    let i ;
    for (i = 1 ; i<=10 ; i++)
    {
       console.log(i);
    }
}
printNumbers();

console.log("printing table");
function printtable(number)
{
    let i ;
    for (i = 1 ; i<=10 ; i++)
    {
       console.log(number*i);
    }
}
printtable(5);

//While loop
function Summ()
{
    let i = 0 ;
    let sum = 0 ;
    while(i<=10)
    {
        sum = sum + i;
        i++;
        
    }
    console.log("sum",sum);
}
Summ()

function ReverseCount()
{
    let i = 10 ;
    let sum = 0 ;
    while(i>=0)
    {
        console.log(i);  
        i--;
        
    }
    
}
ReverseCount()


console.log("doWhile Started");
let i = 0 ;
do
{
  console.log(i);
  i++;
}
while(i<=10)


//factorial of a num
let num = 3 
let fact = 1;
let j = 1;
do{
    fact = fact*j;
    j++; 
    
}
while(j<=num)

console.log(`fact of ${num} is`,fact);

//pattern printing
for (let k = 1 ; k<=num ; k++)
{
    let row =""
    for(let c = 1 ; c<=k ;c++)
    {
        row+="*"
    }
    console.log(row);
}
console.log("next");

//continue
for(let l = 1 ; l<=10;l++)
{
    if (l==5)
    {
        continue;
    }
    else
    {
        console.log(l);
    }

}

// break
for(let l = 1 ; l<=10;l++)
    {
        if (l==5)
        {
            break;
        }
        else
        {
            console.log(l);
        }
    
    }