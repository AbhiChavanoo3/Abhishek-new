function BubbleSort (arr) {
   for (let i=0;i<arr.length-1;i++){
     for (j=0;j<arr.length-1-i;j++) {
        if (arr[j] > arr[j+1]) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }    
     } 
   }
   return arr;
}
console.log(BubbleSort([5,4,3,2,1]));
