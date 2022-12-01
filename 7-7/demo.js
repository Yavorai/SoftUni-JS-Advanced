// this arrow func

function outer(){
    let w = 20

    function inner(){
        console.log(w);
        let q = 10
    }
    inner()
}
outer()

//===================================

function myFunc(){
    let a = {
        outer: () => {
            console.log(this);
            let inner = () => {
                console.log(this);
            }
            inner()
        }
    }
    a.outer()
}
myFunc()

// ExecutionContext chain
// inner --> outer --> myFunc
// (no this) --> (no this) --> invocation is myFunc() so this === global