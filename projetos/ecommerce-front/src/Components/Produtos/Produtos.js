import { useState } from "react"
import { DivPrincipal, Filtros, Carrinho, Itens, GamesContainer, Input, Select } from "./style"
import jogos from "../../jogos.json"
import CardJogo from "../CardJogo/CardJogo.js"
import { CardCarrinho } from "../CardCarrinho/CardCarrinho"


export const Produtos = () => {
    const [search, setSearch] = useState("")
    const [alphabeticalOrder, setAlphabeticalOrder] = useState("")
    const [minValue, setMinValue] = useState("")
    const [maxValue, setMaxValue] = useState("")
    const [orderByValue, setOrderByValue] = useState("")
    const [productsCart, setProductsCart] = useState([])
    
    const [games, setGames] = useState(jogos.jogos)
    
    function addProduct(id) {
        const i = productsCart.findIndex((item) => item.id === id)
        console.log(i)
        if (i !==  -1) {
            productsCart[i] = {...productsCart[i], amount: productsCart[i].amount + 1}
        } else {
            const gameEncontrado = games.find((game) => game.id === id)
            const newGame = {...gameEncontrado, amount: 1}
            const newList = [...productsCart, (productsCart[1] = newGame)]

            setProductsCart(newList)
        }
    }

    const renderGames = games.filter((game) => {
        return game.name.toLowerCase().includes(search.toLowerCase())
    })
    .filter((game) => {
        return game.price >= minValue
    })
    .filter((game) => {
        if(maxValue >= 1){
            return game.price <= maxValue
        } else if (maxValue < 1) {
            return game.price >= minValue
        }
    })
    .sort((a, z) => {
        if(alphabeticalOrder === "A-Z"){
            if(a.name < z.name){
                return -1
            } else {
                return 1
            }
        } else if(alphabeticalOrder === "Z-A"){
            if(a.name < z.name){
                return 1
            } else {
                return -1
            }
        }
    })
    .sort((smallValue, biggerValue) => {
        if(orderByValue === "crescente"){
            if(smallValue.price < biggerValue.price){
                return -1
            } else {
                return 1
            }
        } else if(orderByValue === "decrescente"){
            if(smallValue.price < biggerValue.price){
                return 1
            } else {
                return -1
            }
        }
    })
    .map((game) => {
        return <CardJogo
        key={game.id}
        id={game.id}
        name={game.name}
        price={game.price}
        image={game.image}
        addProduct={addProduct}
        />
    })

    return (
        <DivPrincipal>
            <Filtros>Filtrar
                    <Input 
                    placeholder="Nome do Jogo" 
                    value={search}
                    type="text" 
                    onChange={(e) => setSearch(e.target.value)}/>
                    <Select value={alphabeticalOrder} onChange={(e) => setAlphabeticalOrder(e.target.value)}>
                        <option value="">Ordem alfabética</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </Select>
                    <Select value={orderByValue} onChange={(e) => setOrderByValue(e.target.value)}>
                        <option value="">Ordenar por valor</option>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </Select>
                    <Input
                    placeholder="Valor minimo"
                    value={minValue} type="Number"
                    onChange={(e) => setMinValue(e.target.value)}
                    />
                    <Input
                    placeholder="Valor maximo"
                    value={maxValue} type="Number"
                    onChange={(e) => setMaxValue(e.target.value)}
                    />
            </Filtros>
            <GamesContainer>
                {renderGames}
            </GamesContainer>
            <Carrinho>Carrinho</Carrinho>
        </DivPrincipal>
    )
}

