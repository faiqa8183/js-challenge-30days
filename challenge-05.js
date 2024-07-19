//functions 
function evenodd(num)
{
    if(num%2==0)
    {
        console.log(`${num} is even`);
    }
    else
    {
        console.log(`${num} is odd`);
    }
}
evenodd(5);
//squareFun
function SquareFun(num)
{
    return (num*num);
}

let result = SquareFun(2);
console.log(result);

function max(num1,num2)
{
    if(num1>num2)
    {
        console.log(`${num1} is greater`);
    }
    else
    {
        console.log(`${num2} is greater`);   
    }
}

max(3,4);

function Concat(strOne,strtwo)
{
    return strOne+strtwo;
}

let concat = Concat("faiqa ","Malik")
console.log(concat);

//Arrow funtions
let sumArrow = (numOne,numTwo) => {return numOne+numTwo}
console.log(sumArrow(2,3));  

let checkstring = (str,serach) => {
    for (let i = 0 ; i< str.length ; i++){
        if (str[i]===serach)
        {
            return true;
        }
        
    }
   return false;
}
console.log(checkstring("faiqa","z"));   

//default params

let nameArrow = (name,age=5)=>{console.log(`${name} has age ${age}`);}
nameArrow("faiqa");
nameArrow("faiqa",2);

let calproduct = (parm1,parm2)=>{return parm1*parm2}
console.log(calproduct(2,3));