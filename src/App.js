import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Router from "./Router/Router";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (productToAdd) => {
      const newCart = [...cart]

      const productFound = newCart.find((productInCart) => productInCart.id === productToAdd.id)

      if(!productFound){
        const newProduct = {...productToAdd, quantity: 1}
        newCart.push(newProduct)
      } else {
        productFound.quantity++
      }

      setCart(newCart)
  }

  

  return (
    <>
      <GlobalStyle/>
      <Router 
        addToCart={addToCart}
        cart={cart}
      />
    </>
  )
}

export default App;
