// variable = "Dave";
// console.log(variable);

//The above works. It shouldn't, but it does. Now try with strict JS:


'use strict';

//REFERENCE ERROR EXAMPLE
//CAN BE CAUGHT AND FIXED!

    // nameVariable = "Mark";
    // console.log(nameVariable);


const variable = 'Mark';
console.log(variable);

// SYNTAX ERROR EXAMPLE. wE CAN'T CATCH AND FIX THIS. JS WILL CATCH IT AS WE CODE.

    // Object..create();

//ANOTHER EXAMPLE OF A SYNTAX ERROR. CAN'T REDECLARE CONST.
    // const name = "Luke";
    // const name = "Job";


//MAKING AN ERROR FUNCTION TO TRY/CATCH ERRORS IN OUR CODE:

// const makeError = () =>{
//     try{
//         const name = 'June';
//         name = 'Jane';
//     }
//     catch(err){
//         // console.log(err); A BETTER WAY TO DO IT? console.error.
//         console.error(err);
//         console.error(err.name); //OTHER WAYS TO BREAK IT APART:
//         console.error(err.message);
//         console.log(err.stack);
        
//     }
// }
// makeError();

//IF WE WANT TO MAKE A CUSTOM ERROR, WE CAN DO IT LIKE THIS:

const makeError = () =>{
    try{
        throw new customError('This is a custom error');
    }
    catch(err){
         console.error(err.message);      
         console.error(err.name);
         console.error(err.stack); 
    }
};

makeError();

function customError(message) {
    this.message = message;
    this.name = 'customError';
    this.stack = `${this.name}: ${this.message}`;
}

//BUT IF YOU DON'T WANT TO MAKE CUSTOM ERRORS, YOU CAN USE BUILT IN OPTIOINS.
//note the difference on console.error(err.name) between makeAutoError() and makeError()

// let makeAutoError = () =>{
//     try{
//         throw new Error('This is an error');
//     }
//     catch(err){
//          console.error(err.message);      
//          console.error(err.name);
//          console.error(err.stack); 
//     }
//     finally{
//         console.log("....finally");  //finally clauses always execute. After everything.
//     }
// };

// makeAutoError();

let makeFinallyError = () =>{
    let i = 1;
    while(i<= 5) {
    try{
       if (i % 2 !==0){
           throw new Error("odd number");  
           //If there's an error, any remaining code in  thetry block will not execute. Hence the console log for even number not being in "else" clause.
       };
       console.log('even number');
    }
    catch(err){           //Only executes if there is an error.
        console.error(err.stack); 
    }
    finally{
        console.log("....finally");  //finally clauses always execute. After everything.
        i++;
    }
};}

makeFinallyError();