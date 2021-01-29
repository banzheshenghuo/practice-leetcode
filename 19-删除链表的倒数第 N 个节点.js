/*
 * @Author: your name
 * @Date: 2021-01-29 08:18:50
 * @LastEditTime: 2021-01-29 13:30:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/19-删除链表的倒数第 N 个节点.js
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */

//  思路
//  问题：
//  1. 无法判断哪一个节点是最后的节点，也就无法判断要删除的节点是哪一个？ 最简单的本办法就是遍历两遍，第一边计数，第二遍找到对应哪个节点
//  2. 进阶使用一趟扫描，做倒是能做，但是会增加空间复杂度，使用空间代替时间，每一个节点都进行记录，然后扫描完后改变需要的节点的指向就行

var ListNode = require("./工具/链表")

// 方案一
var removeNthFromEnd = function (head, n) {
  var preHead = new ListNode(null, head)
  var curNode = head
  var listSize = 0

  while (curNode) {
    listSize++
    curNode = curNode.next
  }

  curNode = preHead

  while (curNode.next) {
    if (listSize == n) {
      curNode.next = curNode.next.next
      return preHead.next
    }
    listSize--
    curNode = curNode.next
  }
}

// 方案二
var removeNthFromEnd2 = function (head, n) {
  var nodeArr = []
  var newList = new ListNode(null, head)
  var curNode = newList

  while (curNode) {
    nodeArr.push(curNode)
    curNode = curNode.next
  }

  var lastIndexOfRemoveNode = nodeArr.length - n - 1

  var targetNode = nodeArr[lastIndexOfRemoveNode]

  targetNode.next = targetNode.next.next

  return newList.next
}

//确实没想到还可以使用双指针，快指针比慢指针提前n步，slow在fast走了n步后开始迭代，最终当fast.next 为 null 说明到队尾了，此时slow就是指向要删除的前继节点

// 方案三：
var removeNthFromEnd3 = function (head, n) {
  var newList = new ListNode(null, head)
  var tmp = n
  var fast = newList
  var slow = newList

  while (fast.next) {
    fast = fast.next
    tmp ? tmp-- : (slow = slow.next)
  }

  slow.next = slow.next.next

  return newList.next
}
