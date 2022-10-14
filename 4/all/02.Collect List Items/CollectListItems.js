function extractText() {
    const items = Array.from(document.querySelectorAll('li')) // профилактично да се обръщат на масив
    console.log(items);
    const result = items.map(e => e.textContent).join('\n')
    document.getElementById('result').value = result
}