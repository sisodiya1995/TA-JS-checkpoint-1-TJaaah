/* 
1. Using loops take 10 inputs from user and find the average of all the numbers.
*/
let sum =0;
for(let i=1 ;i <=10 ;i++){
    sum =sum +i;
}
alert(`average of all the number ${sum/10}`);

/*2
2. What will be the output of the code below

```js
let i = 0;
while (i < 3) {
  println('hi');
  i++;
}
```
*/
// Output -Uncaught ReferenceError: println is not defined

/* 
3. Write a function named `getEvenSum` that accepts a parameter `max`. Return the sum of all even numbers. 
   The value of max should default to 10.
*/

function getEvenSum(max=10){
    let sumEven =0
   for(let i=1; i<=max; i++){
       if(i%2==0){
        sumEven =sumEven+i;
       } 
   }
   alert(`all even sum  ${sumEven}`);
}
getEvenSum(10);

/* 4. Write a function named `getOddSum` that accepts a parameter `max`. Return the sum of all odd numbers. 
       The value of max should default to 10.
*/
function getOddSum(max=10){
    let sumOdd =0
   for(let i=1; i<=max; i++){
       if(i%2 !==0){
        sumOdd =sumOdd + i;
       } 
   }
   alert(`all odd sum ${sumOdd}`);
}
getOddSum(10);

/* 
5. Write a function named `getProductOfDigits` that accepts a parameter `num`. 
         It returns the product of all the digits in the number.

- If the input value is less than 0 return `not a valid input`
- For example if the input is `123` output should be `6`.
*/
function getProductOfDigits(num){
     if(num <0){
       return `Not a valid input`
     }
       let product=1;
   for(let i=1; i<=num; i++){
        product =product*i;
       
   }
   return product;
}
console.log(getProductOfDigits(3));
console.log(getProductOfDigits(-3));
 
/* 
6. What will be the output of the following code below in multiple conditions? Explain with reason?

```js
function check(num) {
  if (num > 5) {
    return 'Bigger than 5';
  }

  if (num < 5) {
    return 'Smaller than 5';
  }

  return num;
}

check(10); // 'Bigger than 5'
check(1); // 'Smaller than 5'
check(5); //  5
```
*/

/*
7. What will be the output of the following code given below? Explain the reason?
*/

function getOutput(name) {
  if (name === 'Arya') return 'You are arya';
  if (name === 'John') return 'You are john';
  return 'Who are you';
}

getOutput('Arya'); // 'You are arya'
getOutput('John'); // 'You are john'
getOutput(); // 'Who are you'

/*
8. What will be the output of the following code given below? Explain the reason?
*/
function getOutput(name) {
  if (name === 'Arya') console.log('You are arya');
  if (name === 'John') console.log('You are john');
  return 'Who are you';
}

getOutput('Arya'); // You are arya
                    //'Who are you'
getOutput('John'); // You are john
                     // 'Who are you'
getOutput(); // 'Who are you'

/*
9. Can a function have multiple return statement? Give one example if possible and explain the reason.
*/

  function name() {
     return(`akash`);
     return(`akash singh`);
  }
  // it's not possible multiple return statement in function because when we call the function it's give first return statement .
     
/* 
10. What is the difference between `for` loop and `while` loop. What are the different place you can use them? 
Explain with example.
 
for-loop 
          The initialization, condition checking, and the iteration statements are written at the beginning of the loop.
          It is used only when the number of iterations is known beforehand.
          If the condition is not mentioned in the 'for' loop, then the loop iterates infinite number of times.
          The initialization is done only once, and it is never repeated.
          The iteration statement is written at the beginning.
          Hence, it executes once all statements in loop have been executed.

          for(initialization; condition; iteration){
   //body of the 'for' loop
}

while-loop 
           The initialization and the condition checking is done at the beginning of the loop.
           It is used only when the number of iterations isn’t known
           If the condition is not mentioned in the 'while' loop, it results in a compilation error.
           If the initialization is done when the condition is being checked, then initialization occurs every time the loop is iterated through.
            The iteration statement can be written within any point inside the loop.

        while ( condition) {
   statements;
   //body of the loop
} 

*/
