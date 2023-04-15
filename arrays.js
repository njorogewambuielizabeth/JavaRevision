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