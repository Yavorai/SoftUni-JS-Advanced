function demo(worker){
    if(worker.dizziness){ //ако е true
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience
        worker.dizziness = false

    }
    return worker
}
console.log(demo({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));
console.log('--------');
demo({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true })
console.log('--------');
demo({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })