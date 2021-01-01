let numArr = [5, 3, 6, 2, 10, 34, -3, 56, 7, 45, 23, 12]
let count = 0

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
      count += 1
    }
    let tmp = array[i]
    array[i] = array[indexMin]
    array[indexMin] = tmp
  }
  return array
}

console.log(selectionSort(numArr))
console.log(numArr.length)
console.log(`count = ${count}`)
