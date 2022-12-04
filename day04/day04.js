// In how many assignment pairs does one range fully contain the other?
import {readFileSync} from 'node:fs'

function readInput() {
    return readFileSync('./day04.data', {encoding: 'utf8'}).split('\n')
}

const data = readInput()


const overlaps = []
const noOverlaps = []

// Part 1
// for (let i = 0; i < data.length - 1; i++) {
//     let secondSplitPart1 = data[i].split(',')[0].split('-')
//     let secondSplitPart2 = data[i].split(',')[1].split('-')
//
//
//     if ((Number(secondSplitPart2[0]) >= Number(secondSplitPart1[0]) && Number(secondSplitPart2[1]) <= Number(secondSplitPart1[1]))
//         || (Number(secondSplitPart1[0]) >= Number(secondSplitPart2[0]) && Number(secondSplitPart1[1]) <= Number(secondSplitPart2[1]))){
//         overlaps.push(i)
//
//     }
//     else { noOverlaps.push('fu')}
//
// }
// console.log(overlaps.length)
// //console.log(overlaps.reduce((sum, value) => sum + value))
//

//Part 2


for (let i = 0; i < data.length - 1; i++) {
    let splitPart1 = data[i].split(',')[0].split('-')
    let splitPart2 = data[i].split(',')[1].split('-')

    let nsp1 = splitPart1.map(e => Number(e))
    let nsp2 = splitPart2.map(e => Number(e))

    if (nsp2[0] >= nsp1[0] && nsp2[0] <= nsp1[1]) {
        overlaps.push(i)
    } else if (nsp2[1] >= nsp1[0] && nsp2[1] <= nsp1[1]) {
        overlaps.push(i)
    } else if (nsp1[0] >= nsp2[0] && nsp1[0] <= nsp2[1]) {
        overlaps.push(i)
    } else if (nsp1[1] >= nsp2[0] && nsp1[1] <= nsp2[1]) {
        overlaps.push(i)
    }
}
// console.log(`Overlaps: ${overlaps.length}`)
// console.log(`NoOverlaps: ${noOverlaps.length}`)
//console.log(overlaps.reduce((sum, value) => sum + value))

console.log(overlaps.length)
