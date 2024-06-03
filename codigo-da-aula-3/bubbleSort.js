function bubbleSort(array, comparaFn = defaultCompare) {
    const {length} = array;
    for (let i = 0; i < length; i++ ){
        for (let j = 0; j < length - 1; j++) {
            if (comparaFn(array[j], array[j + 1]) == Compare.BIGGER_THAN){
                swap(array, j, j + 1);
            }            
        }
    }
    return array;
}