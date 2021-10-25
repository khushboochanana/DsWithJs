//Count occurence of a given character in string
const countOccurence = (str, char) => {
  return (str.match(new RegExp(char, 'g')) || []).length
}

console.log(countOccurence('jjjj dhhf w  jjs a jdjjd ', 'D'))

const firstNonRepatedChar = str => {
  for (let i = 0; i < str.length; i++) {
    let j = str.charAt(i)
    if (str.indexOf(j) == str.lastIndexOf(j)) {
      return j
    }
  }
  return null
}


