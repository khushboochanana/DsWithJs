const merge = (left, right) => {
  let sortedArr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr
  }
  let left = arr.splice(0, Math.floor(arr.length / 2))
  return merge(mergeSort(left), mergeSort(arr))
}


console.log(mergeSort([6,34,2,19,56,32,65,90,3,4,5,3,22,4,5,66,2]))