// adds directory to dom; interactive list of the properties of the specified javaScript 
// console.dir(document);

// // will log domain on dom, if local there is no domain
// console.log(document.domain); //shows IP address
// // returns document location as a strong
// console.log(document.URL);

// // access title from tree and add to console
// console.log(document.title);

// // access the type of file/docu and add to console
// console.log(document.doctype);

// // access contents of head from tree and add to console
// console.log(document.head);


// // access contents of body from tree and add to console
// console.log(document.body);

// // access contents of the file from tree and add to console
// console.log(document.all);

// // access specific line of code from tree using [] for index and add to console
// console.log(document.all[10]);

// // change the text content of the object retreived by its index from the dom
// document.all[10].textContent = "we just changed the header";

// // shows how many elements are inside of the dom using the element 
//Document Object Mode can scan the tree for elements
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// ////////////////////////////////////////////

// // access the DOM using getElementID()
// // to display the id of an element using the name of the id
// console.log(document.getElementById('header-title'));

// //creation of an object variable using the document function
// let headerTitle = document.getElementById('header-title');

// //Change the text of element
// headerTitle.textContent = "I'm Changing Diss";
// headerTitle.innerText = "I Change Diss Again";

// //change text color using .style property
// headerTitle.style.color = "Green";


/////////////GET ELEMENT BY CLASS NAME
//////getElementsByClassName()/////////
//searches entire tree that includes root node (document)

var items = document.getElementsByClassName('list-group-item');

// 
console.log(items);

// grab the item depending on its index in the array and display on console
console.log(items[1]);

//STYLING PROPERTY ATTRIBUTES THROUGH THE VARIABLE
//change item with array index #
items[0].textContent = 'Wallet';
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'beige';

items[1].textContent = 'Lippies';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'white';

items[2].textContent = 'Water';
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'beige';


//FOR LOOP: for every item in the index list, do something
//declare a variable first
//3 things that go in for loop: initialization, condition, incrementor
//this is a counter which loops all the way until 10
//let i = ?? determines where we want to start
// for(let i = 1; i <= 10; i++){

//     console.log(i);
// }

// for(let i = 1; i <= 20; i += 2){
//     console.log(i);
// }

// to decrement -=2
// for(let i = 100; i >= 0; i -= 2){
//     console.log(i);
// }

// //i++ increments the array in the header
// for(var i = 0; items.length; i++){

//     items[i].style.backgroundColor = 'beige';
//     items[i].textContent = 'I changed dis list';
//     items[i].style.color = 'brown';

// }

//ARRAY
// const myDiamonds = ['Wallet', 'Lippies', 'Mirror', 'Contacts Essentials', 'Wet Wipes', 'Tissue'];
// for(let i = 0; i <= myDiamonds.length; i++){
//     //i (prints index), myDiamonds[i] (prints string)
//     console.log(i, myDiamonds[i]);
// }

//getElementByTagName

// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);

// li[1].textContent = 'I changed this again using tagName';
// li[1].style.fontWeight = 'bold';
// li[1].style.color = 'green';

// //go through each item in array and change the style 
// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = 'Changed Content';
// }


//////////////////////////////

// //Query Selector; returns first element ONLY
// //# specifies ID
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px black';

// // grab the first textbox using querySelector
// var input = document.querySelector('input');
// //changes the value of the textbox
// input.value = 'Changed the input box text';

// // put single quotes inside double quotes
// var submit = document.querySelector("input[type='submit'");
// //varibale was set above to submit button, now we set the submit object value to SEND
// submit.value = "SEND";

// //grab first item in tree with class name list-group-item
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// //varlastitem returns last element ONLY (:last-child) does this

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'red';


///////////////////////////////////

//Query Selector All; selects all obj depending on the specified parameter

//create a variable in which we select all elements of the parameter (class, id, etc.)
var titles = document.querySelectorAll('.title');

console.log(titles);

//to change the first obj from the class title
titles[0].textContent = "Hello oLor";

//create variable to select all odd numbers from the list
//nth-child(*specify*) - a number, odd or even, or formula. if specifying a specific number it will count starting by 1
var odd = document.querySelectorAll('li:nth-child(odd)');

//create variable to select all even numbers from the list
var even = document.querySelectorAll('li:nth-child(even');

//for loop iterating through both var odd and var even
//changed style of odd and even items from the list 
for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'beige';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
}
