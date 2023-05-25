import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "../components/Counter"

describe("Counter", () => {
    test("Deve aumentar em 3 o contador quando o botão de incremento for clicado 3 vezes", async () => {
        render(<Counter />)
        const user = userEvent.setup()

        const buttonIncrement = screen.getByRole('button', { name: /\+/i })

        const contador = screen.getByText("0")

        await user.click(buttonIncrement)
        await user.click(buttonIncrement)
        await user.click(buttonIncrement)

        expect(contador).toBeInTheDocument("3")
    })
})