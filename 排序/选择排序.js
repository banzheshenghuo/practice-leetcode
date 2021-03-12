const swap = require("../工具/交换")

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

//* 每次获取第i小的值，然后和数组上第i个元素进行交换
function selectSort2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    const temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }

  return arr
}

module.exports = selectSort2
