/*
 * @Author: your name
 * @Date: 2021-02-13 09:08:20
 * @LastEditTime: 2021-02-13 09:20:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/链表/24-剑指offer反装链表.js
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 */

// 思路： 反转链表，建立一个新节点作为反装后节点的尾结点，然后开始迭代链表，每次迭代将后继指针指向原来的前继节点

function ListNode(val) {
  this.val = val
  this.next = null
}

var reverseList = function (head) {
  if (!head || !head.next) return head

  var newList = null

  let current = head

  while (current) {
    var next = current.next

    current.next = newList
    newList = current

    current = next
  }

  return newList
}

// * 问题
// * 1. 在while循环中，写错了循环体
// * 2. 值为null的节点也是节点，会多创建一个，此处反转应该只要一个null就行了
