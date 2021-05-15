const swap = require("../../工具/交换")
/**
 * 冒泡排序
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  let n = arr.length
  if (n <= 1) return arr

  for (let i = 0; i < n; i++) {
    let flag = false
    // 从前往后冒泡 所以已经处理过的就不用再访问了
    // 并且由于每次遍历会访问j+1项，等于提前遍历了后一项
    // 所以这里的终止条件可以是n - i再减去1
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        flag = true
      }
    }
    // 如果这次循环都没有数字被交换 说明已经是排序好的数组
    if (!flag) return arr
  }
  return arr
}

bubbleSort.sortName = "冒泡排序"

// module.exports = bubbleSort

// * 冒泡排序使用了双层循环
// * 第一层循环是为了确定整体排序的次数,除非在第二次循环中发现已经排好序，就不用在执行
// * 第二层循环 j 起始都是1，这是因为需要同时对比 j-1 和 j 前后2个值，这层循环的主要作用就是对比前后2个值，
// *  如果前面的大于后面的就进行交换,最终会使得当前最大的值移动至末尾，也就是最外层每一次循环确定一个最大值；
// *  所以这就是为什么内层循环的限制条件是 arr.length - i
// * 然后如果发现排序正常，那么就可以直接返回现在的数组
function bubbleSort2(arr) {
  if (arr.length <= 1) return arr

  for (let i = 0; i < arr.length; i++) {
    // * 检测是否已经排好序了
    let isSorted = true
    // * 这里索引起始都是1，每次从头开始对比前后2个值
    // * j < arr.length - i 是因为每次外层循环确定一个最大值，可以不用参与后续计算
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        isSorted = false
        ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
    if (isSorted) return arr
  }

  return arr
}

module.exports = bubbleSort2
