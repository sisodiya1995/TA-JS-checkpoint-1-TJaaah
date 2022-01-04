 /*1.  first
function sum(a, b) {
  return a + b;
}
  second
function sum(a, b) {
  console.log(a + b);
}
Ans-first sum() function is type of number, and second sum() function is undefined type.


*/


/*
2. If we store the returned value of both functions above in variable `first` and `second` what will be the value of `first` and `second`. 
*/
function sum(a, b) {
    return a + b;
  }
let first =sum(4,6);// 10
function sum(a, b) {
    console.log(a + b);
  }
let second =sum(4,7);// 11

/*
3. What will be the output when you call above `sum` function (first) with three parameter like `sum(12, 24, 35)`. Explain why?
*/ 

/*
3-Ans- function sum(a, b) {
    return a + b;
  }
  sum(12, 24, 35)// 36 because third parameter are never use in code.
*/

/*
4. Can you store the first `sum` function in a variable named `add`. If yes why? If no why?

Ans-let add =sum(6,7); yes we can store the first `sum` function in a variable because function is an object and it's store the
     block of code , and object has value and we can store the value in variable.
*/

/* 
5. Declare a function named `sayHello` the accepts a parameter `name` and returns the name like `Hello Arya`.
*/
function sayHello(name){
  return(`Hello ${name}`);
}
sayHello('Arya');

/* 
6. What will be the output of the function below and why?

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

showMessage();

Ans- Output-'Hello, John' ,bacause if any variable declare outside the function called globle variable and we can access inside 
    the function.
*/

/* 
7. What will be the output for `Output1` `Output2` and `Output3` in the code below.

```js
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  return message;
}

alert(userName); // John

showMessage(); // 'Hello, John'

alert(userName); // john
```

*/

/*
8. What is a Anonymous Function give example of three functions.

Ans-const addNumber =function(n1 ,n2){
                     return n1 + n2;
                   };
    const addNumber =(n1,n2){
                  return n1 +n2 ;
          }  
    const addNumber =(n1,n2) =>n1+n2;
    If we do not  define the name of the function ,then it's  call Anonymous function.                      
*/ 

/*
9. Can function declaration be a Anonymous Function? Explain
Ans- A function declaration cannot be anonymous, but a function expression can.
*/

/*
10. Give 5 example of good naming convention for defining a function. You can read the details below to do that.

```md
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
```

Ans- "sum" - add numbers
     "devideNumber" -devide the two number
     "multiplyNumber"- multyply two number
     "greaterNumer"-  find the greater number
     "getName" -
     "setName" -
*/