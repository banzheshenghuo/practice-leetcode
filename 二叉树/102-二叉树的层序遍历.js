/*
 * @Author: your name
 * @Date: 2021-02-15 15:39:51
 * @LastEditTime: 2021-02-15 15:39:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/二叉树/102-二叉树的层序遍历.js
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 */

var levelOrder = function (root) {
  if (!root) return []

  var result = []
  var queue = [root]

  while (queue.length > 0) {
    var len = queue.length
    var tmp = []

    // * 这里也是一个难点
    for (var i = 0; i < len; i++) {
      var node = queue.pop()
      tmp.push(node.val)
      // * 这里的顺序 先左节点入队列，然后再右
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(tmp)
  }
  return result
}

var levelOrder2 = function (root) {
  if (!root) return []

  const result = []
  let levelNodes = []
  const queue = [root, null]

  while (queue.length) {
    const node = queue.shift()

    if (node) {
      levelNodes.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    } else {
      // 遇到null说明已经迭代玩当前层
      result.push(levelNodes)
      levelNodes = []
      // 记住判断队列是否为空，否则会死循环
      queue.length && queue.push(null)
    }
  }

  return result
}
