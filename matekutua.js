function reversedNumber(num) {
  let reversed = num.toString().split('').reverse().join('');
  return Number(reversed);
}
