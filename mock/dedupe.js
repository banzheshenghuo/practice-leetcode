function dedupe(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr

  arr.sort((a, b) => a - b)

  let j = 1
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i]) {
      arr[j] = arr[i]
      j++
    }
  }

  arr.length = j

  return arr
}

const data = dedupe3([1, 2, 2, 3])

console.log(data)

function dedupe2(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr

  return arr.reduce((res, next) => {
    if (res[res.length - 1] !== next) {
      res.push(next)
    }
    return res
  }, [])
}

// 哈希表
function dedupe3(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr

  const clone = []
  const obj = {}

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if (!obj[value]) {
      clone.push(value)
      obj[value] = true
    }
  }

  return clone
}
