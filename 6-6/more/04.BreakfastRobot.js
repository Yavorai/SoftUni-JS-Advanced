function solution() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    const storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    function restock(el, qty) {
        storage[el] += Number(qty);
        return `Success`;
    }

    function prepare(recipe, qty) {
        const remainingStorage = {};

        for (const el in recipes[recipe]) {
            const remaining = storage[el] - recipes[recipe][el] * Number(qty);
            if (remaining < 0) {
                return `Error: not enough ${el} in stock`;
            } else {
                remainingStorage[el] = remaining;
            }
        }

        Object.assign(storage, remainingStorage);
        return `Success`;
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }

    function control(str) {
        const [command, item, qty] = str.split(' ');

        switch (command) {
            case "restock":
                return restock(item, qty);
            case "prepare":
                return prepare(item, qty);
            case "report":
                return report();
        }
    }

    return control;
    // no "return control();" this isn't return function
}

// 1:
let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 



// 2:
let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4 "));
console.log(manager("restock carbohydrate 10")); // Success 
console.log(manager("restock flavour 10")); // Success 
console.log(manager("prepare apple 1")); // Success 
console.log(manager("restock fat 10")); // Success 
console.log(manager("prepare burger 1")); // Success 
console.log(manager("report")); // protein=0 carbohydrate=4 fat=3 flavour=55



// 3:
let manager = solution();
console.log(manager("prepare turkey 1")); // Error: not enough protein in stock
console.log(manager("restock protein 10")); // Success 
console.log(manager("prepare turkey 1")); // Error: not enough protein in stock
console.log(manager("restock carbohydrate 10")); // Success 
console.log(manager("prepare turkey 1")); // Error: not enough protein in stock
console.log(manager("restock fat 10")); // Success 
console.log(manager("prepare turkey 1")); // Error: not enough protein in stock
console.log(manager("restock flavour 10")); // Success 
console.log(manager("prepare turkey 1")); // Success 
console.log(manager("report")); // protein=0 carbohydrate=0 fat=0 flavour=0