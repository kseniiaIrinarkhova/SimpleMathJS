/******************************************************************************************* 
 *                                      Sample part
********************************************************************************************/
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
let isValid = isSum50 && isTwoOdd && !isOver25 && isUnique; //change const to let

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
    ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
    !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


/******************************************************************************************* 
 *                                Part 1: Math Problems
********************************************************************************************/
console.log(`
    ********************************
    *****Part 1*********************
    ********************************`);
// Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
console.log(`All are divisible by 5: ${isDivBy5}`); //check answer in console
// Check if the first number is larger than the last.Cache the result in a variable.
const firstLargerLast = n1 > n4;
console.log(`Is first number (n1 = ${n1}) larger than last number (n4 = ${n4}): ${firstLargerLast}`); //check answer in console
// Accomplish the following arithmetic chain:
// 1. Subtract the first number from the second number.
// 2. Multiply the result by the third number.
// 3. Find the remainder of dividing the result by the fourth number.
let smallLogic = n2 - n1; //first step
smallLogic *= n3; //second step
smallLogic %= n4; //third step

console.log(`Estimate: ((n2-n1)*3)%n4 ( ((${n2} - ${n1}) * ${n3} )% ${n4} ): ${smallLogic}`) //check answer in console
// Change the way that isOver25 calculates so that we do not need to use the NOT operator(!) in other logic comparisons.Rename the variable as appropriate.
const allLess25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

console.log(`isOver25: ${isOver25}, allLess25: ${allLess25}`);
console.log(`isValid with isOver25: ${isValid}`);
isValid = isSum50 && isTwoOdd && allLess25 && isUnique;
console.log(`isValid with allLess25: ${isValid}`); //check answer in console

/******************************************************************************************* 
 *                                Part 2: Practical Math
********************************************************************************************/
console.log(`
    ********************************
    *****Part 2*********************
    ********************************`);
/**Input data
*You are planning a cross - country road trip!
*The distance of the trip, in total, is 1, 500 miles.
*Your car’s fuel efficiency is as follows:
*   At 55 miles per hour, you get 30 miles per gallon.
*   At 60 miles per hour, you get 28 miles per gallon.
*   At 75 miles per hour, you get 23 miles per gallon.
*You have a fuel budget of $175.
*The average cost of fuel is $3 per gallon.
 */

//Declare non changeable variables
const distance = 1500;
const budget = 175;
const fuelCost = 3;

//Declare changeable variables
let pace;
let time;
let fuelAmount;

// How many gallons of fuel will you need for the entire trip ?
//Will your budget be enough to cover the fuel expense ?
//How long will the trip take, in hours ?
//Compare the results when traveling at an average of 55, 60, and 75 miles per hour.Which makes the most sense for the trip ?
//Log the results of your calculations using string concatenation or template literals.

const maxFuelAmount = budget / fuelCost; //estimate max abount of fuel that we could buy
console.log(`We could afford ${maxFuelAmount} gallons for this trip.`);

//If pace is 55 miles per hour you get 30 miles per gallon

pace = 55;
fuelAmount = distance / 30;
time = distance/pace;
const remainingFuel55 = maxFuelAmount - fuelAmount;

console.log(`
If pace is 55 miles per hour:
Trip will take us ${time} hours.
We need ${fuelAmount} gallons of fuel.
Will our budget enough?: ${remainingFuel55 >= 0 }`);

// If pace is 60 miles per hour, you get 28 miles per gallon

pace = 60;
fuelAmount = distance / 28;
time = distance / pace;
const remainingFuel60 = maxFuelAmount - fuelAmount;

console.log(`
If pace is 55 miles per hour:
Trip will take us ${time} hours.
We need ${fuelAmount} gallons of fuel.
Will our budget enough?: ${remainingFuel60 >= 0}`);

// If pace is 75 miles per hour, you get 23 miles per gallon

pace = 75;
fuelAmount = distance / 23;
time = distance / pace;
const remainingFuel75 = maxFuelAmount - fuelAmount;

console.log(`
If pace is 55 miles per hour:
Trip will take us ${time} hours.
We need ${fuelAmount} gallons of fuel.
Will our budget enough?: ${remainingFuel75 >= 0} `);

const is55PaceBetter = remainingFuel55 > remainingFuel60 && remainingFuel55 > remainingFuel75;
const is60PaceBetter = remainingFuel60 > remainingFuel55 && remainingFuel60 > remainingFuel75;
const is75PaceBetter = remainingFuel75 > remainingFuel60 && remainingFuel75 > remainingFuel55;

console.log(`
Let's choose te best pace:
Is 55 miles per gallon better pace? - ${is55PaceBetter}
Is 60 miles per gallon better pace? - ${is60PaceBetter}
Is 75 miles per gallon better pace? - ${is75PaceBetter}`);