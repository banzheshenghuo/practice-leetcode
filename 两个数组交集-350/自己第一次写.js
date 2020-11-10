// 但是好像特别的慢啊

var intersect = function (nums1, nums2) {
  // 先遍历第一遍 将两个数组出现的元素储存在一个哈希表中，属性名是数组中出现的元素，值是一个有2个元素的数组，分别记录2个数组出现的次数
  if (nums1.length === 0 || nums2.length === 0) return []

  const map = new Map()
  const len = nums2.length > nums1.length ? nums2.length : nums1.length

  for (let i = 0; i < len; i++) {
    const value1 = nums1[i]
    const value2 = nums2[i]

    checkIntersect("0", value1, map)
    checkIntersect("1", value2, map)
  }

  let resultData = []

  for (let [key, value] of map.entries()) {
    if (value[0] > 0 && value[1] > 0) {
      const count = value[0] > value[1] ? value[1] : value[0]
      const fillArr = new Array(count).fill(key)

      resultData = resultData.concat(fillArr)
    }
  }

  return resultData
}

function checkIntersect(location, value, map) {
  if (typeof value === "undefined") return

  if (!map.get(value)) {
    map.set(value, [0, 0])
  }

  const mapElm = map.get(value)

  mapElm[location] = mapElm[location] + 1
}

const arr1 = [1, 2, 2, 1]
const arr2 = [2, 2]
intersect(arr1, arr2)
