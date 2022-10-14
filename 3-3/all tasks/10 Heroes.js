function heroes() {
    return {
        mage (name){
            return {
                'name': name,
                'health': 100,
                'mana': 100,
                cast(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            };
        },
        fighter(name){
            return {
                'name': name,
                'health': 100,
                'stamina': 100,
                fight() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            };
        }
    };
}
let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);


//=====================================


function solve() {
    const mageOrFighter = {
        mage: function (name) {
            return {
                name: name,
                health: 100,
                mana: 100,
 
                cast: function (name) {
                    console.log(`${this.name} cast ${name}`);
                    this.mana -= 1;
                }
            }
        },
        fighter: function(name) {
            return {
                name: name,
                health: 100,
                stamina: 100,
 
                fight: function () {
                    console.log(`${name} slashes at the foe!`);
                    this.stamina -= 1
                }
            }
        }
    }
    return mageOrFighter;
 
}