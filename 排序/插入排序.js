// 把数据分为有序和无序2个集合，每次取一个无序集合的元素插入到有序集合中

// * 可倒是可以，但是创建了新的集合，增加了空间复杂度
function insertSort(arr) {
  if (arr.length <= 1) return arr

  const sortArr = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i]

    if (value <= sortArr[0]) {
      sortArr.unshift(value)
      continue
    } else if (value >= sortArr[sortArr.length - 1]) {
      sortArr.push(value)
      continue
    }

    for (let j = 1; j < sortArr.length; j++) {
      if (value >= sortArr[j - 1] && value <= sortArr[j]) {
        sortArr.splice(j, 0, value)
        break
      }
    }
  }

  return sortArr
}

module.exports = insertSort2

// 将数组分为2组，一组是有序，一组是无序的，每次从无序集合中去一个元素，按照顺序插入到有序的集合中

function insertSort2(arr) {
  if (arr.length <= 1) return arr

  for (let i = 1, len = arr.length; i < len; i++) {
    const target = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > target) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = target
  }

  return arr
}

insertSort2([1, 4, 6, 9, 2, 0])
