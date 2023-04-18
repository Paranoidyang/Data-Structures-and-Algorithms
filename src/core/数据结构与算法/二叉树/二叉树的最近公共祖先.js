/**
 * 题目描述：给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 
 * 注意：最近公共祖先节点可以为节点本身。
 * 
 * 说明:
    1、所有节点的值都是唯一的。
    2、p、q 为不同节点且均存在于给定的二叉树中。
 */

function lowestCommonAncestor (root, p, q) {
  if(root == p || root == q || !root) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if(left && right) return root
  if(!left && right) return right
  else if(!right && left) return left
  else return null
}

// 测试
const p = {
  val: 1,
  left: null,
  right: null
}
const q = {
  val: 8,
  left: null,
  right: null
}
const root = {
  val: 6,
  left: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: p
  },
  right: {
    val: 7,
    left: null,
    right: q
  }
}
console.log(lowestCommonAncestor(root, p, q))