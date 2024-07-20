// alert("hello");

// console.log("Welcome to my page..");
// console.error("This is an error");
// console.warn("This is a warning");

//1.variables in js 
//var(globally scoped), let (block-level scope)-> reassigned the value, const (block-level scope)

// let age = 21;
// age=31;
// console.log(age);

// const name = "ayesha";
// // name = "muqaddas"; error
// console.log(name);

//2. datatype (premititive -> directly assign the memeory) -> string, numbers, boolean, null, undefined
//, non-permititve 

// const name = "Ayesha";
// const age = 21;
// const isCool = true;
// const  rating = 4.5;
// const x = null; //empty -> object but it's false it's null
// const y = undefined; // not defined 
// let z;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isCool);
// console.log(typeof rating);
// console.log(typeof x);
// console.log(y);

//3.string

// const name = "ayesha";
// const age = 21;

//concatenation
// console.log("My name is " + name + " and i am" + age);

//template string
// const hello = (`My name is ${name} and I am ${age} year old`);
// console.log(hello);

// const s = "hello world";
// //no of charater -length();
// console.log(s.length);

// //toUppercase();
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// //substring();
// console.log(s.substring(0,5));

// //split();
// console.log(s.split('')); //character in array

// const s = "technology, computers, it, code";
// console.log(s.split('.'));

//Arrays
// const fruits = ["apples", "mangos", "oranges", "pears",10, true];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[4]);
// console.log(fruits);

// //adding at the end- method 1
// fruits[3]= "grapes";
// console.log(fruits);

// //method -2 
// fruits.push("banana");
// console.log(fruits);
// fruits.unshift("strawberries");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits);

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);


//objects
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age:30,
//     hobbies: ['music','movies','sports'],
//     address: {
//         street: "50 main str",
//         city:"boston",
//         state:"MA"
//     }
// }
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const {fName, lName, Address:{city}} = person;
// console.log(fName);
// console.log(city);

// person.email = "ayeshaimtiaz428@gmail.com";
// console.log(person);

// const todos = [
//     {
//         id:1,
//         text:"text out train",
//         iscompleted: true

//     },
//     {
//         id:2,
//         text:"meeting with boss",
//         iscompleted: true
        
//     },
//     {
//         id:3,
//         text:"dentist appt",
//         iscompleted: false
//     }
// ];
// console.log(todos);

// //json
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


//loops
//for-loop
// for(let i=0; i<10; i++)
//     {
//         console.log(`For loop number: ${i}`);
//     }

// //while loop
// let i = 0;
// while(i<10)
//     {
//      console.log(`While loop number: ${i}`);
//      i++;
//     }

// for(let i=0; i<todos.length; i++)
//     {
//         console.log(todos[i].text);
//     }

// for(let todo of todos)
//     {
//         console.log(todo.text);
//     }

//for each , map, filter 
// todos.forEach(function(todo) {
//  console.log(todo.text);
// });
// const todoText = todos.map(function(todo)
// {
//     return todo.text;
// });
// console.log(todoText);

//functional programming
// const todocompleted = todos.map(function(todo)
// {
//     return todo.iscompleted === true;
// }).map(function(todo)
// {
//     return todo.text;
// })
// console.log(todocompleted);


//conditional 
// const x = 2 ;
// const y = 10;

// if(x > 5 || y > 10)
//     {
//         console.log("x is 10");
//     }
//     else if(x > 10)
//         {
//       console.log("x is greater than 10");
//         }
//     else{
//         console.log("x is less than  10");
//  }

// const x = 9;
// const color = x> 10? 'red' : 'blue';


// switch(color)
// {
//     case 'red': 
//     console.log('color is red');
//     break;
//     case 'blue':
//     console.log('color is blue');
//     break;
//     case 'green':
//     console.log('color is green');
//     break;
//     default:
//         console.log("color is not red or blue");
// }


// function addNums(num1 = 1, num2= 1)
// {
//   return (num1, num2);
// }
// console.log(addNums(5,5));

//arrow function 
// const addNums = (num1=1, num2=1) => {
//     return (num1 + num2);
// }
// console.log(addNums(5,8));

//constructor function 

// function human(firstName, lastName, dob)
// {
//     this.firstName = firstName;
//     this.lastName= lastName;
//     this.dob = new Date(dob);
//     // this.getBirthYear = function()
//     // {
//     //     return this.dob.getFullYear();
//     // }
// }
// human.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// //instntiate object
// const human1 = new human("john", "doe",'4-3-1980');
// //console.log(human.firstName);

// // console.log(human1.getBirthYear());
// console.log(human1);

//class
// class person {
//     constructor(firstName, lastName, dob)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear()
//     {
//         return this.dob.gerFullYear();
//     }
//     getfullName()
//     {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new person("john", "doe",'4-3-1980');
// console.log(person1);

//single element 
// const form = document.getElementById('my-form');
// console.log(form);
// console.log(document.querySelector(".container"));

// //multiple element 
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const ul = document.querySelector('.items');
// // ul.remove();

// // ul.lastElementChild.remove();

// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerText = 'brad';
// ul.lastElementChild.innerHTML = "<h1>hello</h1>";

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
// //   console.log('click');
//  e.preventDefault();
//  document.querySelector("#my-form").style.background = "#ccc";
//  document.querySelector('body').classList.add('bg-dark');
//  document.querySelector('.items').lastElementChild.INNERHTML = "<h1>Hello</h1>";
// });


// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}


