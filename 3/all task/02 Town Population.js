function demo(list){
    const result = {}
    for(let town of list){
        const tokens = town.split(' <-> ')
        const name = tokens[0]
        let pop = Number(tokens[1])
        
        if(result[name] === undefined){
            result[name] = pop
        }else{
            result[name] += pop
        }
    }
    
    for(let town in result ){
        console.log(`${town} : ${result[town]}`);
    }

}
demo(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])
console.log('--------');
demo(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])


//====================


function TownPopulation(input) {
    let obj ={};
    for (let line of input) {
        let tokens = line.split(" <-> ")
        let name = tokens[0];
        let population = Number(tokens[1])
        if(obj.hasOwnProperty(name)){
            let Objpopulation = obj[name]+population;
            obj[name] = Objpopulation;
        }else{
            obj[name] = population
        }
    }
    for(let key in obj){
        console.log(`${key} : ${obj[key]}`);
    }
}