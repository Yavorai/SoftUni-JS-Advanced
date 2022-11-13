function solve() {
    const getInput = n =>
        document.querySelector(`#container > input[type=text]:nth-child(${n})`)
    const inputs = [getInput(1), getInput(2), getInput(3)]

    const html = {
        moviesList: document.querySelector("#movies > ul"),
        archivesList: document.querySelector("#archive > ul"),
    }

    const checkValidInput = (arr, num) =>
        arr.every(x => x !== "") && !isNaN(Number(num));
    const clearInputs = arr => arr.map(x => (x.value = ""));

    function onScreen(name, hall, price) {
        const liElement = document.createElement("li");

        liElement.innerHTML = `<span>${name}</span><strong>Hall: ${hall}</strong>
<div><strong>${price.toFixed(2)}</strong><input placeholder="Tickets Sold"/>
<button>Archive</button></div>`;

        return liElement;
    }

    function archived(name, price) {
        const liElement = document.createElement("li");

        liElement.innerHTML = `<span>${name}</span>
<strong>Total amount: ${price.toFixed(2)}</strong>
<button>Delete</button>`;

        return liElement;
    }

    document.addEventListener("click", e => {
        e.preventDefault()

        if (e.target.tagName === "BUTTON") {
            const [name, hall, price] = inputs.map(x => x.value);

            const buttons = {
                "On Screen": () => {
                    if (checkValidInput([name, hall, price], price)) {
                        clearInputs(inputs);
                        html.moviesList.appendChild(
                            onScreen(name, hall, Number(price))
                        )
                    }
                },
                Archive: e => {
                    const ticketsSold = e.previousElementSibling.value;

                    if (checkValidInput([ticketsSold], ticketsSold)) {
                        const parent = e.parentNode.parentNode;
                        const name = parent.children[0].innerHTML;
                        const price = e.previousElementSibling.previousElementSibling.innerHTML;

                        html.archivesList.appendChild(
                            archived(name, ticketsSold * Number(price))
                        )
                        parent.remove();
                    }
                },
                Delete: e => e.parentNode.remove(),
                Clear: () => (html.archivesList.innerHTML = ""),
            }

            buttons[e.target.textContent](e.target);
        }
    })
}