/*
 * @Author: your name
 * @Date: 2021-02-15 10:42:26
 * @LastEditTime: 2021-02-15 10:55:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/二叉树/55-剑指-I 二叉树的深度.js
 * https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
 */
// 思路： 从头结点往下遍历，对比每个子节点的level，最终遍历完，也获取到最大的leve等级
// 深度优先遍历
var maxDepth = function (root) {
  // 默认判空
  if (!root) return 0

  let finLevel = 1

  var iteritor = (node, level) => {
    finLevel = level > finLevel ? level : finLevel
    if (node.left) iteritor(node.left, level + 1)
    if (node.right) iteritor(node.right, level + 1)
  }

  iteritor(root, 1)

  return finLevel
}

var maxDepth2 = function (root) {
  // root为空时，说明已经越过叶节点，深度为0，从此处开始计算，
  if (root === null) return 0

  return Math.max(maxDepth2(root.left), maxDepth2(root.right)) + 1
}
