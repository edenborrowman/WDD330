
        //EXERCISES PART 1: Objects

            //OBJECT LITERAL BASICS
                //object literal creation
                //filled with key/value pairs, separated by commas

             
                

                let user = {
                    name: 'Crystal',
                    age: 30,
                    email: 'crystal@netninja.co.uk',
                    location: 'Berlin',
                    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
                    login: function(){
                        console.log('the user logged in');
                    },
                    logout: function(){
                        console.log('the user logged out');
                    },

                    //note the syntax here...it's still a regular function, like the two above it, but we omit the word "function." It just makes it easier to read and write since it's cleaner, but it works the same.
                    logBlogs(){
                        console.log("this user has written the following blogs: ");
                        this.blogs.forEach(blog => {
                            console.log(blog)})

                    }
                };

                console.log(user);

                //accessing properties in the object

                console.log(user.name);

                //overwrite or update one of the properties, first with dot notation, then with square bracket notation:
                user.age = 35;
                console.log(user.age);
                console.log(user['email']);

                //update properties using square bracket notation instead of .notation. Can be useful to know how to do this, though dot notation is probably faster/easier. Pay attention...must be entered as string (note the quotation marks around name)

                user['name'] = 'Chun-li';
                console.log(user['name']);

                //typeof
                console.log(typeof user);
        
             //OBJECT METHODS
                //key/value pairs

                //methods look like regular functions but they're defined on the object.

                //creating a method for this object. Calling it login. This is how you call it:

                user.login();
                user.logout();

                //method to log out blogs, the array in the object
                //need to use 'this' to access it.
                //'this' is tricky with methods. We set the method up with a regular function because otherwise, 'this' would refer to the window object, not the object we've created (user, in this case).

               user.logBlogs();
               

             //STORING OBJECTS IN AN ARRAY...IN AN OBJECT. BUCKLE UP.
                
                const blog2 ={
                    names: [
                        {title: 'why mac & cheese rules',
                        likes: 30}, 
                        {title: '10 things to make with vegimite',
                        likes: 50}
                    ],
                    practiceFunction(){
                        console.log('The user also wrote ');
                        this.names.forEach(entry => {
                            console.log(entry)})

                    }
        };
                
                console.log(blog2);
                console.log(blog2.names[0]);
                console.log(typeof blog2.names[0]);
                blog2.practiceFunction();
                
                
            //Math Object

            console.table(Math);
            console.log(Math.PI);
            console.log(Math.E);

            //Math Object methods

            const area = 7.7

            console.log(Math.round(area));
            console.log(Math.floor(area));
            console.log(Math.ceil(area));
            console.log(Math.trunc(area));

         //Random Numbes
            const random = Math.random();
            console.log(random);

            console.log(Math.round(random * 100));

         //Reference Values vs. Primitive Values

            //first, the primitive values:
            let scoreOne = 50;
            let scoreTwo = scoreOne;

            console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

            //what happens when we change scoreOne?
            scoreOne = 100;
            console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

            //note, in the example above, scoreOne changed, but scoreTwo DID NOT. Because it's in the stack. It's its own copy since it is a primitive value.

            //now, the reference values:
            const user1 = { name: 'ryu', age: 30};
            user2 = user1;
            console.log(user1, user2);

            //now, what if I change the name here?
            user1.name = 'Jenny';
            console.log(user1, user2);

            //Oop! They BOTH change! Why? Because objects aren't stored on the stack. They're stored on the heap. When I "copied" user1 to make user2, I only copied the LINK to the info in the heap. User 2 didn't get its own information. It just pointed to the same object that user1 pointed to. So if I change that info for user1, I defacto change it for user2 as well. Be aware!
    
    //EXERCISES PART 2: The Document Object Model

          // THE DOM
          console.log(document); //models the page
          console.log(document.location);


          //Querying a single element in the DOM
            const para = document.querySelector('p'); //gets first instance of the element
            console.log(para);
            const para2 = document.querySelector('body > main > div > p:nth-child(1)');  //gets exactly the one I'm looking for using instpec>copy>element selector 
            console.log(para2);
            const para3 = document.querySelector('.error'); //getting element by class using CSS selector
            console.log(para3);
            const para4 = document.querySelector('div.error'); //getting element by element name AND class selector (to be even more specific)
            console.log(para4);

        //Querying multiple elements in the DOM using querySelectorAll

            const paras = document.querySelectorAll('p'); //gets all paragraphs in node list. Note, not an array. Doesn't have all the array methods.
            console.log(paras);


        //Can use [] notation to select single element from node list
            console.log(paras[2]);

        //can also use for each on node lists to loop through list
            paras.forEach(para =>{console.log(para);
            }); 

        //Getting everything by class, using CSS class selector:
            const errors = document.querySelectorAll('.error');
            console.log(errors);
        
        //Other ways to select things in the DOM:
            
            //by ID
            const title = document.getElementById('page-title');
            console.log(title);

            //by class name. Note it returns an HTML collection, not a node list. Can still use [] notation to get single element from list. Cannot use for each, though!
            const errata = document.getElementsByClassName("error"); //note the plural elements. Also, no CSS . like in query selector
            console.log(errata);

            //elements by tag name:
            const p_tag = document.getElementsByTagName('p');
            console.log(p_tag);
            //and with square bracket notation to select a particular p_tag
            console.log(p_tag[4]);

        //CHANGING TEXT INSIDE ELEMENTS

            //change innerText, append innerText
            
            const para_1 = document.querySelector("#working_html > div:nth-child(1) > p:nth-child(2)");
            console.log(para_1.innerText);  //innerText is a property name, not a method. Hence no extra ()
            para_1.innerText = "Ninjas rock.";
            para_1.innerText += " Peaches for me";  //append, not just overwrite.

        
            //change innerText of many elements at once
            const para_2 = document.querySelectorAll('p');
            
                //use for each and an arrow function

                // para_2.forEach(para => {
                //     para.innerText += " peaches for free.";
                // });

        //CHANGING THE HTML OF SOMETHING

            const content = document.querySelector('.content')
            // content.innerHTML = '<h2>this is a new h2 tag</h2>';  //changes tag and text. Overwrites everything.
            content.innerHTML += '<h2>this is a new h2 tag</h2>';  //APPENDS content...adds it to what's already there because of +=
            console.log(content);
        
            const peeps = ['mario', 'luigi', 'yoshi'];

            peeps.forEach(person => {
                content.innerHTML += `<p>${person}</p>`; //appending from array peeps to div named content. Also adding <p> tag (cool how you can do that)
            });
            console.log(peeps);

        //GET AND UPDATE HTML ATTRIBUTES
            const link = document.querySelector('#working_html > a');
            console.log(link.getAttribute('href'));  //using .getAttribute and passing what attribute we want (in this case, the href).

            link.setAttribute('href', 'https//www.thenetninja.co.uk');
            link.innerText = 'The Net Ninja Website';
            console.log(link);

            //set attributes
            const msg = document.querySelector('#working_html > p');   //note: I'm using direct selector, copied from the console, since I have so much code going on here in my practice sheet.
            console.log(msg.getAttribute('class'));
            msg.setAttribute('class', 'orange');
            console.log(msg.getAttribute('class'));

            //add attributes that don't already exist

            msg.setAttribute('style', 'color: green'); //drawback: it will overwrite all other attribures. Can be a bad thing!

            //add EXTRA attributes that don't already exist without overwriting
            console.log(msg.style);
            console.log(msg.style.color);

            msg.style.margin ='50px'; //this adds the margin, but doesn't overwrite the color (green) that we added earlier.
            msg.style.color =  'crimson';

            msg.style.fontSize = '36px'; //note camel case on fontSize. This is important. CSS would be font-size, but JS sees that as font minus size. Use camel case for any CSS with this syntax.
            msg.style.margin = ''; //removes property

            //Change classes with JS using HTML tags
            
            const content2 = document.querySelector('#working_html > p.error');
            console.log(content2.classList);
                //add class
                content2.classList.add('success'); //.add is a method to add a class. in the parens you pass the class you want to add.
                console.log(content2.classList);
                content2.classList.remove('success'); //remove a class. Same as add
                console.log(content2.classList);
            
            //PRACTICE. Query the DOM, look for text that says error or success, and add a class.

            const parapractice = document.querySelectorAll('p');
            
            parapractice.forEach(paragraph =>{
                if(paragraph.textContent.includes('error')){
                    paragraph.classList.add('practice_error')
                };  
                if(paragraph.textContent.includes('success')){
                    paragraph.classList.add('success');
                }
            });
            //could use innerText, instead, but if something is hidden (like with display:none), it won't grab it. textContent gets hidden text, too.

            //HOW TO TOGGLE CLASSES (or toggle method)
            const headline = document.querySelector('.pears');

            headline.classList.toggle('test'); //adds class test
            console.log(headline.classList);
            headline.classList.toggle('test'); //removes test
            console.log(headline.classList);

           
            //DOM EVENTS

            //event listeners "listen" for events on elements. We attach event listeners to elements to do something when the event (click, mouse over, on load...whatever. There are lots of options) occurs. Then we use a callback function.

            var h2 = document.querySelector('#book-list h2');
            console.log(h2);
            h2.addEventListener('click', function(event){
                console.log(event.target);      //what is the target of the event?
                console.log(event);
            })