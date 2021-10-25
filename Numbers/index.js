const swapNumber = (a, b) => {
  console.log(a, b, ' before')
  ;[(b, a)] = [a, b]
  console.log(a, b, ' after')
}

const rectangleOverlap = (topLeft1, bottomRight1, topLeft2, bottomRight2) => {
  if (topLeft1[0] > bottomRight2[0] || topLeft2[0] > bottomRight1[0]) {
    return false
  }
  if (topLeft1[1] > bottomRight2[1] || topLeft2[1] > bottomRight1[1]) {
    return false
  }
  return true
}
