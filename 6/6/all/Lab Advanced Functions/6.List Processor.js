function listProcessor (input){

let functionExpression = (function(){
    let arr = []
    return {
        add: (newItem) => arr.push(newItem),
        remove: (item) =>arr = arr.filter(x => x != item),
        print : ()=> console.log(arr.join(','))
    }
    
})()
for(let cmds of input){
    let [cmd,value] = cmds.split(' ');
    functionExpression[cmd](value);
}

}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])