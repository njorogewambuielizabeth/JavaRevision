//1. print all even numbers from 0-10
for (let x = 0; x <= 10; x++) {
  if (x % 2 === 0) {
    console.log(x);
  }
}
// print all even numbers up to 10,000
for (let f = 0; f <= 10000; f += 2) {
    console.log(f);
  }
  
//2.print a table containing multiplication table  from 1-10
for (let i = 1; i <=10; i++){
    let row = '';
    for (let x = 1; x <= 10; x++){
        row += (i * x) + '\t';
    }
    console.log(row);
}
// a table containing multiplication 
//table that includes 12 times the table
for (let i = 1; i <=12; i++){
    let row = '';
    for (let x = 1; x <= 12; x++){
        row += (i * x) + '\t';
    }
    console.log(row);
}
//create a length converter function that converts kilometers to miles
function converter(kilometers) {
    const milesperkm = 0.621371;
    return kilometers* milesperkm;
    
}
const distanceInKm = 10;
const distanceInMiles  = converter(distanceInKm);
console.log(distanceInMiles);

//4. calculate the sum of numbers within an array
// positive and negative nums
let arr1 = [2,4,-6,8,-10];
let sum1 = 0;
for(let i =0; i< arr1.length;i++){
    sum1 += arr1[i];
}
console.log(sum1);
//integers and decimals
let arr2 = [1,5.2,7,6.0,12.5];
let sum2 = 0;
for(let i=0; i<arr2.length;i++){
    sum2 += arr2[i];
}
console.log(sum2);

//table format
 function sumTable(table, index) {
    let sum = 0;
    for (let i = 0; i < table.length; i++) {
      if (index >= 0 && index < table[i].length) {
        sum += table[i][index];
      }
      else if (index < 0 && -index < table.length) {
        sum += table[table.length + index][i];
      }
    }
    return sum;
  }
 const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
const sumCol1 = sumTable(table, 0);
const sumRow2 = sumTable(table, -1); 

console.log(sumCol1);
console.log(sumRow2);

  //5.reversed elements
  function reversed(arr) {
    let reversed =[];
    for (let y = arr.length -1; y >=0; y--){
        reversed.push(arr[y]);
    }
    return reversed;
  }
  let myArray =["food",12,"eat","cold",54];
  let reversedArray = reversed(myArray);
  console.log(reversedArray);

  //6. sort arrays from lowest to largest
  function sortedArrays(arr) {
    arr.sort(function(a,b){
      return a-b;
    });
    return arr; 
  }
   let v = [12,3,54,67,98,0,21];
   console.log(sortedArrays(v));
   let w = [-5,-2,-10,-1,-8,-100,-34];
   console.log(sortedArrays(w));
   let x = [1.5,6.2,6.5,0.1,8.4,9.0,];
   console.log(sortedArrays(x));

   //7. Create a function that filters out negative numbers
   function getNewNums(array) {
      return array.filter(num => num > 1);
    
   }
   let nums = [12,-3,5,-9.2,54,67,-22,40,15];
   const positiveNums = nums.filter(num=> num > 0);
   console.log(positiveNums);
   // to filter positive numbers
   function filterPositiveNums(arr) {
      return arr.filter(num => num > 1);
    
   }
   let number = [12,-3,5,-9.2,54,67,-22,40,15];
   const negativeNums = nums.filter(num=> num < 0);
   console.log(negativeNums);

   //8. Remove the spaces found in a string
   function sentence(string) {
  return string.replace(/\s+(?!\s)/g, ' '); // learnt about (?!\s) is a negative look ahead
                                            //match must not follow a specific pattern
}

let words = " i  am  very   proud to be in a     Tech   school . ";
const cleanSentence = sentence(words);
console.log(cleanSentence); 

//9. Return a Boolean if a number is divisible by 10
function divisibleBy10(num) {
  return num % 10 ===0;
}
console.log(divisibleBy10(20));
console.log(divisibleBy10(51));
console.log(divisibleBy10(100));
console.log(divisibleBy10(3));

// 10. Return the number of vowels in a string
function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a","e","i","o","u"];
  for(let char of str){
    if(vowels.includes(char)){
      vowelsCount++
    }
  }
  return vowelsCount
  
}
console.log(getCount("virginia"));
console.log(getCount("fly"));

// Given a range of numbers from 0 to 100, console”Fizz” if 
//the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” 
//if divisible by both 3 and 5.

//div by 3= Fizz
//div by 5 = Buzz
//div by 3 and 5 = FizzBuzz
//begin by div by both



for(let x = 0; x <= 100; x++){
    if(x % 3 === 0 && x % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(x % 3 === 0){
        console.log("Fizz");
    }
    else if(x % 5 === 0){
        console.log("Buzz");
    }
   else{
    console.log(x)
   }
}


