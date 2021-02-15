/*
 * @Author: your name
 * @Date: 2021-02-16 07:10:18
 * @LastEditTime: 2021-02-16 07:52:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/链表/234-回文链表.js
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 */

// * 先试试最简单的，遍历链表将整个链表的值记录下来，然后前后指针进行移动对比看是否相等

var isPalindrome = function (head) {
  if (!head) return true
  var arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  var i = 0
  var j = arr.length - 1

  while (i < j) {
    if (arr[i] !== arr[j]) return false

    i++
    j--
  }

  return true
}

//* 优化
// 1. 初始条件可以优化
// if(!head || !head.next) return true

// ! 第二种解法，空间复杂度更低
// * 思路
// 1. 先遍历找到中间节点
// 2. 然后反转后半段链表
// 3. 对比判断2段是否回文
// 4. 反转后半段

function findMiddle(head) {
  var fast = head
  var slow = head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function reverse(head) {
  var pre = null
  var point = head
  while (point) {
    var tmp = point.next
    point.next = pre
    pre = point
    point = tmp
  }
  return pre
}

var isPalindrome2 = function (head) {
  if (!head) return true

  var firstHalfEnd = findMiddle(head)
  var secondHalfStart = reverse(firstHalfEnd.next)

  // * 判断回文，终止条件只要第二段为null就可以终止
  var i = head
  var j = secondHalfStart
  while (j) {
    if (i.val !== j.val) return false

    i = i.next
    j = j.next
  }
  // 还原后半段链表
  firstHalfEnd.next = reverse(secondHalfStart)

  return true
}
