const bubbleSort = require("./冒泡排序")
const quickSort = require("./快速排序")
const mergeSort = require("./归并排序")
const selectSort = require("./选择排序")
const insertSort = require("./插入排序")

const data = [[], [0], [1, 4, 6, 9, 2, 0], [1, 7, 4, 5, 2, 9], [9, 8, 7, 6, 5, 4, 3, 2], [1, 2, 3, 4, 5, 6, 7]]

data.forEach((value) => {
  const result = mergeSort(value.slice())
  const validateData = upperSort(value.slice())
  const isRight = result.join("") === validateData.join("")
  console.log(`正确性：${isRight}  结果：${result}`)
})

function upperSort(arr) {
  const temp = arr.slice()

  temp.sort((a, b) => a - b)

  return temp
}
