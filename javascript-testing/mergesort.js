const mergesort = arr => {
  const newArray = []

  if (arr.length > 1) {
    const left = mergesort(arr.slice(0, Math.floor(arr.length / 2)))
    const right = mergesort(arr.slice(Math.floor(arr.length / 2), arr.length))

    const leftLength = left.length
    const rightLength = right.length

    const longer = leftLength > rightLength ? leftLength : rightLength
    for (let i = 0; i < leftLength + rightLength; i++) {
      if (left[0] && left[0] <= right[0]) {
        newArray.push(left[0])
        left.shift()
      } else if (right[0] && right[0] <= left[0]) {
        newArray.push(right[0])
        right.shift()
      } else if (left[0]) {
        newArray.push(left[0])
        left.shift()
      } else if (right[0]) {
        newArray.push(right[0])
        right.shift()
      }
    }
    return newArray
  }

  return arr
}

const newList = []
for(let i = 0; i < 100000; i++) {
  newList.push(Math.random() * 1000)
}
console.log(mergesort(newList))
