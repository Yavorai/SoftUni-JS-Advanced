function solve() {
   //TODO...
}

function solve() {
   let shoppingCartElement = document.getElementsByClassName('shopping-cart')[0];
   let productNamesElements = document.getElementsByClassName('product-title');
   let productPriceElements = document.getElementsByClassName('product-line-price');
   let addButtons = document.getElementsByClassName('add-product');
   let resultElement = document.querySelector('textarea');
   let checkoutButton = document.getElementsByClassName('checkout')[0];
   if (shoppingCartElement == null || productNamesElements == null || productPriceElements == null || addButtons == null || resultElement == null || checkoutButton == null) {
      throw new Error('Missing DOM element!');
   }
   let list = {};
   function listManager(obj, product, price) {
      if (obj.hasOwnProperty(product) == false) {
         obj[product] = 0;
      }
      obj[product] += Number(price);
      return obj;
   }
   function checkoutParser(obj) {
      let list = Object.keys(obj);
      let totalPrice = Object.values(obj).reduce((a, b) => a + b, 0);
      return `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
   }
   const btnHandlerMap = {
      'add-product': (target, result, list) => {
         let product = target.parentElement.parentElement.querySelector('.product-title').textContent;
         let price = target.parentElement.parentElement.querySelector('.product-line-price').textContent;
         list = listManager(list, product, price);
         result.textContent += `Added ${product} for ${Number(price).toFixed(2)} to the cart.\n`;
      },
      'checkout': (_, result, list) => {
         result.textContent += checkoutParser(list);
         shoppingCartElement.removeEventListener('click', buttonsHandler);
      }
   }
   function buttonsHandler(e) {
      if (typeof btnHandlerMap[e.target.classList.value] == 'function') {
         btnHandlerMap[e.target.classList.value](e.target, resultElement, list);
      }
   }
   shoppingCartElement.addEventListener('click', buttonsHandler);
}

//================================================================

function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);
   const cart = [];
   const output = document.getElementsByTagName('textarea')[0];
   // returns collection and get first el ---> [0]
   output.value = '';
   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains("add-product") && checked != true) {
         //or ---> ev.target.classList.contains("add-product")
         // ev.target.className == "add-product"
         const product = ev.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent
         const price = Number(product.querySelector('.product-line-price').textContent);
         cart.push({
            name,
            price
         });
         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      }
   }
   let checked = false;
   function checkout(ev) {
      checked = true;
      // save unique keys
      const products = new Set();
      cart.forEach(p => products.add(p.name));
      // reduce ---> start from 0,  t = total and c = current
      const total = cart.reduce((t, c) => t + c.price, 0);

      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
      ev.target.removeEventListener('click', checkout)
      ev.target.removeEventListener('click', onClick)
   }
}