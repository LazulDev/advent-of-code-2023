import { describe, it } from "node:test";
import assert from "node:assert";
import algorithm from "./algorithm.js";

describe('algorithm', () => {
    it('part1: should return 4361', () => {
        const { sut } = setup()
        const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`
        const actual = sut(input).part1
        assert.strictEqual(actual, 4361)
    })

    it.todo('part2: should return 467835')

    const setup = () => {
        return {
            sut: algorithm
        }
    }
})
