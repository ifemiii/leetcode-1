var isPalindrome = function (x) {
  const isNegative = x < 0 ? true : false

  if (isNegative) {
    return false
  }

  const original = x
  let reverse = 0

  while (x > 0) {
    reverse = 10 * reverse + (x % 10)
    x = parseInt(x / 10)
  }

  return reverse == original
}

// Test cases
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
