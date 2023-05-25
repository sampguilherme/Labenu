import { UserBusiness } from "../../src/business/UserBusiness"
import { SignupInputDTO } from "../../src/dtos/userDTO"
import { BadRequestError } from "../../src/errors/BadRequestError"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("signup", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    
    test("cadastro bem-sucedido retorna token", async () => {
        const input: SignupInputDTO = {
            email: "example@email.com",
            name: "Example Mock",
            password: "bananinha"
        }

        const response = await userBusiness.signup(input)
        expect(response.token).toBe("token-mock-normal")
    })

    test("deve disparar um erro caso name não seja uma string", async () => {
        expect.assertions(2)

        try {
            const input: SignupInputDTO = {
                email: "example@email.com",
                name: null,
                password: "bananinha"
            }

            await userBusiness.signup(input)

        } catch (error) {
            
            if(error instanceof BadRequestError){
                expect(error.message).toBe("'name' deve ser string")
                expect(error.statusCode).toBe(400)
            }
        
        }
    })

    test("deve disparar um erro caso email não seja uma string", async () => {
        expect.assertions(2)

        try {
            const input: SignupInputDTO = {
                email: null,
                name: "guilherme",
                password: "bananinha"
            }

            await userBusiness.signup(input)

        } catch (error) {
            
            if(error instanceof BadRequestError){
                expect(error.message).toBe("'email' deve ser string")
                expect(error.statusCode).toBe(400)
            }
        
        }
    })

    test("deve disparar um erro caso password não seja uma string", async () => {
        expect.assertions(2)

        try {
            const input: SignupInputDTO = {
                email: "example3email.com",
                name: "guilherme2",
                password: null
            }

            await userBusiness.signup(input)

        } catch (error) {
            
            if(error instanceof BadRequestError){
                expect(error.message).toBe("'password' deve ser string")
                expect(error.statusCode).toBe(400)
            }
        
        }
    })

    test("deve disparar um erro caso o email fornecido já tenha sido cadastrado", async () => {
        expect.assertions(1)
        
        try {
            const input: SignupInputDTO = {
                email: "normal@email.com",
                name: "Normal2",
                password: "bananinha"
            }

            await userBusiness.signup(input)
        } catch (error) {
            if(error instanceof BadRequestError){
                expect(error.message).toBe("'email' já existe")
            }
        }
    })
})