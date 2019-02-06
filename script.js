// select input value
/*
var input = document.getElementById("userinput");
console.log(input.value);
var btn = document.querySelector(".btn");
var ul = document.querySelector("ul");


function addListItems(){
	// createListItem
	var newLi= document.createElement("li");

	
  
	//add value
		var textNode = document.createTextNode(input.value);
		newLi.appendChild(textNode);
		//append to UL	
		ul.appendChild(newLi);
		//create Delete Button
		var removeBtn = document.createElement("button");
		removeBtn.classList.add("secondButton");
		ButtonStyler();
		
		newLi.appendChild(removeBtn);
		//createIcon
		var iconx = document.createElement("i");
		iconx.classList.add("fa");
		iconx.classList.add("fa-times");
		iconx.classList.add("secondButton");

		

		
		removeBtn.appendChild(iconx);
		input.value= "";

		newLi.addEventListener("click",toggler);
		removeBtn.addEventListener("click",removeButton);
		function toggler(){
	newLi.classList.toggle("done");
		}
		function removeButton(){
			 var lili =document.querySelectorAll("li");
     	if(newLi === lili[0]){
     		newLi.parentElement.remove();

     	}else{
     		removeBtn.parentElement.remove();
     		console.log(lili[0]);
     	}
		
		
		}
	function ButtonStyler(){
			removeBtn.style.float = "right";

		}
		
}
// add for click on button
function checkForClickButton(){
	if(input.value != "" && input.value.length > 0){
		borderMaker();
		addListItems();
		
	}
}
//creating List items for pressing enter
function addListAfterKeypress(arg) {
	if (input.value.length > 0 && arg.keyCode === 13) {
		addListItems();
		borderMaker();
	}
}
function borderMaker(){
	ul.style.border="1px solid silver";
		ul.style.borderRadius = "5px";

}	

btn.addEventListener("click",checkForClickButton);
input.addEventListener("keypress",addListAfterKeypress);

// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
 
//#2
var a = 0;
function q2() {
    a = 5;
    alert(a);
}

function q22() {
    alert(a);
}


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
*/
function winBattle(boolean) {
	return boolean;
}
var answer = winBattle(false) ? 10 : 1;



function moveCommand(move){
	var action;
	switch (move) {
		case "forward":
		action = "go back there are monsters";
			break;
		case "backward":
		action = "Come on you coward!";
			break;
		case "left":
		action = "Don't do that";
			break;
		case "right":
		action = "to the other side";
			break;
		default:
		action = "try to press direction buttons"
			break;
	}
	return action;
}
console.log(moveCommand("sad"));