/**
 * 题目描述：给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

    示例 1: 输入: s = "anagram", t = "nagaram" 输出: true

    示例 2: 输入: s = "rat", t = "car" 输出: false

    说明: 你可以假设字符串只包含小写字母

    注意：字符a到字符z的ASCII是26个连续的数值，js可以通过charCodeAt()将字母转成ASCII对应的数值
 */

/**
 * 判断是否是有效字母异位词
 * @param {*} s 
 * @param {*} t 
 * @returns 
 */
function isAnagram(s, t) {
  const record = new Array(26).fill(0)
  const base = 'a'.charCodeAt()
  // 将第一个字符串中对应字母出现的次数记录在record数组中
  for (const i of s) {
    record[i.charCodeAt() - base]++
  }
  // 将record中对应索引的数值减1
  for (const i of t) {
    record[i.charCodeAt() - base]--
  }
  for (const i of record) {
    if (i !== 0) { // record中存在不为0的数值，则说明不是有效的字母异位词
      return false
    }
  }
  return true
}

// 测试
let s = 'anagram', t = "nagaram"
// let s = 'rat', t = "car"
console.log(isAnagram(s, t))