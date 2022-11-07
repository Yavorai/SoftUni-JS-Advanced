let book = {
    title: 'Birds',
    author: 'Tom', 
}

function info(year){
    console.log(`${this.title} was written by ${this.author} and was released in ${year}`);
}

info.call(book, ['1878'])

let bookInfo = info.bind(book, '187sss8')
bookInfo()