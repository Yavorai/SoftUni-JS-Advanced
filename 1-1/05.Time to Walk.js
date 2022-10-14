function demo(first, second, third){

    let numOfSteps = Number(first)
    let footPrintSizeInMeters = Number(second)
    let speedKmPerHour = Number(third)

    let distance = numOfSteps * footPrintSizeInMeters
    let speed = speedKmPerHour * 1000 / 3600 // in sec

    let rest = Math.floor(distance / 500) * 60
    let time = distance / speed + rest
     
    let hours = Math.floor(time / 3600).toFixed(0).padStart(2,'0')
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2,'0')
    let seconds = Math.ceil(time % 60).toFixed(0).padStart(2,'0')

    console.log(`${hours}:${minutes}:${seconds}`);
}
demo(4000, 0.60, 5)
console.log('----------------------------');
demo(2564, 0.70, 5.5)

/*
function demo(steps, footPrint, speed){
    let distanceMeters = steps * footPrint
    let speedMetersSec = speed / 3.6
    let time = distanceMeters / speedMetersSec
    let rest = Math.floor(distanceMeters / 500)

    let timeMin = Math.floor(time / 60)
    let timeSec = Math.round(time - (timeMin * 60))
    let timeHr = Math.floor(time / 3600)

    console.log((timeHr < 10 ? '0' : '') + timeHr + ':' + (timeMin + rest < 10 ? '0' : '') + (timeMin + rest) + ':' + (timeSec < 10 ? '0' : '') + timeSec);
}
*/