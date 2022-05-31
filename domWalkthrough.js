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
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// ////////////////////////////////////////////

// access the DOM using getElementID()
// to display the id of an element using the name of the id
console.log(document.getElementById('header-title'));