import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "../Pages/Home/Home";
import { Cart } from "../Pages/Cart/Cart";
import jogos from "../jogos.json"

const Router = (props) => {
    const [games, setGames] = useState(jogos.jogos)

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home 
                    addToCart={props.addToCart}
                    games={games}
                    />} />

                <Route path="/cart" element={<Cart 
                    cart={props.cart}
                    games={games}
                    />}/>
                
            </Routes>
        </BrowserRouter>
    )

    
}
export default Router;