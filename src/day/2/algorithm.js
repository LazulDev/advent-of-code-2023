import { getLines } from "../../utils/get-lines.js";

const MAX_CUBES_CONFIG = { red: 12, green: 13, blue: 14 }

export default function algorithm(input) {
    return {
        part1: part1(input),
        part2: part2(input),
    }
}

function part1(input) {
    return getLines(input)
        .map(line => {
            const gameSequences = line.split(': ').at(1)
            let impossible = false
            gameSequences.split(/, |; /).forEach((cube) => {
                let [count, color] = cube.split(' ').map(i => i.trim())

                if (Number(count) > MAX_CUBES_CONFIG[color]) {
                    impossible = true
                    return
                }
            })
            return {
                game: getLineGame(line),
                impossible
            }
        })
        .filter(game => game.impossible === false)
        .map(({game}) => game)
        .reduce((a,b) => a + b, 0)
}

function getLineGame(line) {
    return Number(line.split(':').at(0).split(' ').at(1))
}

function part2(input) {
    return getLines(input).map(line => {
        const [, sequence] = line.split(': ')
        const minCubes = { red: 0, green: 0, blue: 0 }
        
        sequence.split(/, |; /).forEach((cube) => {
            let [count, color] = cube.split(' ').map(i => i.trim())
            if(Number(count) > minCubes[color]) {
                minCubes[color] = Number(count)
            }
        })

        return {...minCubes}
    })
        .reduce((acc, {red, green, blue}) => acc + red*green*blue , 0)
}

