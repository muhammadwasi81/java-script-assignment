

//Assignment 38 to 67 ////////

//task1

// function power(a,b){
//     var a = prompt("Enter the value of a ");
//     var b = prompt("Enter the value of b ");
//     var c = Math.pow(3,4);
//     alert(c)

// }
// power()

//task 2


// function leapyear(year)
// {
//     var a = prompt("Enter any year")
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// alert(leapyear(2016));
// alert(leapyear(2000));
// alert(leapyear(1700));
// alert(leapyear(1800));
// alert(leapyear(100));


//task 3

// function aot(a,b,c){
// var a = 10; 
// var b = 11; 
// var c = 12; 
// var s = (a + b + c)/2;
// var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
// document.write("The Area Of Triangle is: " +area);
// }

// aot()



//task 4

// var a = +prompt('Enter marks of first subject');
// var b = +prompt('Enter marks of second subject');
// var c = +prompt('Enter marks of third subject');
// var per;
// var avg;
// var totalmarks = 300;
// var obtmarks;
// function percentage(){
//     obtmarks = ((a + b + c)/totalmarks)*100;
//     return obtmarks;
// }
// function average(){
//     avg = (a + b + c)/3
//     return avg;
// }
// function main(){
//     document.write("Your Percentage is: " + " " +percentage() + "<br>");
//     document.write("Your Average is: " + " " +average() + "<br>");
// }
// main()






//task 5


// function code(){
//     var a = 'I will be bollionear inshahallah'
//     var b = a.indexOf('b')
//     document.write("The charater at index is: " +b)
// }
// code()



//task 6

// function hasVowels(strings){
// var strings = ["Cristiano Ronadlo is one of the best footballer of all time"];

// strings = strings.map(string => string.replace(/[aeiou]/g, ''));

// document.write(strings);
// }
// hasVowels()


//task 7

// function add() {
//     var text = "Pleases read this application and give me gratuity"
//     var count = 0;

//     switch (text) {
//         case 'a':
//             count++
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//         return 1;
//         default:
//          return 0;  
//     }
// }
// add()


//task 8

// var a = prompt("Enter distance in kilometers");
// var m;
// var cm;
// var ft;
// var i;
// function meters(){
//     var m = a * 1000;
//     return m;
// }
// function centimeters(){
//     var cm = a /10000;
//     return cm;
// }
// function feets(){
//     var ft = a * 3281;
//     return ft;
// }
// function inches(){
//     var i = a * 39370;
//     return i;
// }
// function main(){
//     document.write("The distance is " + meters() + " meters" + "<br>")
//     document.write("The distance is " + centimeters() + " cm" + "<br>")
//     document.write("The distance is " + feets() + " feet" + "<br>")
//     document.write("The distance is " + inches() + " inches" + "<br>")
// }
// main()


//task 9

// function Salary() {
    
//     var hours = prompt('Enter the working hours')
//     var salary = prompt('Enter your current salary')
    
//     if (hours > 40) {
//         regtime = (salary * 40)
//         overtime = ((salary * 12) * (hours - 40))
//         salary = (regtime + overtime)
//         document.write("The Employees total Salary is = " + salary);
//        }
//     else {
//         regtime = salary * hours
//         overtime = 0;
//         salary = regtime
//         document.write("The Employees total salary is = " +salary);
//         }
//     }

// Salary()    




//task 10

// function cash(){
// var a = prompt("Enter the no of amount");
// var no = parseInt(a);
// var hun = Math.floor(no/100);
// var no = no - hun * 100;
// var fif = Math.floor(no/50);
// var no = no - fif * 50;
// var ten = Math.floor(no/10);
// var no = no - ten * 10;
// var five = Math.floor(no/5);
// var no = no - five * 5;
// var two = Math.floor(no/2);
// var no = no - two * 2;
// var one = Math.floor(no/1);
// document.write("Hundreds=" +hun+ "<br>Fifties=" +fif+  "<br>Tens=" +ten+ "<br>Fives=" +five+ "<br>Twos=" +two+ "<br>Ones=" +one);
// }
// cash()


// // var twe = Math.floor(no/20);
// // var no = no - twe * 20;
// "<br>Twenties=" +twe+ //question ki need nhi hai to remove krdia 20Rs ko

// Done with 38 - 44////////////////////////////////////////////////


//<!------------------------------------------------------------------>//



//ASSIGNMENT 44 - 48/////////


//task 1

// function show(){
//     var b = document.getElementById('link');
//     b = alert('Hello world');
// }


//task 2

// function buy(){
//     var a = document.getElementById('mobile');
//     a = alert('Thanks for purchase a phone from our shop')
// }

//task 3

// function del(){
//      document.getElementsByTagName("tr")[4].remove();
// }


//Task 4

// function bigImg(){
//     var a = document.getElementById('img');
//     a.src = 'data:image/jpeg;base64,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'
//     img.className = 'wasi'
// }   
// function veryBig(){
//     var b = document.getElementById('img');
//     b.src = 'data:image/jpeg;base64,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'
//     img.className = 'wasi'
// }


//Task 5



// var input = document.getElementById('box')

// function add(){
//     input.value = parseInt(input.value) +1
// }
// function sub(){
//     input.value = parseInt(input.value) -1
// }

///////////////////////////////////////////////////////////////////



//Assignment 49-52




//Task 1

// function display() {
//     var a = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
//      message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
//     message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
//     message += "<li><b>PHONE: </b>" + document.form1.phone.value + "</ul>";
//     a.document.write(message);
//   }


  

//Task 2

// function readMore(){
//     var a = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias numquam a atque tempora nisi odio minus inventore, eaque necessitatibus, qui modi quas possimus earum natus dolores amet sit voluptate velit.'
//     var b = document.getElementById('text');
//     b.innerHTML = a

// }

//task 3

// function edit_row(no) {

//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no) {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no) {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row() {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }

/////////////////////////////////////////////

//ASSIGNMENT 58-67
  

// TASK 1//
//  var main = document.getElementById("main-content");
      
// console.log(main.innerHTML);

// var render = document.getElementsByClassName("render").innerHTML;

         
// var first = document.getElementById("first-name");
// first.value = "Muhammad";

   
// var last = document.getElementById("last-name");
// last.value = "wasi";

// var email1 = document.getElementById("email");
// email1.value = "wasiarain819@gmail.com";

///////////////////////////////////////

//TASK 2//

   // var node = document.getElementById('form-content');
   // console.log(node.nodeType)

   // var lastname2 = document.getElementById('last-name');
   // console.log(lastname2.nodeType);

   // var lastname3 = document.getElementById('last-name');
   // console.log(lastname3.childNodes);
   
   // var first1 = document.getElementById('main-content');
   // console.log(first1.firstChild);

   // var last3 = document.getElementById('main-content');
   // console.log(last3.lastChild);

   // var last4 = document.getElementById('last-name');
   // console.log(last4.nextSibling);

   // var em1 = document.getElementById("email");
   // console.log(em1.nodeType)

   // var em2 = document.getElementById("email");
   // console.log(em2.parentNode)
 


//===========END OF ALL ASSIGNMENTS=======//



        


































