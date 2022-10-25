function create(words) {
   // create <div>
   // create <p>
   // set <p> content
   // configure <p> to be hidden (display: none)
   // add <p> to page
   // add <div> to page
   // configure <div> eventListener

   const content = document.getElementById('content');

   for(let word of words){
      const div = document.createElement('div');
      const para = document.createElement('p');
   
      para.textContent = word;
      para.style.display = "none"
      div.appendChild(para);
   
      div.addEventListener('click', reveal);
   
      content.appendChild(div);
   }

   function reveal(ev) {
      ev.target.children[0].style.display = '';
      // or firstChild
   }

}