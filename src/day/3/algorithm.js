import { getLines } from "../../utils/get-lines.js";

export default function algorithm(input) {
    return {
        part1: part1(input),
        part2: part2(input),
    }
}
const NUM_REGEX = new RegExp(/^[0-9]*$/)
const SYMBOL_REGEX = new RegExp(/[^0-9.]/)

function part1(input) {
    return getLines(input).map((line, row) => {
        let numberData = { num: '', row, col: null }
        let lineSum = 0
        line.split('').forEach((character, col) => {
            if (character.match(NUM_REGEX)) {
                numberData.num = numberData.num + character
                numberData.col = col - numberData.num.length + 1

                const numEnded = col + 1 >= line.length || !NUM_REGEX.test(line[col + 1])

                if (numEnded) {
                    const isAdjacent = isSymbolAdjacent(numberData, input)
                    if (isAdjacent) {
                        lineSum = lineSum + Number(numberData.num)
                    }
                    numberData = { num: '', row, col: null }
                }
            }

        })

        return lineSum
    }).reduce((a, b) => a + b)
}

function isSymbolAdjacent({num, row, col}, input) {
    const numLength = num.length
    const lines = getLines(input)

    const upperRow = lines[row - 1]
    if (upperRow) {
        const init = col - 1 >= 0 ?col - 1 : 0
        const end = col + numLength + 1 < upperRow.length ? col + numLength + 1 : upperRow.length
        const upperSegment = upperRow.slice(init, end)
        const upperLineHasSymbol = SYMBOL_REGEX.test(upperSegment)
        if (upperLineHasSymbol) {
            return true
        }
    }

    const lowerRow = lines[row + 1]
    if (lowerRow) {
        const init = col - 1 >= 0 ?col - 1 : 0
        const end = col + numLength + 1 < lowerRow.length ? col + numLength + 1 : lowerRow.length
        const lowerSegment = lowerRow.slice(init, end)
        const lowerSegmentHasSymbol = SYMBOL_REGEX.test(lowerSegment)
        if (lowerSegmentHasSymbol) {
            return true
        }
    }

    const sameRow = lines[row]

    const leftPos = col - 1
    if (leftPos > 0) {
        const leftChar = sameRow.at(leftPos)
        if (SYMBOL_REGEX.test(leftChar)) {
            return true
        }
    }

    const rightPos = col + numLength + 1 - 1
    if (rightPos < sameRow.length) {
        const rightChar = sameRow.at(rightPos)

        if (SYMBOL_REGEX.test(rightChar)) {
            return true
        }
    }

    return false
}
/**
 * Return the adjacent numbers' position given a gear (symbol *) position
 * @param {Array<{number: number, init: number, end: number}>}
 */
function getAdjacentNumbers({ gear: {row, col}, input}) {
    const lines = getLines(input)

    const upperRow = lines[row - 1]
    const sameRow =  lines[row]
    const lowerRow = lines[row + 1]

    const adjacentLines = []
    if (upperRow) {
        adjacentLines.push(upperRow)
    }
    adjacentLines.push(sameRow)
    if (lowerRow) {
        adjacentLines.push(lowerRow)
    }
    return print(adjacentLines
        .map(line => getLineNumbers(line))
        .flat()
        .filter(num => !!num))
        .filter(num => {
            const isAdjacent = col >= num.init - 1 && col <= num.end + 1

            console.log('number ' + num.number , isAdjacent ?'is adjacent': 'is not adjacent', 'to gear', {row, col})
            return isAdjacent
        })

}

/**
 *
 * @param {string} line - La línea de texto de entrada.
 * @return {Array<{number: number, init: number, end: number}>} -
 */
function getLineNumbers(line) {
    let number = ''
    let init = null
    const lineNumbers = []
    line.split('').forEach((character, col) => {
        if (character.match(NUM_REGEX)) {
            number = number + character
            init = col - number.length + 1

            const numEnded = init + 1 >= line.length || !NUM_REGEX.test(line[col + 1])

            if (numEnded) {
                lineNumbers.push({number: Number(number), init, end: init + number.length - 1})
                number = ''
                init = null
            }
        }

    })
    console.log({lineNumbers})
    return lineNumbers
}

// TODO borrar
function isAdjacent({number: {init, end, row: numberRow}, gear: {row: gearRow, col: gearCol}}) {
    if (numberRow > gearRow + 1 || numberRow < gearRow -1) {
        return false
    }
    return gearCol >= init - 1 && gearCol <= end + 1
}

const input =
`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

const GEAR_REGEX = new RegExp(/\*/g);

function part2(input) {
    const gears = []
    getLines(input).forEach((line, row) => {
        let match = null
        while ((match = GEAR_REGEX.exec(line)) !== null) {
            gears.push({row, col: match.index})
        }
    })

    return print(gears
        .map((gear) => ({ row: gear.row, col: gear.col, adjacentNumbers: getAdjacentNumbers({ gear, input })}))
        .filter(({adjacentNumbers}) => adjacentNumbers.length === 2)
        .map(({adjacentNumbers}) => adjacentNumbers.map(({number}) => number)))
        .reduce((acc, [a, b]) => a * b, 0)
}

function print(input) {
    console.log('print ', input)
    return input
}

