function createCard(face, suit) {
  // factory function
  const validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suitToString = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };
  if (validFaces.includes(face) == false) {
    throw new Error("Invalid face");
  } else if (Object.keys(suitToString).includes(suit) == false) {
    throw new Error("Invalid suit");
  }
  return {
    face,
    suit,
    toString() {
      return `${face}${suitToString[suit]}`;
    },
  };
}
let myCard = createCard("A", "S")
console.log(myCard.toString());
// или в темплейтен литерал 
console.log(`${myCard}`);

//===========================================
// function demo(face, suit) {
//     const faces = [
//       "2",
//       "3",
//       "4",
//       "5",
//       "6",
//       "7",
//       "8",
//       "9",
//       "10",
//       "J",
//       "Q",
//       "K",
//       "A",
//     ];
//     if(faces.indexOf(face) == -1){
//         throw new Error('Invalid face: ' + face)
//     }
//     const suits = {
//       S: "\u2660",
//       H: "\u2665",
//       D: "\u2666",
//       C: "\u2663",
//     };
//     const result = {
//       face,
//       suit: suits[suit],
//       toString() {
//         return this.face + this.suit;
//       },
//     };
//     return result;
//   }