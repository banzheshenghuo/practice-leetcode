/**
 * * 反转链表  https://leetcode-cn.com/problems/reverse-linked-list/
 */

const { makeListNode } = require("../../工具/链表")

const listNodes = makeListNode([1, 2, 3, 4, 5, 6])

// * 一般反转有3重方式
// 1. 反转链表
// 2. 反转链表的前n位
// 3. 反转指定区域链表

// * 使用迭代和递归的区别
// * 迭代和递归一般时间复杂度都相同，都是O(n)
// * 但是因为递归需要堆栈，空间复杂度是O(n)，而迭代时O(1)

/**
 * * 迭代
 */

// * 反转链表模板
function reverse(head) {
  let pre = null

  while (head) {
    const next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return pre
}

/**
 * * 递归
 */

// * 递归反转链表
// * 递归不要人脑入栈，就确定2个条件
// * 1. base case 基础的情况
// * 2. 函数定义
// * 在下面这个例子中函数定义就是 反转一个链表并返回该链表新的头结点
function reverseByRecursion(head) {
  if (head === null || head.next === null) return head

  const last = reverseByRecursion(head.next)

  head.next.next = head
  head.next = null

  return last
}

// * 递归反转前N个链表
function reverseNByRecursion(head, n) {
  if (head === null) return head

  if (n === 1) {
    reverseNByRecursion.successor = head.next
    return head
  }

  const last = reverseNByRecursion(head.next, n - 1)

  head.next.next = head
  head.next = reverseNByRecursion.successor

  return last
}

reverseNByRecursion.successor = null

// * 递归反转指定区间的链表
function reverseBetweenByRecursion(head, left, right) {
  if (head === null || head.next === null) return head

  if (left === 1) {
    return reverseNByRecursion(head, right)
  }

  head.next = reverseBetweenByRecursion(head.next, left - 1, right - 1)

  return head
}
