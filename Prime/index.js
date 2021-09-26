const isPrime = num => {
  if (num % 1 !== 0) {
    return false
  }

  if (num <= 1) {
    return false
  }

  if (num <= 3) {
    return true
  }

  if (num % 2 === 0) {
    return false
  }

  for (let i = 3; i < num; i++) {
    if (num % i == 0) {
      return false
    } else {
      return num
    }
  }
}

const primeSeries = num => {
  let series = [0, 1]
  for (let i = 2; i < num; i++) {
    if (num % i != 0) {
      series.push(i)
    }
  }

  return series
}
console.log(isPrime(10))

console.log(primeSeries(20))
