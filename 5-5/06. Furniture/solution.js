// function solve() {

//   //TODO...
// }

// function solve() {
//   const [generate, buy] = document.getElementsByTagName("button");
//   const [input, output] = document.getElementsByTagName("textarea");
//   const tBody = document.querySelector("tbody");
//   const tr = ({ name, img, price, decFactor }) => {
//     let row = document.createElement("tr");
//     row.innerHTML = `
//       <td><img src=${img}></td>
//       <td><p>${name}</p></td>
//       <td><p>${price}</p></td>
//       <td><p>${decFactor}</p></td>
//       <td><input type="checkbox"/></td>
//     `
//     return row
//   }
 
//   function generateEvent() {
//     JSON.parse(input.value).forEach(x => tBody.appendChild(tr(x)));
//   }
 
//   function sum(a) { return a.reduce((a, v) => a + v, 0) };
 
//   function buyEvent() {
//     let inputs = Array.from(tBody.querySelectorAll("input[type=checkbox]:checked"))
//       .map(x => Array.from(x.parentNode.parentNode.children).slice(1, 4)
//         .map(x => Number(x.children[0].innerHTML) || x.children[0].innerHTML));
//     let name = inputs.map(x => x[0]).join(", ");
//     let price = sum(inputs.map(x => x[1]));
//     let average = sum(inputs.map(x => x[2])) / inputs.length;
//     output.value = `Bought furniture: ${name}\r\nTotal price: ${price.toFixed(2)}\r\nAverage decoration factor: ${average}`;
//   }
 
//   generate.addEventListener('click', generateEvent);
//   buy.addEventListener('click', buyEvent)
// }

//=======================================

// function solve() {

//   let textAreas = document.querySelectorAll('textarea')
//   let buttons = document.querySelectorAll('button')
//   let body = document.querySelector('tbody')
//   // create rows in the table for the every furniture

//   buttons[0].addEventListener('click', function (e){
//     let arr = JSON.parse(textAreas[0].value)

//     for(let el of arr){
//       let row = document.createElement('tr')
//       // create image cell
//       let cellImage = document.createElement('td')
//       let image = document.createElement('img')
//       image.setAttribute('src', el.img)
//       cellImage.appendChild(image)
//       //------------
//       let cellName = document.createElement('td')
//       let pName = document.createElement('p')
//       pName.textContent = el.name // .name идва от JSON файла
//       cellName.appendChild(pName)
//       //------------
//       let cellPrice = document.createElement('td')
//       let pPrice = document.createElement('p')
//       pPrice.textContent = el.price
//       cellPrice.appendChild(pPrice)
//       //------------
//       let cellDecor = document.createElement('td')
//       let pDecor = document.createElement('p')
//       pDecor.textContent = el.decFactor
//       cellDecor.appendChild(pDecor)
//       //------------
//       let cellCheck = document.createElement('td')
//       let input = document.createElement('input')
//       input.setAttribute('type', 'checkbox')
//       cellCheck.appendChild(input)

//       row.appendChild(cellImage)
//       row.appendChild(cellName)
//       row.appendChild(cellPrice)
//       row.appendChild(cellDecor)
//       row.appendChild(cellCheck)

//       body.appendChild(row)
//     }
//   })

//   buttons[1].addEventListener('click', function (e) {
//     let furniture = Array.from(body.querySelectorAll('input[type=checkbox]:checked'))
//     .map(input => input.parentNode.parentNode)

//     let result = {
//       bought: [],
//       totalPrice: 0,
//       decFactorSum: 0,
//     }

//     for(let row of furniture){
//       let cells = row.children
//       let name = cells[1].children[0].textContent // снимката е на [1]
//       result.bought.push(name)

//       let price = Number(cells[2].children[0].textContent)
//       result.totalPrice += price

//       let factor = Number(cells[3].children[0].textContent)
//       result.decFactorSum += factor
//     }
//     textAreas[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${(result.decFactorSum / furniture.length)}`
//   })


// }


//======================================================================


function solve() {
    let textAreas = document.querySelectorAll('#exercise textarea')
    let generateTextarea = textAreas[0]
    let buyTextarea = textAreas[1]

    let buttons = document.querySelectorAll('#exercise button')
    let generateButton = buttons[0]
    let buyButton = buttons[1]
    // add generate Button even listener
    // get generate text area value and JSON.parse
    // construct DOM elements representing table row to add to DOM table
    // add buy event listener
    // get all rows that are selected from table
    // calculate bought item name, total price and average decoration factor
    generateButton.addEventListener('click', generateItems)

    function generateItems(){

      let items = JSON.parse(generateTextarea.value)
      //console.log(items);
      let tableBody = document.querySelector('.table tbody')

      items.forEach(el => {

        let tr = document.createElement('tr')

        let imageTd = document.createElement('td')
        let image = document.createElement('img')
        image.src = el.img
        imageTd.appendChild(image)

        let nameTd = document.createElement('td')
        let nameP = document.createElement('p')
        nameP.textContent = el.name
        nameTd.appendChild(nameP)

        let priceTd = document.createElement('td')
        let priceP = document.createElement('p')
        priceP.textContent = el.price
        priceTd.appendChild(priceP)

        let decFactorTd = document.createElement('td')
        let decFactorP = document.createElement('p')
        decFactorP.textContent = el.decFactor
        decFactorTd.appendChild(decFactorP)

        let checkboxTd = document.createElement('td')
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkboxTd.appendChild(checkbox)

        tr.appendChild(imageTd)
        tr.appendChild(nameTd)
        tr.appendChild(priceTd)
        tr.appendChild(decFactorTd)
        tr.appendChild(checkboxTd)

        tableBody.appendChild(tr)
      })
    }

    buyButton.addEventListener('click', calculateFurniture)

    function calculateFurniture(){
      let tableRows = Array.from(document.querySelectorAll('.table tbody tr'))
      let selectedRows = tableRows.filter(row => row.querySelectorAll('input:checked').length > 0)

      let names = selectedRows
      .map(row => row.querySelector('td:nth-of-type(2) p'))
      .map(x => x.textContent)
      .join(', ')

      let prices = selectedRows
      .map(row => row.querySelector('td:nth-of-type(3) p'))
      .map(x => Number(x.textContent))

      let decFactor = selectedRows
      .map(row => row.querySelector('td:nth-of-type(4) p'))
      .map(x => Number(x.textContent))

      let totalPrice = prices.reduce((acc, el) => acc + el, 0).toFixed(2)
      let averageDecFactor = decFactor.reduce((acc,el) => acc + el, 0) / decFactor.length

      let furnitureText = `Bought furniture: ${names}`
      let priceText = `Total price: ${totalPrice}`
      let decFactorText = `Average decoration factor: ${averageDecFactor}`

      buyTextarea.textContent = `${furnitureText}\n${priceText}\n${decFactorText}`

    }


}


// <tbody>
//     <tr>
//          <td>
//             <img
//               src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg">
//          </td>
//           <td>
//              <p>Office chair</p>
//         </td>
//          <td>
//              <p>160</p>
//          </td>
//          <td>
//             <p>0.5</p>
//          </td>
//         <td>
//             <input type="checkbox" disabled />
//          </td>
//      </tr>
//  </tbody>