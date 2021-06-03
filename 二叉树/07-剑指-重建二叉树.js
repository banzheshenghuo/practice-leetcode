/**
 * Definition for a binary tree node.
/**
 * https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 */

/*
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null

  let i = 0
  while (preorder[0] !== inorder[i]) {
    i++
  }

  const node = new TreeNode(preorder[0])

  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))

  return node
}
