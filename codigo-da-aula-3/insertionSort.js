function insertionSort(array, comparaFn = defaultCompare) {
    const { lenght } = array;
    let indexMin;
    for (let i = 0; i < length - 1; i++) {
        let j = i;
        temp = array[i];
        while (j > 0  && comparaFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
            array[j] = array[j - 1];
            j--;             
        }
        array[j] = temp;
    }
    return array;    
}