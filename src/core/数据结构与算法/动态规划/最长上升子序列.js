/**
 * 题目描述：给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
 * 示例:
    输入: [10,9,2,5,3,7,101,18]
    输出: 4
    解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

   说明:
    可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。 你算法的时间复杂度应该为 O(n^2) 。
    进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 入参是一个数字序列
function lengthOfLIS(nums) {
  // 缓存序列的长度
  const len = nums.length
  // 处理边界条件
  if (!len) {
    return 0
  }
  // 初始化数组里面每一个索引位的状态值
  const dp = (new Array(len)).fill(1)
  // 初始化最大上升子序列的长度为1
  let maxLen = 1
  // 从第2个元素开始，遍历整个数组
  for (let i = 1; i < len; i++) {
    // 每遍历一个新元素，都要“回头看”，看看能不能延长原有的上升子序列
    for (let j = 0; j < i; j++) {
      // 若遇到了一个比当前元素小的值，则意味着遇到了一个可以延长的上升子序列，故更新当前元素索引位对应的状态
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    // 及时更新上升子序列长度的最大值
    if (dp[i] > maxLen) {
      maxLen = dp[i]
    }
  }
  // 遍历完毕，最后到手的就是最大上升子序列的长度
  return maxLen
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
