const MOCKED_CALIBRATION_DOCUMENT = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
const NUMERIC_CHAR_REGEX = '[1-9]'
function main() {
    // TODO get from assets/day/1/input.txt
    const calibrationDocument = MOCKED_CALIBRATION_DOCUMENT
    const lines = calibrationDocument.split('\n')
    const firstCharacters = lines.map(line => line.search(NUMERIC_CHAR_REGEX))
    const lastCharacters = lines.map(line => reverseString(line)).map(line => line.search(NUMERIC_CHAR_REGEX))
    console.log(firstCharacters)
    console.log(lastCharacters)
}
main()

// TODO move to utils

function reverseString(input) {
    return input.split("").reverse().join("")
}
