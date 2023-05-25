import { UserBusiness } from "../../src/business/UserBusiness"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { SignupInputDTO } from "../../src/dtos/userDTO"


describe("signup", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("deve retorbar token de signup de conta normal", async () => {
        const input: SignupInputDTO = {
            name: "Normal2",
            email: "normal2@email.com",
            password: "bananinha"
        }

        const result = await userBusiness.signup(input)

        expect(result.token).toBe("token-mock-normal")
    })
})

