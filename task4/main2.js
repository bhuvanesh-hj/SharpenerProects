// // Traversing the DOM

// var itemList = document.querySelector('#items')

// //parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode)

// // parentElement

// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentElement.parentElement)

// //childNodes
// console.log(itemList.childNodes)

// //children
// console.log(itemList.children)
// itemList.children[2].style.backgroundColor='black'

// //firstchild
// console.log(itemList.firstChild)

// //firstElementchild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.style.textContent='Helloo 1'

// //lastchild
// console.log(itemList.lastChild)

// //lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.style.color='red'

// //nextSibling
// console.log(itemList.nextSibling)

// //nextElementSibling
// console.log(itemList.nextElementSibling)

// //previousSibiling
// console.log(itemList.previousSibling)

// // /previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color='blue'

//CreatElement

// creat a div
var newDiv = document.createElement('div');

//add Class
newDiv.className='Hello';

//add ID
newDiv.id='hello1';

//add Attribute
newDiv.setAttribute('title','Hello div');

//Creat text node
var newDivText=document.createTextNode('HEllo word');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// console.log(newDiv)

// newDiv.style.fontSize='40px'


container.insertBefore(newDiv,h1);

//creat a new div 
var newDiv1=document.createElement('div')

newDiv1.className='new-Hello'

newDiv1.id='new-heloo'

newDiv1.setAttribute('title','HelloW')

 var newDiv1txt=document.createTextNode('HEllo word')

 newDiv1.appendChild(newDiv1txt)

 var container1=document.querySelector('div .list-group')

 var li=document.querySelector('div li')

 container1.insertBefore(newDiv1,li);

