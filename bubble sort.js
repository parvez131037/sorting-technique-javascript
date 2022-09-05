//1 way to implement bubble sort

function bubbleSort(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-1-i;j++){
            if (array[j]>array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

            }
        }
    }
    return array;
}

console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));

//2nd way to implement bubble sort{by swiping of array}(it gives same o/p)
function bubbleSort(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
    return array;
}

console.log(bubbleSort([78,56,123,45,89,12,23,25,49,1,5,8,6,11,78,112,455]));

//3rd way to bubble sort by declaring a variable

function bubbleSort(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
    return array;
}

const arr =[78,56,123,45,89,12,23,25,49,1,5,8,6,11,78,112,455];
console.log(bubbleSort(arr));
console.log(arr)

//4tha way to bubble sort by declaring a variable(by this method it gives both sorted and unsorted array)

function bubbleSort(array){
    const arr = array.slice();
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

const arr =[78,56,123,45,89,12,23,25,49,1,5,8,6,11,78,112,455];
console.log(bubbleSort(arr));
console.log(arr)