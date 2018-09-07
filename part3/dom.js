/*DOM stand for DOCUMENT OBJECT MODEL
>Tree of nodes/elements created by the browser
>JavaScript can be used to read/write/manipulate to the DOM
>Object Oriented Representation


//*****PART 1*****
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10])
document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
*/

//GETELEMENTBYID
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello Doms';
//headerTitle.innerText = 'Hello Doms';
/*the difference of textContent and innerText, textContent disregards the <span> and still logs the 123
while the innerText pays attention to the style="display:none"
headerTitle.innerHTML = '<h3>Hello</h3>';*/
//var mainHeader = document.getElementById('main-header');
//using DOM to add style
//mainHeader.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME
/*var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4'; --> this line gives error, since items is an array

for(var i = 0; i < items.length; i++){
	items[i].style.backgroundColor = '#f4f4f4';
}*/


//GETELEMENTBYTAGNAME
/*var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4'; --> this line gives error, since items is an array

for(var i = 0; i < li.length; i++){
	li[i].style.backgroundColor = '#f4f4f4';
}*/

//QUERYSELECTOR --> this only grabs the first one

/*var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

//QUERYSELECTORALL --> get more all tags/classes/ids
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello!';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++){
	odd[i].style.backgroundColor = '#f4f4f4';
	even[i].style.backgroundColor = '#ccc';
}*/

//*****PART2*****
//TRAVERSING THE DOM
//var itemList = document.querySelector('#items');

//parentNode property
//parentNode have child/element under it
//console.log(itemList.parentNode);//checking the parentNode of ID #items
//itemList.parentNode.style.backgroundColor = '#f4f4f4'; //applying style on the parentNode
//console.log(itemList.parentNode.parentNode) //this goes upper and upper looking for parentNode

//parentElement property
//parentElement have child/element under it
//console.log(itemList.parentElement);//checking the parentNode of ID #items
//itemList.parentElement.style.backgroundColor = '#f4f4f4'; //applying style on the parentNode
//console.log(itemList.parentElement.parentNode) //this goes upper and upper looking for parentNode

//parentNode and parentElement have the same fucntion

//childNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hellow 1';

// console.log(itemList.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hellow 4';

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement

//create a div
// var newDiv = document.createElement('div');

//adding class
// newDiv.className = 'hello';
//adding id
// newDiv.id = 'hello 1';
//adding attribute. needs the attribute name, value
// newDiv.setAttribute('title', 'Hello Div');
//create text node
// var newDivText = document.createTextNode('Hello World');
//Adding text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

//insertBefore take 2 parameters, variable to be inserted, location before inserting
// container.insertBefore(newDiv, h1);


// *****PART3 EVENTS*****

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(){
// 	console.log('Button Clicked');
// 	document.getElementById('header-title').textContent = "changed!";
// 	document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// }


//passing event paramenter 'e'
// function buttonClick(e){
	// console.log(e);
	// console.log(e.target); //gets the element
	// console.log(e.target.id); //get id of the target
	// console.log(e.target.className);// get class of the target
	// console.log(e.target.classList);//get the classes on listed form

	// var output = document.getElementById('output');
	// output.innerHTML = '<h3>'+e.target.id+'</h3>';

	// console.log(e.type); //tells what type of event occurs
	// console.log(e.clientX); //tells the mouse click x axis position, based on window page
	// console.log(e.clientY); //tells the mouse click y axis position, based on window page	

	// console.log(e.offsetX) // tells the mouse click x axis postion, based on element space
	// console.log(e.offsetY) // tells the mouse click y axis postion, based on element space

	// console.log(e.altKey); //tells if the alt key is pressed upon clicking
	// console.log(e.ctrlKey); //tells if the control key is pressed upon clicking
	// console.log(e.shiftKey); //tells if the shift key is pressed upon clicking
// }

var button = document.getElementById('button');
var button = document.getElementById('box');
var output = document.getElementById('output');
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// button.addEventListener('click', runEvent);//runEvent when clicked
// button.addEventListener('dblclick', runEvent); //runEvent when double clicked
// button.addEventListener('mousedown', runEvent);//runEvent when clicked/mousedown
// button.addEventListener('mouseup', runEvent);//runEvent when click is released

// box.addEventListener('mouseenter', runEvent); //runEvent when mouse enter the variable/target, affects parent element only
// box.addEventListener('mouseleave', runEvent); //runEvent when mouse leave the variable/target, affects parent element only

// box.addEventListener('mouseover', runEvent); //runEvent when mouse over the variable/target, affects parent & child elements
// box.addEventListener('mouseout', runEvent); //runEvent when mouse out the variable/target, affects parent & child elements

// box.addEventListener('mousemove', runEvent);

// itemInput.addEventListener('keydown', runEvent);// this lacks 1 letter upon press
// itemInput.addEventListener('keyup', runEvent); //its better to use this to log all the keys, since every release of keys it will log the input
//itemInput.addEventListener('keypress', runEvent);// this lacks 1 letter upon press

// itemInput.addEventListener('focus', runEvent); //focus is when you click in the text box
// itemInput.addEventListener('blur', runEvent); //blur is when you click out of the text box after your clicked in.

// itemInput.addEventListener('cut', runEvent); //when you cut something on the text box
// itemInput.addEventListener('paste', runEvent); //when you paste somethin on the text box

//itemInput.addEventListener('input', runEvent); //this will listen to everythin you do on the text box(type, cut, paste)

// select.addEventListener('change', runEvent); //every time there are change, the runEvent will run
// select.addEventListener('input', runEvent); //every time there are changes on the select/input

form.addEventListener('submit', runEvent);

function runEvent(e){
	e.preventDefault();
	console.log('EVENT TYPE: '+e.type)

	// output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';

	// box.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+','+(e.offsetX-e.offsetY); //this would change the background color of the box as we mouse the mouse inside it
	// document.body.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+','+(e.offsetX-e.offsetY);//this would change the background color of the body as we mouse the mouse inside the box

	console.log(e.target.value);
	document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';


}









/*

*****SINGLE TARGET*****
variable = document.getElementById('idName'); --> use to get hold of an element using ID
variable = document.getElementsByClassName('className'); --> use to get hold of an elements using CLASS
variable = document.getElementsByTagName('Tag'); --> use to get hold of an element using TAG 

*****MULTIPLE TARGET*****
variable = document.querySelector('#idName or .className or Tag') --> use to get TAGS/CLASS/IDs 
variable = document.createTextNode -->creating strings


*****ADDING/CHANGING CONTENTS*****
variable.textContent(''); -->change content
variable.innerText(''); -->change content but pays attention with styles
variable.innerHTML(''); -->create HTML tags
variable.parentNode or .parentElement --> gets the parent of an Element
variableTag.className('class name') -->creates class name on a tag
variableTag.id('id') -->creates id on a tag
variableTag.setAttribute('attr name, value') -->creates attribute on tag


*****EVENTS*****
*common events: 'click',  'keyup',
variable.addEventListener('event', createFunction); -->waits for the event then runs the function



*/

