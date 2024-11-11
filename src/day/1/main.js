const MOCKED_CALIBRATION_DOCUMENT = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
function main() {
    // TODO get from assets/day/1/input.txt
    const calibrationDocument = MOCKED_CALIBRATION_DOCUMENT
    // Get lines
    const lines = calibrationDocument.split('\n')
    console.log(lines)
}
main()

// TODO move to utils

function reverseString(input) {
    return input.split("").reverse().join("")
}