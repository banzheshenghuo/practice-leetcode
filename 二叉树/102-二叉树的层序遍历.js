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
    for (var i = 0; i < len; i++) {
      var node = queue.pop()
      tmp.push(node.val)

      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(tmp)
  }
  return result
}
