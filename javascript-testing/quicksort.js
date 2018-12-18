const quicksort = (arr, start, end) => {
  if (!start && !end) {
    start = 0
    end = arr.length - 1
  }

  if (end - start > 0) {
    const pivot = arr[end]
    let idx = start
    for (let i = start; i <= end; i++) {
      if (arr[i] <= pivot) {
        const temp = arr[idx]
        arr[idx] = arr[i]
        arr[i] = temp
        idx++
      }
    }
    quicksort(arr, start, idx - 2)
    quicksort(arr, idx, end)
  }
  return arr
}

const testArray = []
for(let i = 0; i < 100000; i++) {
  testArray.push(Math.random() * 1000)
}

console.log(quicksort(testArray))
