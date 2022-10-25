// function create(words) {
//    let contentElement = document.getElementById('content')
//    for(let word of words){
//       let div = document.createElement('div')
//       let p = document.createElement('p')

//       p.textContent = word
//       p.style.display = 'none'
//       div.appendChild(p)
//       div.addEventListener('click', reveal)
//       contentElement.appendChild(div)
//       function reveal(event){ // закача се за ивента
//          event.currentTarget.children[0].style.display = ''
//       }
//    }
// }

// //====================================

// function create(strings) {
//    function display(e) {
//      e.target.firstChild.style.display = "inline-block";
//    }
 
//    for (let string of strings) {
//      let currParEl = document.createElement("p");
//      currParEl.textContent = string;
//      currParEl.style.display = "none";
 
//      let currDivEl = document.createElement("div");
//      currDivEl.appendChild(currParEl);
//      currDivEl.addEventListener("click", display);
 
//      document.getElementById("content").appendChild(currDivEl);
//    }
//  }

// //====================================


// function create(words) {
//    // <div> -> <p> ->  {string}
//    let content = document.getElementById('content')

//    for(let i=0; i < words.length; i++){

//       let div = document.createElement('div')
//       let paragraph = document.createElement('p')

//       paragraph.textContent = words[i]
//       paragraph.style.display = 'none'
//       div.appendChild(paragraph)
//       content.appendChild(div)
//    }

//    function changeStyle(e){
//       // при клик което и от двете да уцелим да се изпълни
//       if(e.target.tagName === 'DIV' || e.target.tagName === 'P'){ // tag names are with capitals
//          let p = e.target.children[0] || e.target
//          let isVisible = p.style.display === 'block'
//          p.style.display = isVisible ? 'none' : 'block'
//       } 

//       // if(e.target !== e.currentTarget){
//       //    let p = e.target.children[0] || e.target
//       //    let isVisible = p.style.display === 'block'
//       //    p.style.display = isVisible ? 'none' : 'block'
//       // }
//    }

//    content.addEventListener('click', changeStyle)
// }

function create(words) {
   let contentDiv = document.getElementById('content')
   for(let i = 0; i < words.length;i++){
      let div = document.createElement('div')
      let p = document.createElement('p')
      p.textContent = words[i] 
      p.style.display = 'none'
      div.appendChild(p)
      // div.addEventListener('click', showParagraph) // не е добре да се закача в цикъл
      contentDiv.appendChild(div)
   }
   // event delegation --> чрез таргет се знае кой елемент е натиснат
   contentDiv.addEventListener('click', showParagraph)

   function showParagraph(event){
      if(event.target.matches('#content div')){ // този div който сме създали
         let p = event.target.children[0]
         p.style.display = 'block'

      }
   }
}