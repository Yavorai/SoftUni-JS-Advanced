function demo(count){
    if(count === 1){
        console.log('*');
        return
    }
    for(let i = 0; i < count; i ++){
        console.log('* '.repeat(count));
    }
}
demo(1)
console.log('----------------------------');
demo(5)
console.log('----------------------------');
demo(7)