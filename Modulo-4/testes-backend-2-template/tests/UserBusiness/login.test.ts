import { UserBusiness } from "../../src/business/UserBusiness"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { LoginInputDTO } from "../../src/dtos/userDTO"

describe("login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("retornar token de login da conta normal", async () => {
        const input: LoginInputDTO = {
            email: "normal@email.com",
            password: "bananinha"
        }

        const result = await userBusiness.login(input)

        expect(result.token).toBe("token-mock-normal")
    })

    test("retornar token de login da conta admin", async () => {
        const input: LoginInputDTO = {
            email: "admin@email.com",
            password: "bananinha"
        }

        const result = await userBusiness.login(input)

        expect(result.token).toBe("token-mock-admin")
    })
})