import {readFileSync} from 'node:fs'

function readInput() {
    return readFileSync('./day06.data', {encoding: 'utf8'})}

const data = readInput()


//Part 1
 for (let i = 0; i < data.length; i++) {
    let first4 = data.substring(i, i + 4)
    let unique = [...new Set(first4)]
    if (unique.length === 4) {
        console.log(unique)
        console.log(i + 4)
        break
    }

}

//Part2
for (let i = 0; i < data.length; i++) {
    let first14 = data.substring(i, i + 14)
    let unique = [...new Set(first14)]
    if (unique.length === 14) {
        console.log(unique)
        console.log(i + 14)
        break
    }

}
