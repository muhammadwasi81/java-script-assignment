// TODO APP //Muhammad wasi


var list = document.getElementById('list');


function addTodo(){
    
  var todo_item = document.getElementById("todo-item");
   
   //create li tag with text node

    var li = document.createElement('li');
    var li_text = document.createTextNode(todo_item.value);
    li.appendChild(li_text);


    //create delete button

    var del_btn = document.createElement('button');
    var del_text = document.createTextNode("REMOVE");
    del_btn.setAttribute("class",'delete');
    del_btn.setAttribute("onclick","deleteItem(this)")
    del_btn.append(del_text);  ////
 
  
    //create edit button//

    var edit_btn = document.createElement("button");
    var edit_text = document.createTextNode("EDIT");
    edit_btn.setAttribute("class",'edit');
    edit_btn.setAttribute("onclick",'editItem(this)');
    edit_btn.appendChild(edit_text);

    li.appendChild(edit_btn)
    
    li.appendChild(del_btn)
   
   
    list.appendChild(li);

    console.log(li);

    todo_item.value = ''; //blank box
    
}

//Enter button function

var input = document.getElementById("todo-item");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(enter) {
  // Number 13 is the "Enter" key on the keyboard
  if (enter.keyCode === 13) {
    // Cancel the default action, if needed
    enter.preventDefault();
    // Trigger the button element with a click
    document.getElementById("wasi").click();
  }
});//////


//delete function

function deleteItem(a){
    a.parentNode.remove()
  
}
//del all

function delAll(){
    list.innerHTML = "";
}

//edit Function

function editItem(b){
     var val = prompt("Enter What To Do ", b.parentNode.firstChild.nodeValue)
     b.parentNode.firstChild.nodeValue = val; 
  
}

//===== END OF CODE =====//



