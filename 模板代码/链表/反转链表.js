/**
 * * 反转链表  https://leetcode-cn.com/problems/reverse-linked-list/
 */

const { makeListNode, ListNode } = require("../../工具/链表")

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

// * 使用迭代反转链表前n个节点
function reverseN(node, n) {
  if (node === null || node.next === null) return node
  // * last 记录反转后的最后一个节点，也就是反转前的第一个节点
  let last = node
  let cur = node

  while (n--) {
    const temp = node.next
    node.next = cur
    cur = node
    node = temp
  }

  // * 在上面while循环中，node最终等于第n+1个节点，last为最后一个节点
  // * 此处的操作将反转后的链表关联上
  last.next = node

  return cur
}

// * 使用迭代反转链表指定区间
var reverseBetween = function (head, left, right) {
  if (head === null || head.next === null) return head

  if (left === right) {
    // * 不用反转
    return head
  } else if (left === 1) {
    //* 反转前right个
    return reverseN(head, right)
  }

  const origin = head

  // * 遍历直到找到需要反转的前一个节点，即head.next 开始才需要反转
  while (left != 2) {
    // * 当left等于1时说明当前的head就是需要反转的第一个节点，所以left等于2就是反转前一个节点
    left--
    right--
    head = head.next
  }

  const reversedNode = reverseN(head.next, right - 1)

  head.next = reversedNode

  return origin
}

reverseBetween(listNodes, 1, 4)

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
  if (n === 1) {
    reverseNByRecursion.successor = head.next
    return head
  }

  if (head === null) return head

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

reverseNByRecursion(makeListNode([3, 5]), 2)
