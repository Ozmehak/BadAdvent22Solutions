import {readFileSync} from 'node:fs'

function readInput() {
    return readFileSync('./day01.data', {encoding: 'utf8'}).split('\n')}



const elvesNum = readInput().map(Number)


const initialValue = 0

let sumElves = []

while (elvesNum.length > 0) {

    sumElves.push(elvesNum.splice(0, elvesNum.indexOf(0) + 1).reduce((a, b) => a + b,
        initialValue
    ))

}
console.log(sumElves.sort((a,b) => b - a))
let sortedNsuch = sumElves.sort((a,b) => b - a).splice(0, 3)

console.log(sortedNsuch.reduce((a, b) => a + b))



