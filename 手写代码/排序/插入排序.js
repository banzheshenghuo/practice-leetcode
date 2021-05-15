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

// 将数组分为2个区间，一个是有序，一个是无序的，每次从无序区间中去一个元素，按照顺序插入到有序的区间中
function insertSort2(arr) {
  if (arr.length <= 1) return arr

  for (let i = 1; i < arr.length; i++) {
    let target = arr[i]
    let j = i - 1
    // * 0-j 代表的是已经排序的区间，target代表本次需要加入排序的元素
    // * j >= 0 是当j=== -1 时推出循环，表示本次的target是最小的，然后在 arr[j + 1] = target 也就是 arr[0] = target
    while (j >= 0 && arr[j] > target) {
      // * 这一步相当远赋值，因为 arr[j] > target 所以target所处的位置肯定要被替换，所以提前赋值给 arr[j]
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = target
  }

  return arr
}
