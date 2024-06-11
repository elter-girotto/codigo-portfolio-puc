function mergeSort(array, comparaFn = defaultCompare) {
    if (array.length > 1) {
        const { length } = array;
        const middle = Math.floor(length/2);
        const left = mergeSort(array.slice(0, middle), comparaFn);
        const right = mergeSort(array.slice(middle, length), comparaFn);
        array = merge(left, right, comparaFn);
    }
    return array;
}