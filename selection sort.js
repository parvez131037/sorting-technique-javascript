//1st way to implement selection sort

function SelectionSort(array){
    for(i=0;i<array.length-1;i++){
        let minIndex = i;
        for(j=i+1;j<array.length;j++){
            if(array[j]<array[minIndex]){
                minIndex = j;
            }
        
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        
    }
    return array;
}

console.log(SelectionSort([45,78,59,86,12,10,20,45,1,1,2,0,2,5,9,44,5559,62,41,63,55]));

//2nd way to implement selection sort (BY SWIPING OF ARRAY)

function SelectionSort(array){
    for(i=0;i<array.length-1;i++){
        let minIndex = i;
        for(j=i+1;j<array.length;j++){
            if(array[j]<array[minIndex]){
                minIndex = j;
            }
        
        }
        [array[i],array[minIndex]] = [array[minIndex],array[i]]
        
    }
    return array;
}


console.log(SelectionSort([45,78,59,86,12,10,20,45,1,1,2,0,2,5,9,44,555,789,62,41,63,55]));


//3RD way to implement selection sort (BY DECLARING A VARIABLE)

function SelectionSort(array){
    for(i=0;i<array.length-1;i++){
        let minIndex = i;
        for(j=i+1;j<array.length;j++){
            if(array[j]<array[minIndex]){
                minIndex = j;
            }
        
        }
        [array[i],array[minIndex]] = [array[minIndex],array[i]]
        
    }
    return array;
}


const arr =[45,78,59,86,12,10,20,45,1,1,2,0,2,5,9,44,555,789,62,41,63,55];

console.log(SelectionSort(arr))


//4th way to implement selection sort (BY DECLARING A VARIABLE IT GIVES BOTH SORTED AND UNSORTED ARRAY)

function SelectionSort(array){
    const arr = array.slice();
    for(let i=0;i<arr.length-1;i++){
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        
    }
    return arr;
}


const arr =[45,78,59,86,12,10,20,45,1,1,2,0,2,5,9,44,555,789,62,41,63,55];

const output= SelectionSort(arr);
console.log(output)

console.log(arr);