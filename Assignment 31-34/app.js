//task 1
//var a = new Date();
//document.write(a)


//task 2

//var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//var now = new Date();
//var thisMonth = months[now.getMonth()]; 
//document.write("Current month: ", thisMonth)


//task 3

//var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
//var now = new Date(); 
//var theDay = now.getDay(); 
//var nameOfToday = dayNames[theDay];
//document.write("Today is ",nameOfToday) 


//task 4

//var user = prompt("Enter day")
//var a = "sat";
//var b = "sun";
//if(a === "sat"){
  //  alert("It's Funday")
//} 
//else if(b === "sun"){
  //  alert("It's Funday")
//}
//else{
  //  alert("Its not a weekend")
//}


//task 5

//var date = prompt("Enter date");
//var b = new Date();
//if(b){
  //  alert("First fifteen days of the month");
//}
//else{
  //  alert("Last days of the month")
//}


//task 6

//var date = new Date();
//var a = date.getTime();
//var b = date.getMinutes();
//document.write("Current Date: "+date,"<br>Elapsed milliseconds since january 1,1970: ",a,"<br>Elapsed minutes since january 1,1970: "+b)
 

// task 7

//var user = prompt("Enter Hour")
//var a = new Date();
//var b = a.getHours();
//if(b){
 //   alert("It's PM")
//}
//else{
  //  alert("It's AM")
//}


//task 8

//var month = 11; // december
//var d = new Date(2020, month + 1, 0);
//document.write("Later Date: ",d);


//task 9

//var a = new Date("April 24,2020");
//var b = a.getDay("May 23,2020");
//var diff = a - b;
//document.write(+diff, "  Days has been passed since 1st Ramadan,2015")


//task 10

//var a = new Date("dec 05,2015");
//var b = a.getTime();
//document.write(a,"<br>"+b," seconds had passed since beginning of 2015")

//task 11

//var a = new Date();
//var newdate = a.getUTCHours()
//document.write(a,"<br>  "+newdate,"  Fri Jun 19 2020 00:53:12 GMT+0500 (Pakistan Standard Time")

//task 12

//var a = new Date();
//var b = new Date("Dec 05,1915")
//document.write(a,"<br>"+b);


//task 13

//var dob = prompt("enter your birth","dec 05,2000")
//var dob = new Date("dec 05,2000");
//var dobmili = dob.getTime();
//var Today = new Date();
//var Todaymili  = Today.getTime();
//var diff = Todaymili - dobmili;
//var diffyear = diff/(1000*60*60*24*30*12);
//var accuage = Math.floor(diffyear)
//document.write(dob,accuage)


//tassk 14 bill

var a = prompt("Enter your name");
var b = prompt("Enter your month");
var c = 410;
var d = 16;

var e = c * d;
var f = 350;
var g = e  + f;

document.write("Customer Name: "+a,"<br>Month: "+b,"<br>Number of units: "+c,"<br>Charges per unit: "+d,"<br>Net Amount payale (with in Due Date): "+e,"<br>Late payment surchrage: "+f,"<br>Gross Amount payable (after Due Date): "+g);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 