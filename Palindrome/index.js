function palindrome (str) {
  let forward = ''
  let backward = ''

  for (let i = 0; i < str.length; i++) {
    if (/^[a-zA-Z]/.test(str[i])) {
      forward += str[i].toUpperCase()
    }
  }

  for (let x = forward.length - 1; x >= 0; x--) {
    backward += forward[x]
  }

  if (backward === forward) return true
  else return false
}

console.log(palindrome('eye'))
