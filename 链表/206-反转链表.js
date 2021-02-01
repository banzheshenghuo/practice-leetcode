/*
 * @Author: your name
 * @Date: 2021-02-02 05:51:01
 * @LastEditTime: 2021-02-02 06:30:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/链表/206-反转链表.js
 * https://leetcode-cn.com/problems/reverse-linked-list/
 */

//  思路：创建一个哨兵节点，然后使用双指针从哨兵节点开始迭代，快指针比慢指针快一位，然后
// 感觉又不是双指针，应该是记录上一位

var reverseList = function (head) {
  if (!head) return head

  var fast = head
  var slow = null

  while (fast) {
    var next = fast.next
    fast.next = slow
    slow = fast
    fast = next
  }

  return slow
}

// 问题：链表看起来是一个节点，但是不是简单的节点，他是有自己的结构的
