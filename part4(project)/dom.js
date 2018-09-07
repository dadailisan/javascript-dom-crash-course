var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);


//Add item
function addItem(e){
	e.preventDefault();
	// console.log(1); //testing that event submit default is prevented. should have log '1' on the console

	//Get input value
	var newItem = document.getElementById('item').value;

	//Create new li element
	var li = document.createElement('li');
	//add class to li
	li.className = 'list-group-item';
	//console.log(li); //testing that the new <li></li> element is created

	//add  text node with input value.
	li.appendChild(document.createTextNode(newItem));

	//create delete button element
	var deleteBtn = document.createElement('button');

	//Add classes to deleteBtn
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

	//append text node
	deleteBtn.appendChild(document.createTextNode('X'));

	//append button to the li
	li.appendChild(deleteBtn);

	//append the li with the value newItem on the itemList
	itemList.appendChild(li);
}


//Function remove item
function removeItem(e){
	if(e.target.classList.contains('delete')){
		if(confirm('Delete this, are you sure?!')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}


//function for filter items
function filterItems(e){
	//convert text to lowercase
	var text = e.target.value.toLowerCase();
	//get li's
	var items = itemList.getElementsByTagName('li');
	//Convert HTML collection to an array
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		// console.log(itemName); //check if we get the item names
		if(itemName.toLowerCase().indexOf(text) != -1){//check if the search is equal to the item(matching) -1 if not match
			item.style.display = 'block'; //shows the search item(s)
		} else{
			item.style.display = 'none'; //if not match, remove display
		}

	});
}

