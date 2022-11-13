// function solve() {
//     const container = document.getElementById('container');
//     const [name, hall, price] = Array.from(container.querySelectorAll('input'));
//     const movies = document.getElementById('movies');
//     const archive = document.getElementById('archive');
//     archive.children[2].addEventListener('click', (e) => {
//         const ul = e.target.parentElement.children[1];
//         while (ul.firstChild) {
//             ul.removeChild(ul.firstChild);
//         }
//     })
//     const li = (name, hall, price) => {
//         const el = document.createElement('li');
//         price = Number(price).toFixed(2);
//         el.innerHTML = `
//         <span>${name}</span>
//         <strong>Hall: ${hall}</strong>
//         <div>
//             <strong>${price}</strong>
//             <input placeholder="Tickets Sold">
//         </div>`
//         return el;
//     }
//     const btn = (t) => {
//         b = document.createElement('button')
//         b.textContent = t;
//         b.addEventListener('click', onClick);
//         return b
//     }

//     container.getElementsByTagName('button')[0].addEventListener('click', (e) => {
//         e.preventDefault();
//         if (name.value != '' && hall.value != '' && price.value != '' && !isNaN(price.value)) {
//             const field = li(name.value, hall.value, price.value);
//             field.children[2].appendChild(btn('Archive'))
//             movies.children[1].appendChild(field);
//             Object.values({ name, hall, price }).forEach(e => e.value = '');
//         }
//     })

//     function onClick(e) {
//         const parent = e.target.parentElement
//         if (e.target.textContent == 'Archive') {
//             const field = parent.parentElement;
//             if (parent.children[1].value != '' && !isNaN(parent.children[1].value)) {
//                 const total = (parent.children[0].textContent * +parent.children[1].value).toFixed(2)
//                 field.children[1].textContent = `Total amount: ${total}`;
//                 field.removeChild(parent);
//                 field.appendChild(btn('Delete'))
//                 archive.children[1].appendChild(field);
//             }
//         }else{
//             parent.parentElement.removeChild(parent);
//         }
//     }
// }

//===================================================

// function solve() {
//     const getInput = n =>
//         document.querySelector(`#container > input[type=text]:nth-child(${n})`)
//     const inputs = [getInput(1), getInput(2), getInput(3)]

//     const html = {
//         moviesList: document.querySelector("#movies > ul"),
//         archivesList: document.querySelector("#archive > ul"),
//     }

//     const checkValidInput = (arr, num) =>
//         arr.every(x => x !== "") && !isNaN(Number(num));
//     const clearInputs = arr => arr.map(x => (x.value = ""));

//     function onScreen(name, hall, price) {
//         const liElement = document.createElement("li");

//         liElement.innerHTML = `<span>${name}</span><strong>Hall: ${hall}</strong>
// <div><strong>${price.toFixed(2)}</strong><input placeholder="Tickets Sold"/>
// <button>Archive</button></div>`;

//         return liElement;
//     }

//     function archived(name, price) {
//         const liElement = document.createElement("li");

//         liElement.innerHTML = `<span>${name}</span>
// <strong>Total amount: ${price.toFixed(2)}</strong>
// <button>Delete</button>`;

//         return liElement;
//     }

//     document.addEventListener("click", e => {
//         e.preventDefault()

//         if (e.target.tagName === "BUTTON") {
//             const [name, hall, price] = inputs.map(x => x.value);

//             const buttons = {
//                 "On Screen": () => {
//                     if (checkValidInput([name, hall, price], price)) {
//                         clearInputs(inputs);
//                         html.moviesList.appendChild(
//                             onScreen(name, hall, Number(price))
//                         )
//                     }
//                 },
//                 Archive: e => {
//                     const ticketsSold = e.previousElementSibling.value;

//                     if (checkValidInput([ticketsSold], ticketsSold)) {
//                         const parent = e.parentNode.parentNode;
//                         const name = parent.children[0].innerHTML;
//                         const price = e.previousElementSibling.previousElementSibling.innerHTML;

//                         html.archivesList.appendChild(
//                             archived(name, ticketsSold * Number(price))
//                         )
//                         parent.remove();
//                     }
//                 },
//                 Delete: e => e.parentNode.remove(),
//                 Clear: () => (html.archivesList.innerHTML = ""),
//             }

