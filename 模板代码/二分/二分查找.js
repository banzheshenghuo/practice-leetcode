/**
 * 二分搜索 从一个数组中搜索一个确定的数
 */

console.log(binarySearch([1, 2, 3, 4, 5], 2))

function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  // 需要等于号，有可能left和right相等
  while (left <= right) {
    const mid = (left + (right - left) / 2) | 0

    // 严格分清楚，每一种可能性都列出来
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      right = mid - 1
    } else if (arr[mid] < target) {
      left = mid + 1
    }
  }

  return -1
}
