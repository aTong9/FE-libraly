// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
function jump(n) {
  let a = 1
  let b = 2
  let result = 0
  if (n <= 2) {
    result = n
  }
  for (let i = 3; i <= n; i++) {
    result = a + b
    a = b
    b = result
  }
  return result
}

console.log(jump(7))