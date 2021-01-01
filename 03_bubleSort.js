let numArr = [5, 3, 6, 2, 10, 34, -3, 56, 7, 45, 23, 12]
let count = 0

function bubleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
      count += 1
    }
  }
  return array
}

console.log(bubleSort(numArr))
console.log(numArr.length)
console.log(`count = ${count}`)
