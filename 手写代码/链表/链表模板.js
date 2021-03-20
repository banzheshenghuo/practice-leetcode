/*
 * @Author: your name
 * @Date: 2021-02-03 06:55:43
 * @LastEditTime: 2021-02-03 08:30:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/模板代码/反转链表模板.js
 */

//TODO 查询链表中间节点

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
