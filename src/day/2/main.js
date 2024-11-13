import algorithm from "./algorithm.js";

const EXAMPLE_CALIBRATION_DOCUMENT = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

function main() {
    const result = algorithm(EXAMPLE_CALIBRATION_DOCUMENT)
    console.log(result)
}
main()
