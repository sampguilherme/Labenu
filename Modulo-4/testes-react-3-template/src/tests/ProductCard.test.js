import { render, waitFor, screen } from "@testing-library/react"
import ProductCard from "../components/ProductCard"
import axios from "axios"

jest.mock("axios")

const axiosResponseMock = {
    data: {
        title: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png"
    }
}

describe("ProductCard", () => {
    test("renderiza", async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render(<ProductCard />)
        await waitFor (() => {})
    })

    test("renderiza apenas o loading", async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render(<ProductCard />)

        const loading = screen.getByText(/loading\.\.\./i)
        expect(loading).toBeInTheDocument()
        expect(screen.queryByText(/macbook pro/i)).not.toBeInTheDocument()

        await waitFor(() => {})
    })

    test("renderiza apenas o produto completo", async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)

        render(<ProductCard />)

        await waitFor(() => {
            const title = screen.getByRole('heading', { name: /macbook pro/i })

            expect(title).toBeInTheDocument()

            expect(screen.getByRole('img', {
                name: /thumbnail for macbook pro/i
              })
            ).toBeInTheDocument()

            expect(screen.getByText(
                /macbook pro 2021 with mini\-led display may launch between september, november/i
                )
            ).toBeInTheDocument()

            expect(screen.getByText(/\$1749/i)).toBeInTheDocument()
        })
        
        expect(screen.queryByText("Loading...")).not.toBeInTheDocument()

    })
})