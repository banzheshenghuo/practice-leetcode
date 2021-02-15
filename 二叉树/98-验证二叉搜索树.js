/*
 * @Author: your name
 * @Date: 2021-02-15 15:26:51
 * @LastEditTime: 2021-02-15 15:39:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/二叉树/98-验证二叉搜索树.js
 * https://leetcode-cn.com/problems/validate-binary-search-tree/submissions/
 */

// 思路：继续遍历，只是传递当前节点的取值范围，看是否满足需求
var isValidBST = function (root) {
  if (!root) return 0

  // 用栈来实现是不是不好传递参数
  // 但是用函数如何快速抛出来呢
  // var iterator = (node,min,max) => {
  //     const val = node.val
  //     if(val )
  // }

  var minData = -Infinity
  var tmp = [root]

  while (tmp.length > 0) {
    // console.log('minData',minData)
    var node = tmp.pop()

    if (node.tag) {
      if (node.val > minData) {
        // console.log('node.val',node.val)
        minData = node.val
        continue
      } else {
        return false
      }
    }

    if (node.right) tmp.push(node.right)

    node.tag = true
    tmp.push(node)

    if (node.left) {
      tmp.push(node.left)
    }
  }

  return true
}
