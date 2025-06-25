function next_price() {
let number  = numberX.valueAsNumber; 
let number1      = 2;
const max_number = 9;
while (number1 < max_number + 1) {
   console.log( numberX.valueAsNumber + '*' + number1 + '=' + ( numberX.valueAsNumber * number1));  
   number1 = number1 + 1; 
}
}