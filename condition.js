//if 
var names = [10, 12, 13]
if (names[0]>1)
{
   console.log("Given Info is wright")
}

// if..else
var movies = ["vikram", "KGF2", "RRR"]
if (movies[0]>0)
{
    console.log("Correct")
}
else
{
    console.log(movies[2])
}

//Else..if
var names = ["siva", "vignesh", "Vicky"]
if(!names){
    console.log("given info is correct")
}
else if(names[0]=="siva")
{
    console.log(names[0])
}
else
{
    console.log("it's wrong")
}

//Nested..if
var plans = ["planA","planB","planC"]
if(plans[2]=="planC")
{
    if(plans.length>1)
    {
        console.log(plans[0])
    }
    else
    {
        console.log("please enter correct value")
    }
}
else
{
    console.log("operation failed")
}

//Switch
var operator = "*"
var val1 = 10;
var val2 = 40;
var output;
switch (operator)
{
    case '+':
        output = val1 + val2;
        break;
    case '-':
        output = val1 - val2;
        break;    
    case '*':
        output = val1 * val2;
        break;
    default:
        output = "Please enter correct value"    
}
console.log(output)