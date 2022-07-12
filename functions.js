//Keyword Function

function names(data){
if(data[0]==6) 
{
    console.log("Correct")
}
}
names([6, 5, 8])

//Anonymous Function
var names = function (data)
{
  if(data[0]==6) 
  {
      console.log("Correct")
  }
  }
  names([6, 5, 8])

  //Arrow Function
  var names = (data) =>
  {
    if(data[0]==6) 
    {
        console.log("Correct")
    }
    }
    names([6, 5, 8])