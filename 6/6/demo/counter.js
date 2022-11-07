// impure func
// closure

function counterBuilder(){
    let counter = 0 
    return function (){
        counter++
        console.log(counter);
    }
}
let counter = counterBuilder()
counter()  // 1
counter()  // 2
counter()  // 3
counter()  // 4
counter()
counter()