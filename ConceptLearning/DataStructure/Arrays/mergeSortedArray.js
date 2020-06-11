//mergeSortedArrays([0,3,4,31],[4,6,30])

const mergeSortedArrays = (arr1, arr2) => {
  let mergedArr = arr1.concat(arr2);
  return mergedArr.sort((a, b) => a - b);
};
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

function merge(arr1, arr2) {
  const merged = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;
  //check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      merged.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      merged.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return merged;
}
console.log(merge([0, 3, 4, 31], [4, 6, 30]));
