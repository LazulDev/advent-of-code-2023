const NUMERIC_CHAR_REGEX = '[1-9]'
export function algorithm(calibrationDocument) {
    const lines = calibrationDocument.split('\n')
    const firstCharacters = lines
        .map(line => line.at(line.search(NUMERIC_CHAR_REGEX)))
    const lastCharacters = lines
        .map(line => reverseString(line))
        .map(line => line.at(line.search(NUMERIC_CHAR_REGEX)))

    const linesDigit = []
    lines.forEach((_, index) => {
        linesDigit.push(firstCharacters[index]+lastCharacters[index])
    })
    
    return sumArray(linesDigit.map(str => +str))
}

// TODO move to utils
function reverseString(input) {
    return input.split("").reverse().join("")
}

function sumArray(arr) {
    let sum = 0
    arr.forEach(res => {
        sum += res
    })
    return sum
}