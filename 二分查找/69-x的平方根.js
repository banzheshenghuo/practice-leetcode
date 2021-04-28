/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
  let left = 0
  let right = x
  let ans = -1
  while (left <= right) {
    let mid = Math.round((left + right) / 2)
    let product = mid * mid
    if (product < x) {
      ans = mid
      left = mid + 1
    } else if (product > x) {
      right = mid - 1
    } else if (product === x) {
      return mid
    }
  }

  return ans
}

console.log(mySqrt(200))

var mySqrt2 = function (x) {
  let l = 0
  let r = x

  while (l <= r) {
    const mid = (l + (r - l) / 2) | 0
    const val = mid * mid
    if (val === x) {
      return mid
    } else if (val < x) {
      l = mid + 1
    } else if (val > x) {
      r = mid - 1
    }
  }
  // 因为是向下取整获取是r，如果是向上就是l
  return r
}
