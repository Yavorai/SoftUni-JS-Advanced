function solve() {
  // декларация на променливи за микроелементите ==>
  // декларация на вложени функ за обработка ==> извършват операции върху микроелементите
  // декларация на мениджър ==> обработва входа и изкарва една от финкциите
  // връщане на референция към мениджур

  let recipes = {
    apple: { carbohydrate: 1, flavour: 2, order: ["carbohydrate", "flavour"] }, // order ни е служебно пропърти само за нашата логика
    lemonade: { carbohydrate: 10, flavour: 20, order: ["carbohydrate", "flavour"] },
    burger: { carbohydrate: 5, fat: 7, flavour: 3, order: ["carbohydrate", "fat", "flavour"] },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
      order: ["protein", "fat", "flavour"],
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
      order: ["protein", "carbohydrate", "fat", "flavour"],
    },
  };

  let microElements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let operations = {
    restock,
    prepare,
    report,
  }

  function restock(element, qty) {
    microElements[element] += qty;
    return "Success";
  }

  function prepare(recipe, qty) {
    let required = Object.assign({}, recipes[recipe]);
    required.order.forEach(key => required[key] *= qty)
    for(let element of required.order){
      if(microElements[element] < required[element]){
        return `Error: not enough ${element} in stock`
      }
    }
    required.order.forEach(key => microElements[key] -= required[key])
    return "Success";
  }

  function report() {
    return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`
  }

  function manager(command) {
    let tokens = command.split(' ')
    return operations[tokens[0]](tokens[1], Number(tokens[2]))
  }
  return manager;
}

let manager = solve();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
//======================================================
function solution() {
  let microElements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  let recipes = {
    apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
    lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
    burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  function manager(input) {
    let [command, name, quantity] = input.split(" ");
    quantity = Number(quantity);

    const restock = function (elements, quantity) {
      microElements[elements] += quantity;
      return "Success";
    };
    const prepare = function (recipe, quantity) {
      quantity = Number(quantity);

      for (const key in recipes[recipe]) {
        let total = recipes[recipe][key] * quantity;

        if (total > microElements[key]) {
          return `Error: not enough ${key} in stock`;
        }
      }
      Object.keys(recipes[recipe]).forEach((el) => {
        if (recipes[recipe][el] > 0) {
          microElements[el] -= recipes[recipe][el] * quantity;
        }
      });

      return "Success";
    };
    const report = function () {
      return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`;
    };

    if (command == "restock") {
      return restock(name, quantity);
    } else if (command == "prepare") {
      return prepare(name, quantity);
    }
    return report();
  }

  return manager;
}
