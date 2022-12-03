import {readFileSync} from 'node:fs'

function readInput() {
    return readFileSync('./day02.data', {encoding: 'utf8'}).split('\n')
}


// const A = 1 ROCK
// const B = 2 PAPER
// const C = 3 SCISSORS
//
// const X = 1 ROCK
// const Y = 2 PAPER
//const Z = 3 SCISSORS
//
// const win = 6
// const draw = 3
// const loss = 0






let pointzArray = []


const pointz = (p) => {
    switch (p) {
        case "B X":
            pointzArray.push(1)
            break
        case "C Y":
            pointzArray.push(2)
            break
        case "A Z":
            pointzArray.push(3)
            break
        case "A X":
            pointzArray.push(4)
            break
        case "B Y":
            pointzArray.push(5)
            break
        case "C Z":
            pointzArray.push(6)
            break
        case "C X":
            pointzArray.push(7)
            break
        case "A Y":
            pointzArray.push(8)
            break
        case "B Z":
            pointzArray.push(9)
            break
        default:
            console.log("fackju")
            break
    }

}

readInput().forEach(i => {
    pointz(i)
})

console.log(pointzArray.reduce((a, b) => a + b) / 2500)


/// Rules Part Two
// Y = Draw
// X = Lose
// Z = Win
// const A = 1 ROCK
// const B = 2 PAPER
// const C = 3 SCISSORS

let pointzD2Array = []

const pointzD2 = (p) => {

    switch (p){
        case "B X":
            pointzD2Array.push(1)
            break
        case "C Y":
            pointzD2Array.push(3 + 3)
            break
        case "A Z":
            pointzD2Array.push(2 + 6)
            break
        case "A X":
            pointzD2Array.push(3)
            break
        case "B Y":
            pointzD2Array.push(2 + 3)
            break
        case "C Z":
            pointzD2Array.push(1 + 6)
            break
        case "C X":
            pointzD2Array.push(2)
            break
        case "A Y":
            pointzD2Array.push(1 + 3)
            break
        case "B Z":
            pointzD2Array.push(3 + 6)
            break
        default:
            console.log("fackju")
            break
    }
}

readInput().forEach(i => {
    pointzD2(i)
})

console.log(pointzD2Array.reduce((a, b) => a + b))
