//Arrays
//Question No1 :
var fruitArr = ["Apple", "Banana", "Mango", "Orange"];
//Question No 2
var numberArr = [10, 20, 30, 40];
//Question3:
// Accessing the third element of the array
var thirdFruit = fruitArr[2];
console.log(thirdFruit);
//Question No4:
//Change the second Element of number Array
numberArr[1] = 25;
console.log(numberArr);
//Question NO5
//Add the Element of fruitArray to the end:
var addElement = fruitArr.push("grape");
console.log(addElement);
console.log(fruitArr);
//Question No6:
var lastFruit = fruitArr.pop();
console.log(lastFruit);
//Question No7:
//Remove the firstElement from the fruit array
var firstElement = fruitArr.shift();
console.log(firstElement);
//Question No8:
//Add the Element to the begining of fruit Array:
fruitArr.unshift("Kiwi");
console.log(fruitArr);
//Question No9:
// Removes two elements starting from index 1
var removedArray = fruitArr.splice(1, 2);
console.log(removedArray);
//Question No 10:
//Insert the Element "Pineapple", "kiwi" at index 2:
fruitArr.splice(0, 2, "Pineapple", "kiwi");
console.log(fruitArr);
//Question No 11:
//create a new array named firt two element ot the fruitArray
var cirtusFruits = fruitArr.splice(0, 2);
console.log(cirtusFruits);
//Question No 12:
//create a new array named last Two Element ot the fruitArray
var fruitArray = ["Apple", "Banana", "Mango", "Orange"];
var lastTwoFruits = fruitArray.slice(-2);
console.log(lastTwoFruits);
