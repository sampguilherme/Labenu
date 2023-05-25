import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserInputDTO } from "../../src/dtos/userDTO"
import { BadRequestError } from "../../src/errors/BadRequestError"
import { NotFoundError } from "../../src/errors/NotFoundError"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("deleteUser", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("deve disparar um erro caso o token não seja informado", async () => {
        expect.assertions(1)

        try {
            const input: DeleteUserInputDTO = {
                idToDelete: "id-mock",
                token: null
            }

            await userBusiness.deleteUser(input)
        } catch (error) {
            if(error instanceof BadRequestError){
                expect(error.message).toBe("requer token")
            }
        }
    })

    test("deve disparar um erro caso o token informado seja inválido", async () => {
        expect.assertions(1)

        try {
            const input: DeleteUserInputDTO = {
                idToDelete: "id-mock",
                token: "token1"
            }

            await userBusiness.deleteUser(input)
        } catch (error) {
            if(error instanceof BadRequestError){
                expect(error.message).toBe("token inválido")
            }
        }
    })

    test("deve disparar um erro caso um usuário normal tente deletar uma conta", async () => {
        expect.assertions(1)

        try {
            const input: DeleteUserInputDTO = {
                idToDelete: "id-mock",
                token: "token-mock-normal"
            }

            await userBusiness.deleteUser(input)
        } catch (error) {
            if(error instanceof BadRequestError){
                expect(error.message).toBe("somente admins podem deletar contas")
            }
        }
    })

    test("deve disparar um erro caso o id informado não exista", async () => {
        expect.assertions(1)

        try {
            const input: DeleteUserInputDTO = {
                idToDelete: "banana",
                token: "token-mock-admin"
            }

            await userBusiness.deleteUser(input)
        } catch (error) {
            if(error instanceof NotFoundError){
                expect(error.message).toBe("'id' não existe")
            }
        }
    })

    test("deve conter uma mensagem de acerto", async () => {
        expect.assertions(1)

            const input: DeleteUserInputDTO = {
                idToDelete: "id-mock-normal",
                token: "token-mock-admin"
            }

            const result = await userBusiness.deleteUser(input)

            expect(result).toBe("deu certo")
        
    })
})