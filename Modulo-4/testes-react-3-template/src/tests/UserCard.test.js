import { render, waitFor, screen } from "@testing-library/react"
import axios from "axios"
import UserCard from "../components/UserCard"

jest.mock("axios")

const axiosResponseMock = {
    data: {
        firstName: "Oleta",
        lastName: "Abbott",
        bank: {
            cardNumber: "3589640949470047",
            cardExpire: "10/23"
        }
    }
}

describe("UserCard", () => {
    test("deve inciar com Loading... e removê-li após o carregamento", async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render(<UserCard />)

        expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument()

        await waitFor(() => {})

        expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    })

    test("deve renderizar as informações do usuário", async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render(<UserCard />)
        
        await waitFor(() => {})

        expect(screen.getByText(/oleta abbott/i)).toBeInTheDocument()
        expect(screen.getByText(/3589 6409 4947 0047/i)).toBeInTheDocument()
        expect(screen.getByText(/10\/23/i)).toBeInTheDocument()

    })
})