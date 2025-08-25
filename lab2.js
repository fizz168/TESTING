function add(a, b){
    return a + b;
}
function substract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;

}
function divide(a, b){
    return a/b
}
function average(a, b){
    let sum =0;
    for(let i = 0; i < number.length; i++){
        sum += number[i];
    }
return sum / number.length
}

console.log("add :", add(5,3));
console.log("sub :",substract(7 ,2));
console.log("multi :", multiply(2 ,2));
console.log("divide :", divide(4, 2));
