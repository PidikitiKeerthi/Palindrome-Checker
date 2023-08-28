function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Check if the clean string is the same forwards and backwards
  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("eye")); // Should return true
console.log(palindrome("_eye")); // Should return true
console.log(palindrome("race car")); // Should return true
console.log(palindrome("not a palindrome")); // Should return false
console.log(palindrome("A man, a plan, a canal. Panama")); // Should return true
console.log(palindrome("never odd or even")); // Should return true
console.log(palindrome("nope")); // Should return false
console.log(palindrome("almostomla")); // Should return false
console.log(palindrome("My age is 0, 0 si ega ym.")); // Should return true
console.log(palindrome("1 eye for of 1 eye.")); // Should return false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // Should return true
console.log(palindrome("five|\_/|four")); // Should return false
