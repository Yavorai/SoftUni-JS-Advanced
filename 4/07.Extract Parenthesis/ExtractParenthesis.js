function extract(content) {
    let contentElement = document.getElementById(content)
    let pattern = /\(([^(]+)\)/g
    let matches = contentElement.textContent.matchAll(pattern)
    let result = []
    for(let match of matches){
        result.push(match[1])
    }
    return result.join('; ')
}



// function extract(content) {
//     const text = document.getElementById(content).textContent
//     let pattern = /\((.+?)\)/g // регексите се изпълняват в цикъл
//     let match = pattern.exec(text)
//     let result = ""  
//     while(match != null){
//         result += match[1] + '; '
//         match = pattern.exec(text)
//     }
//     return result
//     }