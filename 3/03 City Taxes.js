function cityTaxes(name, population, treasury) {

  let obj = {};

  obj["name"] = name;
  obj["population"] = population;
  obj["treasury"] = treasury;
  obj["taxRate"] = 10;

  obj["collectTaxes"] = function collectTaxes() {
    this.treasury += Math.floor(this.population * this.taxRate);
  };

  obj["applyGrowth"] = function applyGrowth(percentage) {
    this.population += Math.floor((this.population * percentage) / 100);
  };

  obj["applyRecession"] = function applyRecession(percentage) {
    this.treasury -= Math.floor((this.treasury * percentage) / 100);
  };
  //console.log(obj);
  return obj;
}
const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
