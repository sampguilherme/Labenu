import { fixacao } from "../src/fixacao"

describe("fixacao", () => {
    test("deve receber uma string e retornar um array de strings onde casa item é uma letra da palavra original", () => {
        const result = fixacao("dev")

        expect(result).toEqual(["d", "e", "v"])
        
    })
})