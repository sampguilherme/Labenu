import exp from "constants"
import { UserBusiness } from "../../src/business/UserBusiness"
import { GetByIdInputDTO } from "../../src/dtos/userDTO"
import { NotFoundError } from "../../src/errors/NotFoundError"
import { USER_ROLES } from "../../src/types"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("deve retornar o usuário que seja igual ao id informado", async () => {
        expect.assertions(1)

        const input: GetByIdInputDTO = {
            idToFind: "id-mock-normal"
        }

        const response = await userBusiness.getById(input)
        
        expect(response).toEqual({
            user:
                {   
                    id: "id-mock-normal",
                    name: "Normal Mock",
                    email: "normal@email.com",
                    password: "hash-bananinha",
                    createdAt: expect.any(String), // valor dinâmico (pode ser qualquer string)
                    role: USER_ROLES.NORMAL
                }
        })
    })

    test("deve retornar um erro caso o id informado não exista", async () => {
        expect.assertions(1)

        try {
            const input: GetByIdInputDTO = {
                idToFind: "id-mock-norm"
            }
    
            const response = await userBusiness.getById(input)
        } catch (error) {
            if(error instanceof NotFoundError){
                expect(error.message).toBe("'id' não existe")
            }
        }
    })
})