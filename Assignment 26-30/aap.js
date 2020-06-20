//task 1

//var a = 3.45214;
//var round = Math.round(a);
//var c = "Round off value: "
//var d = Math.floor(a);
//var e = Math.ceil(a);

//document.write("Number: "+ a,"<br>"+c,round,"<br>Floor value:"  +d,"<br>Ceil value:" +e);



//task 2

//var a = -2.673;
//var round = Math.round(a);
//var c = "Round off value: "
//var d = Math.floor(a);
//var e = Math.ceil(a);

//document.write("Number: "+ a,"<br>"+c,round,"<br>Floor value:"  +d,"<br>Ceil value:" +e);


//task 3

//var a = -4;
//var b = Math.abs(a);
//var c = -5;
//var d = Math.abs(c);
//document.write("<br>The absolute value of is -4 is: "+b,"<br>The absolute value of is -5 is: ",d)


//task 4

//var a = 4;
//var b = (Math.random() *4) + 1;
//var c = 6;
//var d = (Math.random() *6) + 1;
//document.write("<br>Random dice value: ",b,"<br>Random dice value: ",d);


//task 5

//var a = prompt("Enter coin toss");
//var toss =  Math.random() *2;
//var floor = Math.floor(toss)
//if(floor === 0){
  //  alert("tails")
//}
//else{
  //  alert("heads")
//}


//task 6

//var a = "Random number value between 1 and 100 is: ";
//var b = Math.floor(Math.random() *100);
//document.write(a," "+b);


//task 7

//var a = prompt("Enter your weight in kilograms")
//var b  = 50;
//var value = parseFloat(b)*1.2;
//document.write("The weight of user input is: " + value, "kg")
  
//task 8

var x = prompt("Enter a number between 1 to 10 ")
var y = Math.floor(Math.random() * 10 + 1); 
      
var guess = 1; 
  
if(x == y) 
{     
   alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
           + guess + " GUESS "); 
} 
else if(x > y)  
{     
   guess++; 
   alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
} 
else
{ 
   guess++; 
   alert("OOPS SORRY!! TRY A GREATER NUMBER") 
} 
 //complete all task