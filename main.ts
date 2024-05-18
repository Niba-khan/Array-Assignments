//~~~~~~~~~~Assigmrent for Arrays~~~~~~~~
//~~~~~~~~~~Question No1~~~~~~~~~~
let fruitArr:string [] = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruitArr);

//~~~~~~~~~~Question No 2~~~~~~~~~
let numberArr: number[] = [10, 20, 30, 40];
console.log(numberArr);

//~~~~~~~~~~Question3~~~~~~~~~~~~
// Accessing the third element of the array
let thirdFruit = fruitArr[2]; 
console.log(thirdFruit);

//~~~~~~~~~~~Question No4 ~~~~~~~~~~~
//Change the second Element of number Array
numberArr[1] = 25;
console.log(numberArr);

//~~~~~~~~~~~~Question NO5~~~~~~~~~~~~~
//Add the Element of fruitArray to the end:
let addElement = fruitArr.push("grape");
console.log(addElement);
console.log(fruitArr);

//~~~~~~~~~~~~Question No6~~~~~~~~~~~~~
let lastFruit = fruitArr.pop();
console.log(lastFruit);

//~~~~~~~~~~~~~Question No7~~~~~~~~~~~~~
//Remove the firstElement from the fruit array
let firstElement = fruitArr.shift();
console.log(firstElement);

//~~~~~~~~~~~~~~~Question No8~~~~~~~~~~~~~~
//Add the Element to the begining of fruit Array:
fruitArr.unshift("Kiwi");
console.log(fruitArr);

//~~~~~~~~~~~~~~Question No9~~~~~~~~~~~~
// Removes two elements starting from index 1
let removedArray = fruitArr.splice(1,2);
console.log(removedArray);

//~~~~~~~~~~~~~~~Question No 10~~~~~~~~~~~~
//Insert the Element "Pineapple", "kiwi" at index 2:
fruitArr.splice(0,2, "Pineapple", "kiwi");
console.log(fruitArr);

//~~~~~~~~~~~~~~~~Question No 11~~~~~~~~~~~~~~~~~~~~
//create a new array named firt two element ot the fruitArray
let cirtusFruits = fruitArr.splice(0,2);
console.log(cirtusFruits);

//~~~~~~~~~~~~~~~~~Question No 12~~~~~~~~~~~~~~~~~
//create a new array named last Two Element ot the fruitArray
let fruitArray:string [] = ["Apple", "Banana", "Mango", "Orange"];
let lastTwoFruits = fruitArray.slice(-2);
console.log(lastTwoFruits);


