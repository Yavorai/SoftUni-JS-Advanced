function focused() {
     let arrCollection = Array.from(document.querySelectorAll('input'))
     for(let input of arrCollection){
        input.addEventListener('focus', funcFocus)
        input.addEventListener('blur', funcBlur)
     }
     function funcFocus(event){
        event.target.parentElement.className = 'focused'
     }
     function funcBlur(event){
        event.target.parentElement.className = ''
     }
}

// function focused() {
//     Array.from(document.querySelectorAll("input")).forEach((i) => {
//       i.addEventListener("focus", onFocus);
//       i.addEventListener("blur", onBlur);
//     });
  
//     function onFocus(ev) {
//       ev.target.parentElement.className = "focused";
//     }
  
//     function onBlur(ev) {
//         ev.target.parentElement.className = ""
//     }
//   }