/*
 * @Author: your name
 * @Date: 2021-02-16 08:10:41
 * @LastEditTime: 2021-02-16 10:11:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/二叉树/28-剑指-对称的二叉树.js
 * https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 */
// 思路
// 考虑使用BFS，层序遍历，获取每一层的值判断是否对称
var isSymmetric = function (root) {
  if (!root) return true

  var queue = [root]
  while (queue.length) {
    var len = queue.length
    var tmp = []

    while (len) {
      const node = queue.pop()

      if (node.left) {
        queue.unshift(node.left)
        tmp.unshift(node.left.val)
      } else {
        tmp.unshift(null)
      }

      if (node.right) {
        queue.unshift(node.right)
        tmp.unshift(node.right.val)
      } else {
        tmp.unshift(null)
      }
      len--
    }

    var i = 0
    var j = tmp.length - 1

    while (i < j) {
      if (tmp[i] != tmp[j]) return false
      i++
      j--
    }
  }

  return true
}

// ! 递归左右子树
// * 思路
// 对比节点的左右子树节点

var isSymmetric2 = function (root) {
  if (!root) return true

  return helper(root.left, root.right)
}

var helper = function (l, r) {
  // 终止条件
  if (l === null && r === null) return true
  if (l === null || r === null || l.val !== r.val) return false

  return helper(l.left, r.right) && helper(l.right, r.left)
}
