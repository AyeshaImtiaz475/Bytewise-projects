
//console.dir(document);

console.log(document.domain); //127.0.0.1
console.log(document.URL);
console.log(document.title);

//document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.links);

console.log(document.images);

//slecting method
//getElementbyId
console.log(document.getElementById('header-Title'));
var headerTitle = document.getElementById('header-Title');
console.log(headerTitle);
var header = document.getElementById('main-header');
headerTitle.textContent = 'hello';
headerTitle.innerText ='Goodbye';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.innerHTML = "<h3>Hello</h3>";

headerTitle.style.borderBottom = 'solid 3px #000';

//getelementbyclassname 
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontweight = 'bold';
items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4';
for(var i=0; i<items.length; i++)
    {
        items[i].style.backgroundcolor = '#f4f4f4';
    }


// //getelementbytagname 
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello 2';
li[1].style.fontweight = 'bold';
li[1].style.backgroundColor = 'yellow';

items.style.backgroundColor = '#f4f4f4';
for(var i=0; i<li.length; i++)
    {
        li[i].style.backgroundcolor = '#f4f4f4';
    }

// query selector 
var header = document.querySelector('#main-header');
header.computedStyleMap.borderBottom = 'solid 4px #ccc'

var input = document.querySelector('input');
input.value = 'hello world';

var submit = document.querySelector(input[type="submit"]);
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = "blue";

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent ='hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++)
    {
        odd[i].style.backgroundColor = '#f4f4f4';
    }
