function demo(arr){
    let result = []

    class Town {
        constructor(town, latitude, longitude){
            this.Town = town //с главна буква е само защото така трябва да се принтират
            this.Latitude = Number(latitude)
            this.Longitude = Number(longitude)
         }
    }

    for (let index = 1; index < arr.length; index++) {
        const arr2 = arr[index].split('|').map(t => t.trim()).filter((x => x.length != 0))
        let townName = arr2[0]
        let latitude = Number(arr2[1]).toFixed(2)       // toFixed работи само върхи число 
        let longitude = Number(arr2[2]).toFixed(2) 
        let town = new Town(townName, latitude, longitude)
        result.push(town)       
    }
    return JSON.stringify(result)
}
demo(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])
console.log('-----------------');
demo(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])

//====================================

function townsToJson(input) {
 
    const towns = [];
    const regex = new RegExp(/\s*\|\s*/);
    let nameTable = input.shift();
 
    for (const line of input) {
        let tokens = line.split(regex).filter(Boolean); // ???
        towns.push({
            Town: tokens[0],
            Latitude: +Number(tokens[1]).toFixed(2), // ???
            Longitude: +Number(tokens[2]).toFixed(2) // ???
        });
    }
    return JSON.stringify(towns);
}