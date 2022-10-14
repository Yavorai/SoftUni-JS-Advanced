function demo(num, a, b, c, d, e) {
  let inputNum = Number(num);
  let arrOfCommands = [a, b, c, d, e];

  let chop = function () {
    return inputNum / 2;
  };
  let dice = function () {
    return Math.sqrt(inputNum);
  };
  let spice = function () {
    return inputNum + 1;
  };
  let bake = function () {
    return inputNum * 3;
  };
  let fillet = function () {
    return inputNum * 0.8;
  };

  for (let i = 0; i < arrOfCommands.length; i++) {

    let currCommand = arrOfCommands[i];

    switch (currCommand) {
      case "chop":
        inputNum = chop(inputNum);
        break;
      case "dice":
        inputNum = dice(inputNum);
        break;
      case "spice":
        inputNum = spice(inputNum);
        break;
      case "bake":
        inputNum = bake(inputNum);
        break;
      case "fillet":
        inputNum = fillet(inputNum);
        break;
    }
    console.log(inputNum);
  }
}
demo("32", "chop", "chop", "chop", "chop", "chop");
console.log("----------------------------------------------");
demo("9", "dice", "spice", "chop", "bake", "fillet");

console.log('==================================================================================================');


function demo(number, com1,com2,com3,com4,com5){
    number = Number(number)
    // TODO use params
    let commandList = [com1,com2,com3,com4,com5]
    
    let chop = x => x / 2
    let dice = x => Math.sqrt(x)
    let spice = x => ++x
    let bake = x => x * 3
    let fillet = x => x - x * 0.2
    
    for(let i = 0; i < commandList.length; i++){
    
        switch(commandList[i]){
            case 'chop':
                number = chop(number)
                console.log(number);
                break
                case 'dice':
                    number = dice(number)
                console.log(number);
    
                break
                case 'spice':
                    number = spice(number)
                console.log(number);
                break
                case 'bake':
                    number = bake(number)
                console.log(number);
                break
                case 'fillet':
                    number = fillet(number)
                console.log(number);
                break
    
        }
    }
    
    }
    demo("32", "chop", "chop", "chop", "chop", "chop");
console.log("----------------------------------------------");
demo("9", "dice", "spice", "chop", "bake", "fillet");
    
