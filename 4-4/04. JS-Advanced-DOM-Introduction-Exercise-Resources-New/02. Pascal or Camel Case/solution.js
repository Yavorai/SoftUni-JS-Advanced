// function solve() {
//   let text = document.getElementById("text").value;
//   let convention = document.getElementById("naming-convention").value;

//   let result = "";

//   if (convention === "Camel Case") {
//     for (let i = 0; i < text.length; i++) {
//       if (text[i] === " ") {
//         result += text[i + 1].toUpperCase();
//         i++;
//       } else {
//         result += text[i].toLowerCase();
//       }
//     }
//   } else if (convention === "Pascal Case") {
//     result += text[0].toUpperCase();
//     for (let i = 1; i < text.length; i++) {
//       if (text[i] === " ") {
//         result += text[i + 1].toUpperCase();
//         i++;
//       } else {
//         result += text[i].toLowerCase();
//       }
//     }
//   } else {
//     result = "Error!";
//   }

//   let resultElement = document.getElementById("result");
//   resultElement.textContent = result;
// }
function solve() {
  //1. select elements
  let textElement = document.getElementById("text");
  let namingConventionElement = document.getElementById("naming-convention");
  //2. parse data
  let text = textElement.value;
  let naming = namingConventionElement.value;
  //3. main logic
  let result = applyNamingConvention(text,naming)
  //4. display result
  let spanElement = document.getElementById('result')
  spanElement.textContent = result

  function applyNamingConvention(text, convention) {
    let conventionSwitch = {
      "Pascal Case": () =>
        text
          .toLowerCase()
          .split(" ")
          .map((x) => x[0].toUpperCase() + x.slice(1))
          .join(''),

      "Camel Case": () =>
        text
          .toLowerCase()
          .split(" ")
          .map((x, i) => 
          x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
          .join(''),

      default: () => "Error!",
    }
    return (conventionSwitch[convention] || conventionSwitch.default)();
  }
}
