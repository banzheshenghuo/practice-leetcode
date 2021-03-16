/**
 * @param input
 * @param size
 * @returns {Array}
 */
// _.chunk(["a", "b", "c", "d"], 2)
// => [['a', 'b'], ['c', 'd']]

// _.chunk(["a", "b", "c", "d"], 3)
// => [['a', 'b', 'c'], ['d']]

// _.chunk(["a", "b", "c", "d"], 5)
// => [['a', 'b', 'c', 'd']]

// _.chunk(["a", "b", "c", "d"], 0)
// => []

function chunk(arr, num) {
  if (arr.length === 0 && num === 0) return []

  const count = Math.ceil(arr.length / num)

  if (count === 1) return arr

  let result = []
  let i = 0

  while (i < count) {
    const leftindex = i * num
    const rightindex = i * num + num
    console.log("index", leftindex, rightindex)
    result.push(arr.slice(leftindex, rightindex))
    i++
  }

  return result
}

const data = chunk(["a", "b", "c", "d"], 5)
console.log("data", data)

// function chunk(arr, size) {
//   if (!Array.isArray(arr) || arr.length < 1 || size === 0) {
//     return []
//   }
//   let target = Math.ceil(arr.length / size)
//   let start = 0
//   while (target > 0) {
//     arr.splice(start, 0, arr.splice(start, size))
//     start++
//     target--
//   }
//   return arr
// }
