import { algorithm } from './algorithm.js';
import getInput from "../../utils/get-input.js";

// TODO: extraer main a archivo común
function main() {
    const input = getInput({day: 1})
    const result = algorithm(input)
    // TODO: implement part 2
    console.log(result)
}
main()
