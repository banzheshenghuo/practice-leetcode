/*
 * @Author: your name
 * @Date: 2021-02-01 08:27:36
 * @LastEditTime: 2021-02-02 05:47:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/18-剑指-删除链表的节点.js
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 */
// 哨兵节点
// * 思路：最简单的就是迭代链表时，发现next.val 为指定删除值，则使用next.next 来代替

var deleteNode = function (head, val) {
  var preHead = new ListNode(null, head)
  var curNode = preHead

  while (curNode && curNode.next) {
    curNode.next = curNode.next.val === val ? curNode.next.next : curNode.next
    curNode = curNode.next
  }

  return preHead.next
}

// * 优化空间,循环条件没有终止，会遍历整个链表，可以加上一个break或者循环条件修改为相等时跳出循环

var deleteNode = function (head, val) {
  var preHead = new ListNode(null, head)
  var curNode = preHead

  while (curNode.next.val !== val) {
    curNode = curNode.next
  }
  curNode.next = curNode.next.next

  return preHead.next
}

//* 思路：剑指offer上好像有类似的原题，第二个参数是节点的话可以使用快速删除,即当不是尾结点时，只需将指定节点val修改为下一个节点的val，next指向下一个节点的next
