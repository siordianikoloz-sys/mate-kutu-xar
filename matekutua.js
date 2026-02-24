function reversedNumber(num) {
  let cifri = num.toString().split('').reverse().join('');
  return Number(cifri);
}
