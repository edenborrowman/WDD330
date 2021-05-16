//INTERACTING WITH FORMS
//document.forms returns HTML collection of all the forms in the document in the order they appear in the markup.

// const form = document.forms[0] //index notation needed since it's a collection

// //form objects have useful methods. 
// //form.submit()
// //form.reset()
// //form.action

// //FORM EVENTS
// const input = form.elements.searchInput;
// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);

// const form = document.forms['search'];
// form.addEventListener('submit', search, false);
// function search() {
//     alert(' Form Submitted');
// }


//OBJECT ORIENTED PROGRAMMING
 
var names = ['ryu', 'crystal', 'mario'];
console.log(names.length);
console.log(names.sort()); //.sort is a method you can use on objects like this array. You can find it and others in the console log under the "proto" part of the console.logged arrray! Neat!

//window object is another one we can work with. Has property and methods. Check out all the properties and methods it has...
console.log(window);
console.log(window.innerWidth);//for example, this shows the width it's currently set to...a property.

//remember, primitive types won't have these same methods and properties.

var boy = "mario";
console.log(boy);//note, can't expand this. It's a primitive type, not an object. No methods, etc.

//can wrap in an object when we need to!
console.log(boy.length);//wrapping the string in an object to get the length of boy (it's 5. M A R I O)

//creating a string object here. A string wrapped in an object. Gives us methods! Really cool.
var name2 = new String('ryu');
console.log(name2);


//This kind of code is "spaghetti code" and wouldn't you know it...I'm great at making Spaghetti (and I'm not even Italian!)

//Create User 1
// 
//A better way to code. Object Literals.



//This is encapsulation--storing everything about what it means to be a user in this capsule.
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
        },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.name)