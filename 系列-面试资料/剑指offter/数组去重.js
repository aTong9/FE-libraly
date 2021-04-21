const arr = [1, 2, 2, 3, 4, 5]
console.log([...new Set(arr)])

console.log(Array.from(new Set(arr)))

function unique1(arr) {
  return arr.filter(function (item, index, arr) {
    return arr.indexOf(item, 0) === index;
  });
}
console.log(unique1(arr))

function unique2(arr) {
  return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}
console.log(unique2(arr))

// 数组去重时间复杂度为O(n)
const arr = [1, 2, 3, 4, 3, 2, 1, '1', '2', '1']
let obj = {}

// let result = []
// for (let i = 0; i < arr.length; i++) {
//   let key = typeof arr[i] + arr[i]
//   if (!obj[key]) {
//     obj[key] = true
//     result.push(arr[i])
//   }
// }
// console.log(result)
// 或者
for (let i = 0; i < arr.length; i++) {
  let key = typeof arr[i] + arr[i]
  if (!obj.hasOwnProperty(key)) {
    obj[key] = arr[i]
  }
}
console.log(Object.values(obj))

