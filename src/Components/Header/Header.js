import React from "react"
import { HeaderStyled, H1, Button } from "./style"
import CartIcon from "../../Assets/cart.svg"
import { useNavigate } from "react-router-dom"
import { goToCartPage, goToHomePage } from "../../Router/coordinator"



export const Header = () => {
  const navigate = useNavigate()
    return (
            <HeaderStyled>
              <H1 onClick={() => goToHomePage(navigate)}>GoldenFoot</H1>
              <Button onClick={() => goToCartPage(navigate)}>
                <img src={CartIcon} alt="Cart icon"/>
              </Button>
            </HeaderStyled>
    )
}