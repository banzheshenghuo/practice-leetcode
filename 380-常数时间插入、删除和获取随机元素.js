// https://leetcode-cn.com/problems/insert-delete-getrandom-o1/

//* 支持插入、删除、搜索的平均复杂度都为 O(1)
//* 支持获取集合中随机数，几率相同。

//* 初始思路：
//* 1. 由于时间复杂度为 O(1)，第一想到的就是用哈希表存比如object
//* 2. 支持取随机数使用Math.random() 获取随机数
// * 但是好像很慢啊,怀疑是最后一步 object.keys慢

// * 优化
// * 1. 之前只有使用一个对象作为数据储存，这样会导致最红Object.keys耗时过长，所以加入数组
// * 2. 数组保存数据，对象的键名为成员的值，键值为对应数组的下标
// * 3. remove时，对象直接可以使用delete，数组则将需要删除项和最后一项交换位置，然后执行pop操作，同时修改交换储存在对象的下标
// * 4. 最终取随机数时，使用位运算 | 0 ,比Math.floor更为高效

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.arr = []
  this.data = {}
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  // * 说明存在
  if (typeof this.data[val] !== "undefined") {
    return false
  }

  this.arr.push(val)
  this.data[val] = this.arr.length - 1
  return true
}

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (typeof this.data[val] === "undefined") {
    return false
  }

  this.data[this.arr[this.arr.length - 1]] = this.data[val]
  ;[this.arr[this.arr.length - 1], this.arr[this.data[val]]] = [this.arr[this.data[val]], this.arr[this.arr.length - 1]]

  this.arr.pop()
  delete this.data[val]

  return true
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  if (this.arr.length === 0) return

  const randomIndex = (Math.random() * this.arr.length) | 0

  return this.arr[randomIndex]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
