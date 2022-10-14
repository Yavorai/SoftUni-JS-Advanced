function solution(str){
    let arr = str.split('')
    let result = []

    for(let i = 0; i < arr.length; i+=2){
        if(arr[i+1]){
            result.push(arr[i]+arr[i+1])
        }else{
            result.push(arr[i]+'_')
        }
    }
    return result
    //console.log(result);
}
solution("abcdef")
console.log('--------------------');
solution("abcdefg")

function solution(str){
    let i = 0
    let result = []
    if(str.length % 2 !== 0){
        srt += '_'
    }
    while(i < str.length){
        result.push(str[i] + str[i+1])
        i += 2
    }
    return result
}
solution("abcdef")
console.log('--------------------');
solution("abcdefg")