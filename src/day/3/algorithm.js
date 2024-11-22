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

function part2(input) {
    return getLines(input)
}

