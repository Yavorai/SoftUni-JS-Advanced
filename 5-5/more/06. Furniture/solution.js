function solve() {
    // # configurate event listeners 
    // select all buttons
    // first button -> table generation
    // second button -> buy furniture

    const table = document.querySelector('table.table tbody');
    const [input, output] = Array.from(document.querySelectorAll('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    // # table generation
    function generate(e) {
        // read input JSON and parse it
        // for every array element, create table row
        const data = JSON.parse(input.value);

        for (let item of data) {
            const row = document.createElement('tr');

            const imgCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const priceCell = document.createElement('td');
            const decFactorCell = document.createElement('td');
            const checkCell = document.createElement('td');

            const img = document.createElement('img')
            img.src = item.img;
            imgCell.appendChild(img);

            const nameP = document.createElement('p');
            nameP.textContent = item.name;
            nameCell.appendChild(nameP);

            const priceP = document.createElement('p');
            priceP.textContent = item.price;
            priceCell.appendChild(priceP);

            const decP = document.createElement('p');
            decP.textContent = item.decFactor;
            decFactorCell.appendChild(decP);

            const check = document.createElement('input');
            check.type = 'checkbox';
            checkCell.appendChild(check);

            row.appendChild(imgCell);
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(decFactorCell);
            row.appendChild(checkCell);

            table.appendChild(row);
        }
    }

    // # buy furniture
    function buy(e) {
        // select all checkboxes
        // filter only checked checkboxes
        // repeat for every selected checkbox
        // -- select parent row
        // -- read item infoemation
        // display output
        const furniture = Array
            .from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(b => b.parentElement.parentElement)
            .map(r => ({
                name: r.children[1].textContent,
                price: Number(r.children[2].textContent),
                decFactor: Number(r.children[3].textContent),
            }));

        const names = [];
        let total = 0;
        let decFactor = 0;

        for (let item of furniture) {
            names.push(item.name);
            total += item.price;
            decFactor += item.decFactor;
        }

        const result = `Bought furniture: ${names.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${decFactor / furniture.length}`

        output.value = result;
    }
}