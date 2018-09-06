/*DOM stand for DOCUMENT OBJECT MODEL
>Tree of nodes/elements created by the browser
>JavaScript can be used to read/write/manipulate to the DOM
>Object Oriented Representation

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

//PART2
//TRAVERSING THE DOM
var itemList = document.querySelector('#items');

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
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement

//create a div
var newDiv = document.createElement('div');

//adding class
newDiv.className = 'hello';
//adding id
newDiv.id = 'hello 1';
//adding attribute. needs the attribute name, value
newDiv.setAttribute('title', 'Hello Div');
//create text node
var newDivText = document.createTextNode('Hello World');
//Adding text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

//insertBefore take 2 parameters, variable to be inserted, location before inserting
container.insertBefore(newDiv, h1);













/*
('') --> syntax('.class'), ('#id'), ('tag')
SINGLE TARGET:
document.getElementById(''); --> use to get hold of an element using ID
document.getElementsByClassName(''); --> use to get hold of an elements using CLASS
document.getElementsByTagName(''); --> use to get hold of an element using TAG 
MULTIPLE TARGET
document.querySelector('') --> use to get TAGS/CLASS/IDs 

document.createTextNode -->creating strings

variable.textContent(''); -->change content
variable.innerText(''); -->change content but pays attention with styles
variable.innerHTML(''); -->create HTML tags
variable.parentNode or .parentElement --> gets the parent of an Element
variableTag.className('class name') -->creates class name on a tag
variableTag.id('id') -->creates id on a tag
variableTag.setAttribute('attr name, value') -->creates attribute on tag

variable.insertBefore



*/

