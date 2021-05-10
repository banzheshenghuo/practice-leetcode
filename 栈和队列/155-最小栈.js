/**
 * https://leetcode-cn.com/problems/min-stack/
 */

// * 思路：第一反应就是维护2个栈，但是如何处理这个最小值的栈才是重点
// 方案一：每次入栈使用二分搜索插入，出栈使用indexOf查出来维护（这个其实不是栈，是数组）
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.ascStack = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.ascStack.length === 0) {
    this.ascStack.push(val)
  } else {
    const index = binarySearch(this.ascStack, val)
    this.ascStack.splice(index, 0, val)
  }

  this.stack.push(val)
}

function binarySearch(arr, val) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = (left + (right - left) / 2) | 0
    if (arr[mid] >= val) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let val = this.stack.pop()
  const index = this.ascStack.indexOf(val)

  this.ascStack.splice(index, 1)
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.ascStack[0]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// 方案二：stack push时，当push的值比minStack栈顶还小则入栈，pop时如果和minStack栈顶相同则minStack出栈
// https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/easy/155.min-stack
