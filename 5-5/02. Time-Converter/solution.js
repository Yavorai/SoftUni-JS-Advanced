// function attachEventsListeners() {

//     console.log('TODO:...');
// }

// function attachEventsListeners() {
//     let daysBtn = document.getElementById('daysBtn')
//     let hoursBtn = document.getElementById('hoursBtn')
//     let minutesBtn = document.getElementById('minutesBtn')
//     let secondsBtn = document.getElementById('secondsBtn')

//     let days = document.getElementById('days')
//     let hours = document.getElementById('hours')
//     let minutes = document.getElementById('minutes')
//     let seconds = document.getElementById('seconds')

//     let rations = {
//         days: 1,
//         hours: 24,
//         minutes: 1440,
//         seconds: 86400,
//     }
//     daysBtn.addEventListener('click', onConvert)
//     hoursBtn.addEventListener('click', onConvert)
//     minutesBtn.addEventListener('click', onConvert)
//     secondsBtn.addEventListener('click', onConvert)

//     function convert(value, unit){
//         let days = value / rations[unit]
//         return {
//             days: days,
//             hours: days * rations.hours,
//             minutes: days * rations.minutes,
//             seconds: days * rations.seconds,
//         }
//     }

//     function onConvert(event){
//         let input = event.target.parentElement.querySelector('input[type="text"]')
//         let time = convert(Number(input.value), input.id) // id is from html file

//         days.value = time.days
//         hours.value = time.hours
//         minutes.value = time.minutes
//         seconds.value = time.seconds
//     }
    
// }

// //=============================

// function attachEventsListeners() {
//     const ratios = {
//         days: 1,
//         hours: 24,
//         minutes: 1440,
//         seconds: 86400,
//     };

//     function convert(value, unit) {
//         const inDays = value / ratios[unit];

//         return {
//             days: inDays,
//             hours: inDays * ratios.hours,
//             minutes: inDays * ratios.minutes,
//             seconds: inDays * ratios.seconds,
//         }
//     }

//     const daysInput = document.getElementById('days');
//     const hoursInput = document.getElementById('hours');
//     const minutesInput = document.getElementById('minutes');
//     const secondsInput = document.getElementById('seconds');

//     document.getElementById('daysBtn').addEventListener('click', onConvert);
//     document.getElementById('hoursBtn').addEventListener('click', onConvert);
//     document.getElementById('minutesBtn').addEventListener('click', onConvert);
//     document.getElementById('secondsBtn').addEventListener('click', onConvert);
//     // or use one eventListener ---> document.querySelector('main').addEventListener('click',onConvert)

//     function onConvert(e) {
//         const input = e.target.parentElement.querySelector('input[type = "text"]');
//         // ---> if(e.target.tagName == 'INPUT' && e.target.type == 'button'){}

//         const time = convert(Number(input.value), input.id);

//         daysInput.value = time.days;
//         hoursInput.value = time.hours;
//         minutesInput.value = time.minutes;
//         secondsInput.value = time.seconds;
//     }
// }



//============================================

function attachEventsListeners() {
    let daysInput = document.getElementById('days')
    let hoursInput = document.getElementById('hours')
    let minutesInput = document.getElementById('minutes')
    let secondsInput = document.getElementById('seconds')

    let daysButton = document.getElementById('daysBtn')
    let hoursButton = document.getElementById('hoursBtn')
    let minutesButton = document.getElementById('minutesBtn')
    let secondsButton = document.getElementById('secondsBtn')

    daysButton.addEventListener('click', () => {
        let days = Number(daysInput.value)

        let hours = days * 24
        let minutes = days * 24 * 60
        let seconds = days * 24 * 60 * 60

        hoursInput.value = hours
        minutesInput.value = minutes
        secondsInput.value = seconds
    })

    hoursButton.addEventListener('click', () => {
        let hours = Number(hoursInput.value)

        let days = hours / 24
        let minutes = hours * 60
        let seconds = hours * 60 * 60

        daysInput.value = days
        minutesInput.value = minutes
        secondsInput.value = seconds
    })

    minutesButton.addEventListener('click', () => {
        let minutes = Number(minutesInput.value)

        let days = minutes / 60 / 24
        let hours = minutes / 60
        let seconds = minutes * 60

        daysInput.value = days
        hoursInput.value = hours
        secondsInput.value = seconds
    })

    secondsButton.addEventListener('click', () => {
        let seconds = Number(secondsInput.value)

        let days = seconds / 24 / 60 / 60
        let hours = seconds / 60 / 60
        let minutes = seconds / 60

        daysInput.value = days
        hoursInput.value = hours
        minutesInput.value = minutes
    })

}