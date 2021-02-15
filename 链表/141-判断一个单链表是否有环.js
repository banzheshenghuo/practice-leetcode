/*
 * @Author: your name
 * @Date: 2021-02-13 09:21:54
 * @LastEditTime: 2021-02-14 11:41:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/链表/141-判断一个单链表是否有环.js
 * https://leetcode-cn.com/problems/linked-list-cycle/
 */

// 思路：判断是否有环
// 1. 双指针，一个每次遍历走一步，一个走2步，如果为null则说明无环，如果相同则说明有环

const { makeListNode } = require("../工具/链表")

var hasCycle = function (head) {
  if (!head || !head.next) return false

  var node1 = head
  var node2 = head

  while (node1.next && node2.next && node2.next.next) {
    node1 = node1.next
    node2 = node2.next.next

    if (node1 === node2) return true
  }

  return false
}

console.log(hasCycle(makeListNode([-21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20, 14, 14, 2, 13, -24, 21, 23, -21, 5])))

// 节点的值可能相等，那就不能通过值相等来判断了，那我就继续打tag,看是遍历每一个节点快些还是双指针跳着快些
// 可以用双指针，但是跨2步的不能打tag，他必须回来找慢的tag

// 话说为什么要移动2个节点，而不是更多呢？

// * 后面又做了一次
var hasCycle1 = function (head) {
  if (!head) return false

  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }

  return false
}
