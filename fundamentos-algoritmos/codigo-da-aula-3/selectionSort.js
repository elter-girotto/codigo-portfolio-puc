function selectionSort(array, comparaFn = defaultCompare) {
    const { lenght } = array;
    let indexMin;
    for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        for (let j = i; j < length; j++) {
            if (comparaFn(array[indexMin], array[j]) == Compare.BIGGER_THAN) {
                indexMin = j;
            }            
        }
        if (i != indexMin) {
            swap(array, i, indexMin);
        }        
    }
    return array;    
}