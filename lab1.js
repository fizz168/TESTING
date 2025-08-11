 let numbers = [2, 3, 1, 5, 8];
 let sum = 0;
 for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
 }
 console.log(sum);




let number = [12, 45, 7, 23, 56, 10];
let largestNumber = 0;
for (let i = 0; i < number.length; i++){
    if (number[i]> largestNumber){
        largestNumber = number[i];
    }
}
console.log(largestNumber);


let nums = [2, 5, 8, 11, 14, 17, 20];
let evennums = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i]%2 == 0 ){
        evennums++ 
    }
}
console.log(evennums);

let words = ["sun", "planet", "moon", "galaxy", "star"];
let filtered = words.filter(words => words.length > 4);
console.log(filtered);