/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function calSum(a,b){
    if(a===b){
       return (a+b)*3
    } else {
       return a+b
    }
}
console.log(calSum(3,3))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function checkTrue(a,b){
    return (a === 50 || b===50 || (a+b)===50 ? true : "") 
}
// console.log(checkTrue(40,0))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function removeChar(str,x){
    let newString = str.split("")
    let removedString = newString.splice(x-1,1)
    return newString.join("")
}
// console.log(removeChar("Hellooooo",2))
/*

4)
 Create a function to find the largest of three given integers.
*/
function largestOf(a,b,c){
    // if(a>b && a>c && b>c){
    //     return console.log(`${a} is greater than ${b} is greater than ${c}`)
    // } else if(a>b && a>c && c>b) {
    //     return console.log(`${a} is greater than ${c} is greater than ${b}`)
    // } else if(b>a && a>c && c>b) {
    //     return console.log(`${a} is greater than ${c} is greater than ${b}`)
    // }
    console.log(`${Math.max(a,b,c)} is the biggest number`)
}
// console.log(largestOf(100,4,3))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function withinRange(a,b){
    if ((a>= 40 && a<=60 && b>=40 && b<= 60)||(a>=70 && a<=100 && b>=70 && b<=100)){
        console.log("The numbers are within the given ranges")
    } else {
        console.log("The numbers are not within the given ranges")
    }
}
// console.log(withinRange(45,42))
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function newString(str,x){
    let newOne = str.repeat(x)
    return newOne
}
// console.log(newString("hey",4))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function cityName(str){
    if((str.startsWith("Los"))||(str.startsWith("New"))){
        console.log(str)
    }
}
// console.log(cityName("Berlin"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const testArray =[3,6,93]

function sumOfThree(){
    let sum = testArray[0]+testArray[1]+testArray[2]
   return sum
}
// console.log(sumOfThree())
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const testi = [1,453561]

function whetherOneOrThree(){
if(testi[0]===1 || testi[0]===3 || testi[1]===1 || testi[1]===3){
    console.log("positive!")
} else {
    console.log("neither...nor")
}
}
// console.log(whetherOneOrThree())


// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3


// 11)

// Create a function to find the longest string from a given array of strings.

const longArray = ["hello", "how", "are", "youuuuuu?", 2, true]

function longestString(){
    let longest = longArray[0].length
     for(let i=1; i<longArray.length;i++){
         if(longArray[i].length>=longest){
            longest=longArray[i].length
         }
     } 
     return longest
 }
// console.log(longestString())
// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

function typeOfAngle(x){
    switch(x){
        case 0<x<90 : console.log("Acute angle");
        break;
        case x===90 : console.log("Right angle");
        break;
        case 90<x<180 : console.log("Obtuse angle");
        break;
        case x===180 : console.log("Straight angle");
        break;
        default: console.log("Reflex angle");
    }
}
console.log(typeOfAngle(180))
// 13)

// Create a function to find the index of the greatest element of a given array of integers

// 14)

// Create a function to get the largest even number from an array of integers.

// 16)

// Create a function to check from two given integers, whether one is positive and another one is negative.

// 17)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

// 18)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 19)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC


