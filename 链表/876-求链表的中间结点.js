/*
 * @Author: your name
 * @Date: 2021-02-13 10:29:13
 * @LastEditTime: 2021-02-13 11:12:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/链表/876-求链表的中间结点.js
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/
 */

// 首次思路：
// 双指针，一个移动2步，一个移动1步，当fast指针为尾结点时，
//   如果移动奇数位，慢指针就是中间节点
//   如果移动次数为偶数位，慢指针移动下一位

// 首次想的问题很大，很多地方没有考虑到，比如想的是依靠移动次数来判断奇偶，其实可以通过最后是尾结点还是倒数第二个节点来判断。

var middleNode = function (head) {
  if (!head) return null
  if (!head.next) return head
  if (!head.next.next) return head.next

  var slow = head
  var fast = head

  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // 这个while条件，跳出循环只会有2种可能，
  //  fast 就是 尾结点 - 原链表为奇数，所以是当前slow就是中间节点
  //  fast.next 是尾结点 - 原链表是偶数，所以需要进1

  if (!fast.next) {
    return slow
  } else {
    return slow.next
  }
}
