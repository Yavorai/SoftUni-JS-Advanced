function demo(a, b, c, d) {
  let comb1 = [a, b, 0, 0];
  let comb2 = [c, d, 0, 0];
  let comb3 = [a, b, c, d];
  let allComb = [comb1, comb2, comb3];

  for (const arrayComb of allComb) {
    let x1 = arrayComb[0];
    let y1 = arrayComb[1];
    let x2 = arrayComb[2];
    let y2 = arrayComb[3];

    let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    let result = "invalid";
    if (Number.isInteger(distance)) {
      result = "valid";
    }
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`);
  }
}
demo(3, 0, 0, 4);
demo(2, 1, 1, 1);
