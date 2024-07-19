//conditonals

function checkPositive(a)
{
    if (a<0)
    {
        console.log(`${a} is -ve`);
    }
     else if (a>0)
     {
        console.log(`${a} is +ve`);
     }
     else if(a==0)
     {
        console.log(`${a} is +ve`);
     }
     else
     {
        console.log(`${a} is mad`);
     }
}

checkPositive(7);
//age for vote
let age = 18;
let eligible = (age>=18)?"user is eligible to vote":"Not Eligible"
console.log(eligible);

//Largest of 3 num

function  Largest(a,b,c)
{
    if (a>b && a>c)
    {
        console.log(`${a} is largest`);
    }
    else if(b>a && b>c)
    {
        console.log(`${b} is largest`);
    }
    else if(c>a && c>b)
    {
        console.log(`${b} is largest`);
    }
    else if (a==b && a>c)
    {
        console.log(`${a},${b} are same and largest`);
    }
    else if (a==c && a>b)
    {
            console.log(`${a},${c} are same and largest`);
    }
    else if (c==b && c>a)
    {
                console.log(`${c},${b} are same and largest`);
    }
    else 
    {
        console.log("all are equal");
    }

}

Largest(2,2,2);
Largest(2,3,4);
Largest(2,2,1);
Largest(1,2,2);

//days of week
let dayNum = 7;
let dayName;
switch (dayNum) {
    case 1:
        dayName = "Monday"
        break;
    case 2:
        dayName = "Tuesday"
        break;
    case 3:
        dayName = "Wednesday"
        break;
    case 4:
        dayName = "Thursday"
        break;
    case 5:
        dayName = "Friday"
        break;
    case 6:
        dayName = "Saturday"
        break;
    case 7:
        dayName = "Sunday"
        break;

    default:
        dayName="Invalid";
}
console.log(dayName);

//Ternary 

let even = 3;
let result = (even%2==0)?"even" : "odd"
console.log(result);

//let leapNum = 2019;
function leapNumm(leapNum)
{
if (leapNum%4==0)
{
    if (leapNum%100===0)
    {
        if(leapNum%400===0)
        {
           return true;
        }
        else
        {
            return false; 
        }
    }
    else{
        return true;
    }
   
}
else
{
    return false;
}
}

console.log(leapNumm(2019));
console.log(leapNumm(2016));