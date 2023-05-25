import { getByText, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TodoList from "../components/TodoList"

describe("TodoList", () => {
    test("Deve renderizar com titulo", () => {
        render(<TodoList />)
        // screen.debug()
        const title = screen.getByText(/todo list/i)
        expect(title).toBeInTheDocument()
    })

    test("Deve renderizar com input vazio", () => {
        render(<TodoList />)
        // screen.debug()
        const input = screen.getByPlaceholderText(/enter a todo/i)
        expect(input).toHaveValue("")
    })

    test("Deve atualizar valor do input ao ser digitado", async () => {
        const user = userEvent.setup()

        render(<TodoList />)
        // screen.debug()
        const input = screen.getByPlaceholderText(/enter a todo/i)
        
        await user.type(input, "Revisar React")

        expect(input).toHaveValue("Revisar React")
    })

    test("Deve renderizar uma nova tarefa ao digitar no input e pressionar enter", async () => {
        const user = userEvent.setup()

        render(<TodoList />)
        const input = screen.getByPlaceholderText(/enter a todo/i)
        
        await user.type(input, "Revisar React{enter}")

        const item = screen.getByText("Revisar React")

        expect(input).toHaveValue("")
        expect(item).toBeInTheDocument()
    })

    test("Deve alterar o status da tarefa quando o botão de alterar status for clicado", async () => {
        const user = userEvent.setup()

        render(<TodoList />)
        const input = screen.getByPlaceholderText(/enter a todo/i)
        
        await user.type(input, "Revisar React{enter}")

        const buttonToggle = screen.getByRole('button', {name: /toggle/i})

        await user.click(buttonToggle)

        const item = screen.getByText("Revisar React")

        expect(item).toHaveStyle("text-decoration: line-through")

        await user.click(buttonToggle)

        expect(item).toHaveStyle("text-decoration: none")

        
    })
})