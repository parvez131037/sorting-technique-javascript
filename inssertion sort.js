function insertionSort(array){
    for(let i=1;i<array.length;i++){
        for(let j=i;j>0;j--){
            if(array[j]<array[j-1]){
                const temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }else{
                break;
            }
        }
    }
    return array;
}

console.log(insertionSort([45,78,59,86,12,10,20,45,1,1,2,0,2,5,9,44,555,789,62,41,63,55]));