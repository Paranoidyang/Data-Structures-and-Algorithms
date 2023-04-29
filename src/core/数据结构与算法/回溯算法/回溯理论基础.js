/**
 * 回溯是递归的副产品，只要有递归就会有回溯。
 * 回溯逻辑所在的位置一般在递归函数的下面部分
 * 一般说回溯函数，其实是指递归函数，因为没有完全用来回溯的一个函数
 * 
 * 回溯法的效率如何？
 * 回溯的本质是穷举，穷举所有可能，然后选出我们想要的答案，如果想让回溯法高效一些，可以加一些剪枝的操作，但也改不了回溯法是穷举的本质。
 * 
 * 回溯法是一种纯暴力的搜索，既然是暴力为啥还用回溯？
 * 因为有些问题能用回溯法解出来已经很不错了，用for循环一层一层的嵌套根本解不出来。
 * 
 * 回溯法通常用来解决哪些问题？
 * 1、组合问题（如：给个集合，问有多少个和为2的两个数）
 * 2、切割问题（如：给个字符串，问有多少种切割方式或者加一些限定条件，如何切割才能保证他的子串都是回文子串，有几种切割方式）
 * 3、子集问题（如：给个集合，问有多少个子集）
 * 4、排列问题（如：N个数按一定规则全排列，有几种排列方式，排列强调元素的顺序，组合不关心顺序）
 * 5、棋盘问题（如：N皇后、解数独等等）
 * 以上问题，用for循环很难解决，就可以使用回溯法解决
 * 
 * 如何理解回溯法？
 * 回溯法很抽象，但是都可以抽象成一个树形结构，递归就要有终止条件，所以必然是一棵高度有限的树（n叉树）。n叉树横向代表集合的大小，用for
 * 循环来遍历，而n叉树的深度代表递归的深度（回溯法一般是在集合中递归搜索，集合的大小构成了树的宽度，递归的深度构成的树的深度）。
 * 
 * 回溯法模板？
 * 一般来说，回溯法的递归函数都是没有返回值的，这个递归函数一般起名叫 backtracking，以下是模板：
 * backtracking(参数) {//回溯法的参数一般都是比较多的，不太容易在一开始就能把所有参数确定下来
    if(终止条件) {
      收集结果，一般是在叶子节点，也就找到了满足条件的一个答案，把这个答案收集起来，并结束本层递归
      return
    }
    // 进入单层搜索逻辑，一般是个for循环，用来处理集合的每一个元素
    for(集合元素) {
      处理节点
      递归函数
      回溯，主要是做撤销的操作
    }
    return 结果
}
 */