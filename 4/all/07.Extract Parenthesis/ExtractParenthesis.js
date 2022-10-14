// function extract(content) {
// const text = document.getElementById(content).textContent
// let pattern = /\((.+?)\)/g // регексите се изпълняват в цикъл
// let match = pattern.exec(text)
// let result = ""  
// while(match != null){
//     result += match[1] + '; '
//     match = pattern.exec(text)
// }
// return result
// }

function extract(content) {
    let textEl = document.getElementById('content').textContent    
    let pattern = /\((.+?)\)/g
    let match = pattern.exec(textEl)
    let result = ""
    while(match !== null){
        result += match[1] + '; '
        match = pattern.exec(textEl)
    }
    return result
}