//             buttons[e.target.textContent](e.target);
//         }
//     })
// }

//===================================================
// 20 точки в judge :/
function solve() {
  // 1
  // 1 select elements
  let onScreenButton = document.querySelector("#container button");
  onScreenButton.addEventListener("click", onScreenHandler);

  let clearArchiveButton = document.querySelector("#archive > button"); // селектор за ДИРЕКТНО ДЕТЕ, не вложен в ul-ла например
  clearArchiveButton.addEventListener("click", clearArchive);
  // 2
  function onScreenHandler(e) {
    // да се внимава за buttons във form element
    // ще презареждат страницата, прават заявка...
    e.preventDefault();

    let movieInputs = document.querySelectorAll("#container input");
    let nameInput = movieInputs[0];
    let hallInput = movieInputs[1];
    let priceInput = movieInputs[2];
    let name = nameInput.value;
    let hall = hallInput.value;
    let price = priceInput.value
    // check input values
    if (
      nameInput.trim() !== "" &&
      hall.trim() !== "" &&
      price.trim() !== "" &&
      !isNaN(Number(price))
    ) {
      price = Number(price).toFixed(2);
      let li = document.createElement("li");

      let nameSpan = document.createElement("span");
      nameSpan.textContent = name;

      let hallStrong = document.createElement("strong");
      hallStrong.textContent = `Hall: ${hall}`;

      let rightSectionDiv = document.createElement("div");

      let priceStrong = document.createElement("strong");
      priceStrong.textContent = price;

      let ticketsSoldInput = document.createElement("input");
      ticketsSoldInput.setAttribute("placeholder", "Tickets Sold");

      let archiveButton = document.createElement("button");
      archiveButton.textContent = "Archive";
      archiveButton.addEventListener("click", archiveMovie);

      rightSectionDiv.appendChild(priceStrong);
      rightSectionDiv.appendChild(ticketsSoldInput);
      rightSectionDiv.appendChild(archiveButton);

      li.appendChild(nameSpan);
      li.appendChild(hallStrong);
      li.appendChild(rightSectionDiv);

      let moviesUl = document.querySelector("#movies ul");
      moviesUl.appendChild(li);

      nameInput.value = "";
      hallInput.value = "";
      priceInput.value = "";
    }
  }
  // 3
  // не е най добрия вариант като решение
  function archiveMovie(e) {
    let movieLi = e.target.parentElement.parentElement;
    let ticketSoldInput = movieLi.querySelector("div input");
    let ticketSold = ticketSoldInput.value;

    if (ticketSold.trim() !== "" && !isNaN(Number(ticketSold))) {
      ticketSold = Number(ticketSold);
      let priceStrong = movieLi.querySelector("div strong");
      let price = Number(priceStrong.textContent);
      let hallStrong = movieLi.querySelector("strong");
      let totalPrice = price * ticketSold;
      hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

      let rightDiv = movieLi.querySelector("div");
      rightDiv.remove();
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", deleteFromArchive);
      movieLi.appendChild(deleteButton);
      let archiveUl = document.querySelector("#archive ul");
      archiveUl.appendChild(movieLi);
    }
  }
  // 4
  function deleteFromArchive(e) {
    let currentElement = e.target;
    let movieLi = currentElement.parentElement;
    movieLi.remove();
  }
  // 5
  function clearArchive() {
    let archiveLis = Array.from(document.querySelector("#archive ul li"));
    archiveLis.forEach((el) => el.remove());
  }
  // 2
  // 2 implement add movie functionality
  // 2a attach event listener on [on-screen] button
  // 2b get input values for movie
  // 2c convert values where needed
  // 2d create html structure for movie
  // 2e attach html structure to movies on screen section

  // 3
  // 3 implement archive movie functionality
  // 3a attach event listener each movie's archive button
  // 3b get input values for curr movie to archive
  // 3c convert values where needed
  // 3d create html structure for archived movie
  // 3e attach html structure to movies archive section

  // 4
  // 4 implement archive movie's delete functionality
  // 4a attach event listener each movie's delete button
  // 4b delete html structure of a deleted movies from dom

  // 5
  // 5 implement archive clear button functionality
  // 5a delete archive's li elements from dom
}
