function reverseNumber(num){
  let string = num.toString(); 

let reversedString = string.split('').reverse().join('');

return Number(reversedString);
}

