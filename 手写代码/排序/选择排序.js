const swap = require("../../工具/交换")

function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, i, min)
  }
  return arr
}

selectSort.sortName = "选择排序"

// module.exports = selectSort

// * 和冒泡类似 也是双层循环，但是不同的是冒泡是前后比较进行交换，而选择是每次循环找到一个最小值和当前的i进行交换
//* 每次获取第i小的值，然后和数组上第i个元素进行交换
function selectSort2(arr) {
  if (arr.length <= 1) return arr

  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    ;[arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}

module.exports = selectSort2
