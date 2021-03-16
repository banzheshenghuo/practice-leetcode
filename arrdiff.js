var a = ["a", "b", "c", "d"]
var b = ["b", "c"]

//=> ['a', 'd']

// * 对两个进行排序，然后对比
function diff(a, b) {
  const [long, short] = a.length > b.length ? [a.slice(), b.slice()] : [b.slice(), a.slice()]

  const res = []

  for (let i = 0; i < short.length; i++) {
    const ivalue = short[i]

    let hasValue = false
    for (let j = 0; j < long.length; j++) {
      const jvalue = long[j]
      if (ivalue === jvalue) {
        long[j] = false
        hasValue = true
        break
      }
    }

    if (!hasValue) {
      res.push(ivalue)
    }
  }

  return res.concat(long.filter((el) => !!el))
}

console.log(diff(b, a))
