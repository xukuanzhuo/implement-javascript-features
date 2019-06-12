// https://hufangyun.com/2017/sort-array/

function bubbleSort (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j =0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        const tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }

  return arr
}

function selectionSort (arr) {
  var len = arr.length
  var minIndex, temp
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}

function insertSort (arr) {

}

function shellSort (arr) {

}

function mergeSort (arr) {
  var len = arr.length;
  if(len < 2) {
    return arr
  }

  var middle = Math.floor(len / 2),
  left = arr.slice(0, middle),
  right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  let result = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result
}

function binarySearch (target, arr, start, end) {
  var start = start || 0
  var end  = end || arr.length - 1

  var mid = parseInt(start+(end-start)/2)
  if(target == arr[mid]){
    return mid
  }else if(target > arr[mid]) {
    return binarySearch(target, arr, mid+1, end)
  }else{
    return binarySearch(target, arr, start, mid-1)
  }
  return -1
}
