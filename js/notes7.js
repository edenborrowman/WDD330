// function sayHello() {
//     alert('Hello, my name is Eden');
// }


function sayHello() {
    return `Hello, my name is ${this.name}`;
}

const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
sayHello.call(clark);

sayHello.call(bruce);

function sayHello(greeting = 'Hello') {
    return `${greeting}, my name is ${this.name}`;
}
sayHello.call(clark, 'How do you do');

sayHello.call(bruce);


//CALL, APPLY, AND BIND

let bob = function (num, str, x) {
    console.log('bob', num, str, this, x);
    return true;
}
let bill = {
    name: 'Bill Murray',
    movie: 'Lost in Translation',
    myMethod: function (fn) {
        // fn(2, 'hello');
        let n = arguments[1];
        let s = arguments[2];
        fn.apply(bill, [n, s]);
        //fn.call(bill, n, s);  the same as the line above. Doing the same thing.


    }
}

let fred = bob.bind(bill, 5, 'hasta la vista');
fred('x');

bob(1, 'hello');
bill.myMethod(bob);
bob.call(bill, 2, 'goodbye');  //first argument: what's the "this" object. then number. then string. Check out console log..."this" is bill...because we told it to be so..


// bob.apply(bill, 3, "ciao"); //two prameters combine into single parameter...an array of parameters. This is the difference between call and apply).

bill.myMethod(bob, 4, 'ciao');

//let arr = [3, 'hi'];
//bob.apply(bill, arr);

//NETNINJA ASYNCH JAVASCRIPT

//JS is threaded and synchronous. Only one thing runs at a time. This slows down the code a lot. Asynchronous functions let us have non-blocking code...faster.

console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired'); //asynch in action. doesn't block code.
}, 2000);

console.log(3);
console.log(4);


//HTTP REQUESTS.
// They get data from another server or database. API endpoint. For practice we'll use https://jsonplaeholder.typicode.com



fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

//make a request object

// const getTodos = () => {
    const request = new XMLHttpRequest();

    //event listener fires when request goes through state changes. there are 4.
    request.addEventListener('readystatechange', () => {
        console.log(request, request.readyState);
        if (request.readyState === 4) {
            console.log(request, request.responseText); //returns JSON
        } else if (request.readyState === 4) {
            console.log('could not fetch the data');
        }
    });

    //what do the ready states (1-4) actually mean? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/') //open method takes 2 arguments. 1-type of request, 2-what data we want.
    request.send(); //actually makes the request
// };