function flatten(arr) {
  if (!Array.isArray(arr) || arr.length == 0) return arr

  return arr.reduce((a, b) => (Array.isArray(b) ? a.concat(flatten(b)) : a.concat(b)), [])
}

const result = flatten(["a", ["b", ["c"]], "d", ["e"]])
console.log(result)
