function demo(arr){
    arr.sort((a,b) => a-b)
    console.log(`${arr[0]} ${arr[1]}`);
}
demo([30, 15, 50, 5])
demo([3, 0, 10, 4, 7, 3])