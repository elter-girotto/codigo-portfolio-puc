function quickSort(array, comparaFn = defaultCompare) {
    return quick(array, 0, array.length - 1, comparaFn);
}

function quick(array, left, right, comparaFn) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right, comparaFn);
        if (left < index - 1) {
            quick(array, left, index - 1, comparaFn);
        }
        if (index < right) {
            quick(array, index, right, comparaFn);
        }
    }
    return array;
}

array = [1, 8, 5, 9, 14, 0, 4, 6];
array = quickSort(array);
console.log(array);

