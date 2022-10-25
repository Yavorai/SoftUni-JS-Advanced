// function lockedProfile() {
//     console.log('TODO...')
// }

// function lockedProfile() {
//     // add toggle event listener to all profile buttons
//     // find associated profile details
//     // if it's visible -> hide it and  display label 'Show more'
//     // otherwise -> show it and display label 'Hide it'
//     // get from div with class="profile" a button
//     Array.from(document.querySelectorAll('.profile button'))
//         .forEach(b => b.addEventListener('click', onToggle));

//     function onToggle(e) {
//         const profile = e.target.parentElement;
//         const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

//         if (isActive) {
//             const infoDif = profile.querySelector('div');
//             // or: 
//             // ---> const infoDif = Array.from(e.target.parentElement.querySelectorAll('div'))
//             //                           .find(d => d.id.includes("HiddenFields"));
//             if (e.target.textContent == "Show more") {
//                 infoDif.style.display = 'block';
//                 e.target.textContent = "Hide it";
//             } else {
//                 infoDif.style.display = '';
//                 e.target.textContent = "Show more";
//             }
//         }
//     }
// }

// //===================================================================

// function lockedProfile() {
//     const BUTTON_SHOW_TITLE = 'Show more';
//     const BUTTON_HIDE_TITLE = 'Hide it';
//     const divs = document.querySelectorAll('div.profile');
//     for (const div of divs) {
//         div.addEventListener('click', (e) => {
//             const buttonShowHideElement = e.currentTarget.querySelector('button');
//             const lock = e.currentTarget.querySelector('input[value=lock]').checked;
//             if (buttonShowHideElement !== e.target || lock) {
//                 return;
//             }

//             buttonShowHideElement.textContent = buttonShowHideElement.textContent === BUTTON_SHOW_TITLE
//                 ? BUTTON_HIDE_TITLE
//                 : BUTTON_SHOW_TITLE;

//             const infoDivElement = e.currentTarget.querySelector('div');
//             infoDivElement.style.display = infoDivElement.style.display === 'inline-block' ? 'none' : 'inline-block';
//         });
//     }
// }

// //===================================================================

// function lockedProfile() {
//     document.getElementById('main')
//     .addEventListener('click', (e) => {

//         if(e.target.tagName === 'BUTTON'){

//             let profile = e.target.parentNode
//             let isLocked = profile
//             .querySelector('input[type=radio]:checked').value === 'lock'

//             if(isLocked){ // only if the profile is not locked! If the current profile is locked, nothing should happen.
//                 return
//             }

//             let div = profile.querySelector('div') 
//             let isVisible = div.style.display === 'block'
//             div.style.display = isVisible ? 'none' : 'block'
//             e.target.textContent = !isVisible ? 'Hide it' : 'Show more'
//         }

//     })

// }


//====================================

function lockedProfile() {
    let profiles = document.querySelectorAll('#main .profile')
    let buttons = document.querySelectorAll('#main .profile button')

    for(let i = 0; i < buttons.length; i++){

        buttons[i].addEventListener('click' , () =>{

            let radioButtonName = `user${i + 1}Locked`
            let radioButton = document.querySelector(`input[name="${radioButtonName}"]:checked`)

            if(radioButton.value === 'unlock'){

                let hiddenFieldElement = document.getElementById(`user${i + 1}HiddenFields`)
                hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block'
                ? 'none'
                : 'block'
                buttons[i].textContent = buttons[i].textContent === 'Show more'
                ? 'Hide it'
                : 'Show more'
            }

        })

    }
    
}