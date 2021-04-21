//时间复杂度实现方法： https://www.zhihu.com/question/316496836

function quickSort(arr) {
  if (arr.length <= 1) { return arr }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([11, 21, 23, 45, 7, 88, 3, 9, 66, 1, 2]))