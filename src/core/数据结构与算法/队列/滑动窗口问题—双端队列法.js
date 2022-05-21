/**
 * 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * 示例:输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
 * 提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 */

/**
 * 思路一：双指针+遍历法
 */
function maxSlidingWindow(nums, k) {
  const len = nums.length
  let left = 0
  let right = k
  const res = []
  while (right <= len) {
    let arr = nums.slice(left, right)
    console.log(arr)
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
      max = arr[i] > max ? arr[i] : max
    }
    res.push(max)
    left++
    right++
  }
  return res
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
