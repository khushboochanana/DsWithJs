const removeduplicate = arr => {
  return arr.reduce(function (a, b) {
    if (a.indexOf(b) < 0) a.push(b)
    return a
  }, [])

  // [...new Set(arr)];
}


const reverseArray=arr=>{
    return arr.reverse()
}

