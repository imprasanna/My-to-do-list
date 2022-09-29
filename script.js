//Create a "close" button and append it to each list item
var myNodeList = document.getElementsByTagName("li");
var i;
var l = myNodeList.length;
for (i = 0; i < l; i++) {
    var node = document.createElement("span");
    var txt = document.createTextNode("\u00D7"); //\u00D7 is unicode for multiplication sign in JS
    node.className = "close";
    node.appendChild(txt);
    myNodeList[i].appendChild(node);
}

//Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
var l = close.length; //redeclared using var
for (i = 0; i < l; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Add a "checked" symbol when clicking on a list item and remove on clicking again, i.e. toggle
var list = document.querySelector("ul");
list.addEventListener("click", function(event) {
  if (event.target.tagName == "LI")//event.target.tagName always returns letters in uppercase 
  {  
    event.target.classList.toggle("checked");
  }
});

//Create a new list item when clicking on the "Add" button
function addListItems() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("my-input").value;
    var txt = document.createTextNode(inputValue);
    li.appendChild(txt);
    if (inputValue === "") {
        alert("You need to write something!");
    }
    else {
        document.getElementById("my-unordered-list").appendChild(li);
    }
    document.getElementById("my-input").value = ""; //Clear the value in the my-input box after adding on the list

    //Also adding cross button on each newly created list
    var node = document.createElement("span");
    var txt = document.createTextNode("\u00D7"); //\u00D7 is unicode for multiplication sign in JS
    node.className = "close";
    node.appendChild(txt);
    li.appendChild(node);

    var close = document.getElementsByClassName("close");
    var i;
    var l = close.length; //redeclared using var
    for (i = 0; i < l; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}