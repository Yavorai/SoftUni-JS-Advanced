function notify(message) {
   let notificationDiv = document.getElementById('notification')
   notificationDiv.textContent = message
   notificationDiv.style.display = 'block'

   let dataNotificationAttribute = notificationDiv.getAttribute('data-notification-set')
   if(dataNotificationAttribute !== 'true'){
    notificationDiv.setAttribute('data-notification-set', 'true')
    notificationDiv.addEventListener('click', notificationDivClickHandler)
   }

   function notificationDivClickHandler(e){
    let notificationDiv = document.getElementById('notification')
    notificationDiv.style.display = 'none'
   }

}

//====================================================

function notify(message) {
  const getElementDiv = document.querySelector('#notification');
  getElementDiv.style.display = 'none';
  getElementDiv.style.display = 'block';
  getElementDiv.textContent = message;

  getElementDiv.addEventListener('click', () => {
    getElementDiv.style.display = 'none';
  });
  
}