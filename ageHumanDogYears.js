//Age of a human
const myAge = 51;

//This earlyYears value will change to 21.
let earlyYears = 2;
earlyYears *=10.5;

/*Subtracting 2 from the myAge variable to  account for the first two years*/
let laterYears = myAge-2;

/* Calculating the number of dog years for the later years by multiplying laterYears by 4, and using the multiplication assignment operator for a concise operation.*/
laterYears *= 4;
/* Adding the dog years accounted for in earlyYears and laterYears together to calculate the total myAge in dog years, and storing the result in myAgeInDogYears.*/
let myAgeInDogYears = earlyYears + laterYears;
/*Converting the string containing my name to lowercase using the toLowerCase method */
let myName = "Edgar T Cooksey III".toLowerCase();
/* Using string interpolation to display my name and age in both human and dog years.*/
console.log(`My name is ${myName}.  I am ${myAge} years old in human years which is ${myAgeInDogYears}`);




