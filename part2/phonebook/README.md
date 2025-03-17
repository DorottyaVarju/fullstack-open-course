FORMS

1. useState function
    - it is used to define pieces of states
    - it gets initialized with the value that is its parameter
    - it returns an array --> from this array 2 elements are destructured and mostly used:
        a. first element: a variable which stores the state's value
        b. second element: a method which updates the state's value --> after this method is run, the component rerenders
    
    in the app Phonebook there are 2 states:
        a. persons
            - gets initialized with an array which contains an object
            - it can be updated with the setPersons method
        b. newNames
            - gets initialized with an empty string
            - it can be updated with the setNewName method

2. event handling
    - events: e.g. onclick, onchange, onmouseover, onmouseout etc.
    - event handler: a function which runs when a certain event occurs
    - target: the element to which the event is connected
    - the event parameter: the event that triggers the call to the event handler function
    - event.target: it stores the target of the event

    in the app Phonebook there are 2 event handling:
        a.  event: onsubmit
            event handler: addName function
            target: form element
        b.  event: onchange
            event handler: handleNameChange function
            target: input element

3. event.preventDefault() method
    - it prevents the default action of submitting a form
    - the default action of submitting a form, among other things, cause the page to reload

    in the app Phonebook the event.preventDefault() method is called immediately when the event handler function addName runs (i. e. when the form is submitted), so the page doesn't reload after the submit

4. controlled component
    - through the use of controlled components we can access the data contained in the form's input element

    in the app Phonebook the component App is a controlled component, because the component App controls the behavior of the input element:
        a. the value attribute is given to the input element and its value is set to the state variable newName
        b. the input element has the event onchange with the event handler function handleNameChange --> it means that when the text in the input element changes, the handleNameChange runs and the handleNameChange function calls the setNewName function with the event.target.value parameter --> so the setNewName sets the newName state variable's value to the event's target's value (the event's target is the input element) --> the component rerenders because the setNewName function was just called --> the input's value attribute's value is set to the newName's variable's freshly set value i.e. the text the user just texted --> so the event handler snychronizes the changes made to the input with the component's state

5. concat method
    - it doesn't mutate the original notes array
    - it creates a new copy of the original array with the new item added to the end
    - use concat instead of push --> never mutate state directly in React!

    in the app Phonebook the concat method is used in the event handler addName:
        a. the event handler immediately calls the event.preventDefault() method --> it prevents to reload the page after submitting the form
        b. it checks whether the newName state variable's value is an empty string --> if it is not, then a new constant's (nameObject) value is initialized with an object with the name property which value is set to the newName state variable
        c. the setPersons method sets the persons state variable's value to the copy of the persons's array elongated with the previously defined nameObject variable's value, hence the array is longer with plus one object than it was in the previous state (here is the concat method used) and the setNewName method sets the newName state variable's valut to empty string again

6. filter method
    - it is an array method
    - it creates a copy of the portion of the original array
    - the original array is filteres down to just the elements that pass the test of the function given as the filter method's parameter 

7. comparison operator
    const result = condition ? val1 : val2
    - if the condition is true, then the result variable's value is set to val1, otherwise it is set to val2
    - in JS val1 == val2 doesn't always work as expected, therefore when performing comparisons, it is safer to use val1 === val2

8. React developer tools extension
    - it is a browser extension
    - it helps tracking changes that occur in the app's state

9. some method
    - the includes method checks if an array contains a specific element
    - if the array consists of objects, the includes method checks if the object in the array is the exact same object in memory --> when dealing with objects, includes compares references --> when dealing with objects, use the some method instead

10. template string
    - template string = template literal
    - delimited with backticks

11. object equality
    - the 3 value comparison operations in JS:
        a. strict equality
            - it doesn't perform a type conversion when comparing two thing --> if the types differ, fase is returned --> values AND types must be matched
            - NaN === NaN false
            - +0 === -0 true
        b. loose equality
            - it performs a type conversion when comparing two things --> only values must be matched
            - NaN == NaN false
            - +0 == -0 true
        c. Object.is()
            - it doesn't perform a type conversion when comparing two thing --> values AND types must be matched
            - Object.is(NaN, NaN) true
            - Object.is(-0, +0) false

12. includes method
    - when used with strings, it is case sensitive

GETTING DATA FROM SERVER

1. JSON Server
    - it enables the use of server-side functionality in the development phase without the need to program any of it
    - it can be started without a separate installation --> it can be started by running the next command in the app's root directory: npx json-server --port 3001 db.json
    - it starts running on port 3000 by default
    - it can be installed as a development dependency by executing the command: npm install json-server --save-dev
    - development dependency: only used during development --> so while the API is being created I can develop the frontend, simulating the data the API will return

2. JSONView
    - it is a plugin for browsers
    - it formats the display of JSON-data

3. fetching data
    - old way (not recommended): using XMLHttpRequest 
        a. XMLHttpRequest = an HTTP request using an XHR object
        b. event-driven: the event is the onreadystatechange event
    - new way (widely supported by browsers): the fetch method
        a. it is based on promises

4. asynchronous model
    - synchronous:
        a. the code executes line by line
        b. the code stops to wait for the HTTP request
    - JS engines follow the asynchronous model
    - it requires all IO operations to be executed as non-blocking: i.e. the code execution continues immediately after calling an IO function, without waiting for it to return
        a. I = input operation, e.g. sending a request to the server
        b. O = output operation, e.g. Fetching data from the server
    - at some point after an asynchronous operations's completion, the JS engine calls the event handlers registered to the operation
    - JS engines are single-threaded by default = JS engines cannot execute code in parallel = it can execute only one task at a time --> it is a requirement to use a non-blocking model for executing IO operations --> otherwise the browser would freeze during the fetching data from a server
    - non-blocking = JavaScript does not stop (or "block") the execution of the code while waiting for an operation to complete --> instead, it moves on to the next task and handles the result of the operation later, when it's ready
    - JS engines are single-threaded by default, but it is possible to run parallelized code with the help of web workers --> the event loop (that manages asynchronous tasks (callbacks, promises, etc.)) of an individual browser window is only handled by a single thread

5. axios
    - it is a library
    - it can be used for communication between the browser and server
    - it can be installed from the command line, standing in the root directory of the project: npm install axios
    - is should be installed as a runtime dependency of the app because the execution of the program requires the existence of the library
    - the axios library can be brought into use by using the import statement: import axios from 'axios'
    - axios has a get method --> axios's get method returns a promise
    - the data returned by the server is one long string --> axios parses the data into a JavaScript array

6. npm
    - clear indicator that a project uses npm: the package.json file
    - npm commands should always be run in the project root directory

7. terminating a process binded to a port
    - on Windows:
        a. run CMD as administrator
        b. netstat -ano | findstr :3001
        c. taskkill /PID 2244 /F

8. promise
    - it is an object
    - it represents the eventual completion or failure of an asynchronous operation
    - it can have 3 distinct stated:
        a. pending
        b. fulfilled
        c. rejected
    - to access the result of the operation represented by the promise, registering an event handler to the promise is necessary --> registering an event handler to the promise is achieved by using the method then --> the mthen method has a response parameter --> the response parameter is an object

9. useEffect
    - via effect hook a component can connect to and synchronize with external systems --> external systems:
        a. network
        b. browser DOM
        c. animations
        d. widgets
        e. non-React code
    - effect hook is the right tool to use when fetching data from a server
    - effect hook is executed after completed rendering, but it can be chosen to fire it only when certain values have changed
    - it is a function
    - it takes 2 parameters:
        a. a function
        b. variables or empty array --> if this is an empty array, then the effect is only run along with the first render of the component

