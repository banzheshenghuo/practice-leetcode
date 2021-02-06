/*
 * @Author: your name
 * @Date: 2021-02-06 08:11:50
 * @LastEditTime: 2021-02-06 10:09:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/链表/21-合并两个有序链表.js
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */

const ListNode = require("../工具/链表")

// 思路：最先想到的就是双指针，对比2链表上的节点，如果小则插入新的链表节点且该指针指向下继结点，直到有一个指针为null，则后续节点直接使用另一指针作为后继节点。

var mergeTwoLists = function (l1, l2) {
  let preHead = new ListNode(null)
  let tmp = preHead
  let node1 = l1
  let node2 = l2

  while (node1 && node2) {
    if (node1.val <= node2.val) {
      tmp.next = node1
      node1 = node1.next
    } else {
      tmp.next = node2
      node2 = node2.next
    }
    tmp = tmp.next
  }

  if (node1) {
    tmp.next = node1
  } else {
    tmp.next = node2
  }

  return preHead.next
}

// 递归的思路
// 强行递归的话，我也只能想到每次将2个节点传给递归函数，直到有一个为null则直接

var mergeTwoLists2 = function (l1, l2) {
  let preHead = new ListNode(null)
  let tmp = preHead

  function recursion(node1, node2, pre) {
    if (!node1) {
      pre.next = node2
      return preHead.next
    }

    if (!node2) {
      pre.next = node1
      return preHead.next
    }

    if (node1.val >= node2.val) {
      pre.next = node2
      node2 = node2.next
    } else {
      pre.next = node1
      node1 = node1.next
    }

    return recursion(node1, node2, pre)
  }

  return recursion(l1, l2, tmp)
}

//别人的递归
function mergeTwoLists3(l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
