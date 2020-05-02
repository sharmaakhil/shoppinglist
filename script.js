var addLiButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var clearListButton = document.getElementById("clearlist");

function inputLength() {
	return input.value.length;
};

function checkListItemLength(){
	var liLength = document.querySelectorAll("li").length;
	if(liLength >= 0){
		return liLength;
	}
};

function createListElement() {
	var li = document.createElement("li");
	var index = checkListItemLength();
	console.log("index is:",index);
	li.appendChild(document.createTextNode(input.value));
	var lastItem = ul.appendChild(li);
	addDeleteButtonToListItems(li, index+1);
	input.value = "";
};


function addDeleteButtonToListItems(li, i) {
	//console.log("The items are:",li, i);
	var liDeleteBtn = document.createElement("button");
	liDeleteBtn.setAttribute("id","deleteBtn"+i);
	/*liDeleteBtn.appendChild(document.createTextNode("Delete"));*/ // Removed as there is an image now
	li.appendChild(liDeleteBtn);
};


function addListItemAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
};

function addListItemAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
};

function toggleDone (event){
	if(event.target.tagName == "LI"){
		event.target.classList.toggle("done");
	}
};


function deleteItemAfterClick (event) {
	if(event.target.tagName === "BUTTON"){
		//console.log("parentNode: ",event.target.parentNode);
		//console.log("ParentNode Id: ",event.target.id);
		removeElement(event.target.id);
		console.log("After removing index is:",checkListItemLength());
	}
};

function removeElement(id){
	var element = document.getElementById(id);
	if (element.parentNode != null) {
	    element.parentNode.remove();
	    element.remove();
    }
};

function removeAllElements(event){
	const parentOfListItem = document.getElementsByClassName("ulist")[0];
	console.log ("node: ",parentOfListItem);
  	while (parentOfListItem.firstChild) {
    	parentOfListItem.removeChild(parentOfListItem.lastChild);
  	};
  };

li.forEach(addDeleteButtonToListItems);
addLiButton.addEventListener("click", addListItemAfterClick);
input.addEventListener("keypress", addListItemAfterKeypress);
ul.addEventListener("click",toggleDone);
ul.addEventListener("click", deleteItemAfterClick);
clearListButton.addEventListener("click",removeAllElements);
