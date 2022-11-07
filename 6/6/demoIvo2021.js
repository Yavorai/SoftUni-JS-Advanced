function fly(){ // func declaration
    console.log('flying');
}

let hero = {
    name: 'Superman',
    flyFunc: fly,

    laserEyes: function(){  // func expression
        console.log(this.name + ' Shoot lasers');
    },
    stopBullets(){  // object method notation

    },
    punch: () => {},  
}

fly() // global invocation
hero.flyFunc() // context is on the left side of the dot .
hero.laserEyes() // --> Superman Shoot lasers

// така не е свързана с hero контекста и се изпълнява глобално
let shootLasers = hero.laserEyes // взима функцията по референция
shootLasers() // --> undefined Shoot lasers