# 1️⃣ What is the difference between var, let, and const?
# Ans : 

Var , Let and const are varible but 

Let is reasigneable(rewriteble) and value is change when new vlue is assign , this is block scope.

const is not reassigneable , value is constant and not chnageble but push pop is possible in array or object

var is changeble but not use in modern javascrpt this is old way to assign varible , this is reassiginable and redeclaureable.


# 2️⃣ What is the spread operator (...)?
# Ans:
 
 Spread operator is used for copy the array from array  or object to object . It is allow copy , marge or pass the elements

 Eample : 

 const number = [3,4,5,6]
 console.log(.. number);

 const array2 = [...array1]

 here array2 is copy form array1


# 3️⃣ What is the difference between map(), filter(), and forEach()?

# Ans:
 map() returns a new array after modifying each element.Example the a array will obtain new value according to operation in old array. 

 filter() return a new array based on a condition , select the elements

 forEach() is a loops through the array without returning a new array.



# 4️⃣ What is an arrow function?
# Ans:
Arrow function is a short funtion that is easy to write , no need to extra word to declare a funtion and easy to implement.
Its like =>{....} 
Example : 
const add = (a,b) => a + b;
 
# 5️⃣ What are template literals?
# Ans:

Template Literals is backticks use the value of a javascript function instade of single quote. Its like : ${...}

It's allow us to embed variable and expressions inside a string using ${}.