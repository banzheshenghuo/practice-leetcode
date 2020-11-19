// https://leetcode-cn.com/problems/insert-delete-getrandom-o1/

//* 支持插入、删除、搜索的平均复杂度都为 O(1)
//* 支持获取集合中随机数，几率相同。

//* 初始思路：
//* 1. 由于时间复杂度为 O(1)，第一想到的就是用哈希表存比如object
//* 2. 支持取随机数使用Math.random() 获取随机数
// * 但是好像很慢啊,怀疑是最后一步 object.keys慢

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.data = {}
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  // * 说明存在
  if (this.data[val]) {
    return false
  }

  this.data[val] = true
  return true
}

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.data[val]) {
    return false
  }

  delete this.data[val]

  return true
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const dataIndexs = Object.keys(this.data)

  if (dataIndexs.length === 0) return

  const randomIndex = Math.floor(Math.random() * dataIndexs.length)

  return dataIndexs[randomIndex]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
