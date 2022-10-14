function demo(text){
    let words = text.match(/\w+/gim)
    let output = ''
    for(let word of words){
        output += word.toLocaleUpperCase() + ', '

    }
    output = output.substring(0, output.length - 2)
    return output
}
demo('Hi, how are you?')
