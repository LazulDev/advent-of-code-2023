import { describe, it } from "node:test";
import { algorithm } from "./main";
import assert from "node:assert";

describe('algorithm', () => {
    it('should return 281', () => {
        const { sut } = setup()
        const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`
        const actual = sut(input)
        assert.strictEqual(actual, 281)
    })

    const setup = () => {
        return {
            sut: algorithm
        }
    }
})