import { describe, it } from "node:test";
import { algorithm } from "./main";
import assert from "node:assert";

describe('algorithm', () => {
    it('should return 142', () => {
        const { sut } = setup()
        const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
        const actual = sut(input)
        assert.strictEqual(actual, 142)
    })

    const setup = () => {
        return {
            sut: algorithm
        }
    }
})