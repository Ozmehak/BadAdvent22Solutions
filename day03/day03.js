import {readFileSync} from 'node:fs'

function readInput() {
    return readFileSync('./day03.data', {encoding: 'utf8'}).split('\n')
}


/**
 *
 * @param {string} s
 * @param {number} i
 * @returns {[string,string]}
 */
const split = (s, i) => {
    return [s.slice(0, i), s.slice(i)]
}


let duplicates = []


readInput().forEach(line => {
    let half = line.length / 2
    const [first, second] = split(line, half)


    const firstHalf = [...first]
    const secondHalf = [...second]


    const firstNoDups = []

    firstHalf.forEach(letter => {
        if (!firstNoDups.includes(letter)) {
            firstNoDups.push(letter)
        }
    })

    firstNoDups.forEach(letter => {
        if (secondHalf.includes(letter)) {
            duplicates.push(letter)
        }
    })
})


/**
 * @type {number}
 */
const answer = duplicates.map(letter => {

    if (letter.charCodeAt(0) >= 97) {

        return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1 // => 97
    }
    return letter.charCodeAt(0) - 'A'.charCodeAt(0) + 27

}).reduce((sum, value) => sum + value, 0)

console.log(answer)


let badges = 0

const data = readInput()


for (let i = 0; (i + 2) < data.length; i += 3) {
    const rowOne = data[i].split('')
    const rowTwo = data[i + 1].split('')
    const rowThree = data[i + 2].split('')
    // console.log(rowOne, rowTwo, rowThree)

    Array.from(new Set(rowOne)).forEach(letter => {
        if (rowTwo.includes(letter) && rowThree.includes(letter)) {
            if (letter.charCodeAt(0) >= 97) {
                badges += (letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1) // => 97
            } else {
                badges += (letter.charCodeAt(0) - 'A'.charCodeAt(0) + 27)
            }
        }
    })
}


console.log(badges)
