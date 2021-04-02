/*
 * @Author: your name
 * @Date: 2021-02-19 12:00:47
 * @LastEditTime: 2021-02-21 11:00:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode-javascript/数组/36-有效的数独.js
 * https://leetcode-cn.com/problems/valid-sudoku/
 */

//  思路：
//  这个有效数独并不是让我解数独，只是验证在3x3格子里内是否没有重复的，没有则为有效，有则为失效
// 第一步就是将这9个3x3格子分离出来，可以组成一个数组，然后判断是否有相同的。

// 分离：

var isValidSudoku = function (board) {
  var row = {}
  var col = {}
  var box = {}

  // i 是纵向 j是横向
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var val = board[i][j]
      if (val === ".") continue

      // 首次填充当前列的数据
      if (!col[i]) col[i] = {}
      if (!row[j]) row[j] = {}

      // 存在则直接返回非数独
      if (col[i][val]) return false
      //填充当前列数据
      col[i][val] = true
    }
  }
}
