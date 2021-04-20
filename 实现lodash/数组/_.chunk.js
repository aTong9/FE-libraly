/**
 *  _.chunk(array, [size=1])
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param array (Array): 需要处理的数组
 * @param [size=1] (number): 每个数组区块的长度
 * @returns (Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。
 * @example 
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 *  => [['a', 'b'], ['c', 'd']]
 * 
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * => [['a', 'b', 'c'], ['d']]
 */

function chunk (array, size) {
  for (let i of array) {
    console.log(i,array)
  }
}
chunk(['a', 'b', 'c', 'd'], 3)