import React from "react"
import CardCart from "../../Components/CardCart/CardCart"
import { Header } from "../../Components/Header/Header"
import { priceFormmater } from "../../utils/priceFormatter"
import { Main, Div } from "./style"

export const Cart = (props) => {
    const { cart } = props

    const total = cart.reduce(
        (acc, product) => {
            return product.price * product.quantity + acc
        },
        0
    )

    return (
        <Main>
            <Header />
            <section>
                <h1>Cart</h1>
                <h2>Total: {priceFormmater.format(total)}</h2>
                <hr />
                <Div>
                    {cart.map((games) => (
                        <CardCart games={games} key={games.id}/>
                    ))}
                </Div>
            </section>
        </Main>
    )
}
