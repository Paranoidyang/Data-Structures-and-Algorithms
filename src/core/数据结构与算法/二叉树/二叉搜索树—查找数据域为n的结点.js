/**
 * 题目描述：查找数据域为某一特定值的结点
 * 思路：递归实现
 * 假设这个目标结点的数据域值为 n，我们借助二叉搜索树数据域的有序性，可以有以下查找思路：
 *  1、递归遍历二叉树，若当前遍历到的结点为空，就意味着没找到目标结点，直接返回。
    2、若当前遍历到的结点对应的数据域值刚好等于n，则查找成功，返回。
    3、若当前遍历到的结点对应的数据域值大于目标值n，则应该在左子树里进一步查找，设置下一步的遍历范围为 root.left 后，继续递归。
    4、若当前遍历到的结点对应的数据域值小于目标值n，则应该在右子树里进一步查找，设置下一步的遍历范围为 root.right 后，继续递归。
 */

// 二叉树如下：
const root = {
  val: 6,
  left: {
    val: 3,
    left: {
      val: 1
    },
    right: {
      val: 4,
    }
  },
  right: {
    val: 8,
    right: {
      val: 9
    }
  }
};

/**
 * 在二叉搜索树中查找数据域为 n 的结点
 * @param {*} root 
 * @param {*} n 
 * @returns 
 */
function search(root, n) {
  if (!root) {//若 root 为空，查找失败，直接返回
    return
  }
  if (root.val === n) {//找到了，则将当前节点返回
    return root
  }
  if (root.val > n) {//当前结点数据域大于n，继续在左子树查找
    return search(root.left, n)
  }
  if (root.val < n) {//当前结点数据域小于n，继续在右子树查找
    return search(root.right, n)
  }
}
console.log(search(root, 4))
