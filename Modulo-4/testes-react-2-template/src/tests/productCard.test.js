import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
import ProductCard from "../components/ProductsList/ProductCard"

const productMock = {
    id: 1,
    image: "image.png",
    title: "product test",
    price: 10
}

const addToCartMock = jest.fn()

describe("ProductCard", () => {
    test("testa a renderiação do card do produto", () => {
        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)

        const title = screen.getByText("product test")
        expect(title).toBeInTheDocument()
    })

    test("testa a renderização do titulo, imagem, preço e botão de compra", () => {
        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)

        const title = screen.getByRole('heading', { name: /product test/i })
        const image = screen.getByRole('img', { name: /product test/i })
        const price = screen.getByText(/\$10\.00/i)
        const buyBtn = screen.getByRole('button', { name: /buy/i })
        screen.logTestingPlaygroundURL()

        expect(title).toBeInTheDocument()
        expect(image).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(buyBtn).toBeInTheDocument()
    })

    test("deve adicionar o produto ao carrinho quando o botão for clicado", async () => {
        const user = userEvent.setup()

        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)

        const buyBtn = screen.getByRole('button', { name: /buy/i })

        await user.click(buyBtn)

        expect(addToCartMock).toBeCalled()
    })
})