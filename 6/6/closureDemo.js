function endGame() {
  let avengers = ["Iron Man", "Spider Man", "Thor"];
  function assemble(avengers) {
    let enemy = "Thanos";
    console.log(`Avengers, asemble!`);
    console.log(avengers.join(", "));
    console.log(`Lets kill ${enemy}`);
  }
  assemble(avengers);
}
endGame()