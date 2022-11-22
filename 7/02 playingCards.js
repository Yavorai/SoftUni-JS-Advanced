// not 100/100 to do later

function cardFactory(face, suit){
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suits = {
        S: '♠',
        H: '♥',
        D: '♦',
        C: '♣',
    }
    if(!faces.includes(face) || !suits[suit]){ //  обръщаме проверката от false на true за да влзези и да хвърли грешката
        throw new Error('Invalid face or suit')
    }
    // if(face !== face.toUpperCase()){
    // }
    let card = {
        face,
        suit,
        toString(){
            console.log(this.face + suits[this.suit]);
        },
    }
    return card
}
let card = cardFactory('A', 'S')
let card2 = cardFactory('10', 'H')
let card3 = cardFactory('1', 'C')
card.toString()
card2.toString()
card3.toString()


//============================================================

function demo(face, suit) {
    const faces = [
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
    if(faces.indexOf(face) == -1){
        throw new Error('Invalid face: ' + face)
    }
  
    const suits = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };
    const result = {
      face,
      suit: suits[suit],
      toString() {
        return this.face + this.suit;
      },
    };
    return result;
  }