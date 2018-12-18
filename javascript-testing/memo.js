const memo = f => {
  const cache = {}

  return function () {
    const key = Array.from(arguments).join()
    if (cache[key]) {
      // console.log('cached')
      return cache[key]
    } else {
      return cache[key] = f(...arguments)
    }
  }
}

const add3 = (a, b, c) => {
  console.log('uncached')
  return a + b + c
}

const add3memo = memo(add3)

// console.log(add3memo(5, 6, 7))
// console.log(add3memo(5, 6, 7))
// console.log(add3(5, 6, 7))

const fibmemo = memo(n => {
  if (n === 0 || n === 1) {
    return n
  }
  return fibmemo(n - 2) + fibmemo(n - 1)
})

// console.log(fibmemo(5));
// console.log(fibmemo(4));
console.log(fibmemo(1476));
// console.log(fibmemo(42));
// console.log(fibmemo(42));
// console.log(fibmemo(43));
// console.log(fibmemo(43));
// console.log(fibmemo(44));
console.log(fibmemo(44));

export {
  memo
}
