function demo(workerObj) {
    if(workerObj.dizziness === 'true'){
        workerObj.levelOfHydrated += 0.1 * workerObj.weight * workerObj.experience
        workerObj.dizziness = false
    }
    return workerObj
}
console.log(demo({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));
//demo({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true })

//demo({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false })
