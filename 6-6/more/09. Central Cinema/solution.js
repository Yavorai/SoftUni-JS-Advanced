function solve() {
    // <div id='container'>
    //     <input type="text" placeholder="Name" />
    //     <input type="text" placeholder="Hall" />
    //     <input type="text" placeholder="Ticket Price" />
    //     <button>On Screen</button>
    // </div>
    const [name, hall, ticketPrice] = document.querySelectorAll('#container input');
    const onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener("click", addMovie);

    // <section id="movies">
    //     <h2>Movies on Screen</h2>
    //     <ul>
    // ---------
    //     </ul>
    // </section>
    const movieSection = document.querySelector('#movies ul');

    // <section id="archive">
    //     <h2>Аrchive</h2>
    //     <ul>
    // ---------
    //     </ul>
    //     <button>Clear</button>
    // </section>
    const archiveSection = document.querySelector('#archive ul');
    const clearButton = archiveSection.parentElement.querySelector('button');
    clearButton.addEventListener('click', () => {
        archiveSection.innerHTML = '';
    })

    function addMovie(e) {
        e.preventDefault();
        if (name.value != '' && hall.value != "" && !isNaN(Number(ticketPrice.value))) {
            const movie = document.createElement("li");
            movie.innerHTML =
                `<span>${name.value}</span>
                <strong>Hall: ${hall.value}</strong>
                <div>
                    <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
                    <input placeholder="Tickets Sold">
                    <button>Archive</button>
                </div>`

            const button = movie.querySelector('div button');
            button.addEventListener('click', addToArchive);
            movieSection.appendChild(movie);

            name.value = '';
            hall.value = '';
            ticketPrice.value = '';
        }
    }

    function addToArchive(e) {
        const inputValue = e.target.parentElement.querySelector('input');
        const ticketPrice = e.target.parentElement.querySelector('strong');
        const movieName = e.target.parentElement.parentElement.querySelector('span');

        if (inputValue.value != '' && !isNaN(Number(inputValue.value))) {
            deleted = true;
            const income = Number(inputValue.value) * Number(ticketPrice.textContent);

            const liEl = document.createElement('li');
            liEl.innerHTML =
                `<span>${movieName.textContent}</span>
                <strong>Total amount: ${income.toFixed(2)}</strong>
                <button>Delete</button>`

            const button = liEl.querySelector('button');
            button.addEventListener('click', deleteEntry);
            archiveSection.appendChild(liEl);

            e.target.parentElement.parentElement.remove();
        }
    }

    function deleteEntry(e) {
        e.target.parentElement.remove();
    }
}