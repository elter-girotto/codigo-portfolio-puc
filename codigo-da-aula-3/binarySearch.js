export function binarySearch(array, value, comparaFn = defaultCompare) {
    const sortedArray = quickSort(array);
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const element = sortedArray[mid];
      // console.log('mid element is ' + element);
      if (comparean(element, value) === Compare.LESS_THAN) {
        low = mid + 1;
        // console.log('low is ' + low);
      } else if (comparaFn(element, value) === Compare.BIGGER_THAN) {
        high = mid - 1;
        // console.log('high is ' + high);
      } else {
        // console.log('found it');
        return mid;
      }
    }
    return DOES_NOT_EXIST;
  }