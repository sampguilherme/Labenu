import { ProductDatabase } from "../database/ProductDatabase"
import { CreateProductInput, CreateProductOutput, GetProductsInput, GetProductsOutput } from "../dtos/productDTO"
import { BadRequestError } from "../errors/BadRequestError"
import { Product } from "../models/Product"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager
    ) {}

    public getProducts = async (
        input: GetProductsInput
    ): Promise<GetProductsOutput> => {
        const { q, token } = input

        if (typeof q !== "string" && q !== undefined) {
            throw new BadRequestError("'q' deve ser string ou undefined")
        }

        if(typeof token !== 'string'){
            throw new BadRequestError("token esta vazio")
        }

        const payload = this.tokenManager.getPayload(token)

        if(payload === null){
            throw new BadRequestError("token não é valido")
        }

        console.log(payload)

        const productsDB = await this.productDatabase.findProducts(q)

        const products = productsDB.map((productDB) => {
            const product = new Product(
                productDB.id,
                productDB.name,
                productDB.price,
                productDB.created_at
            )

            return product.toBusinessModel()
        })

        const output: GetProductsOutput = products

        return output
    }

    public createProduct = async (
        input: CreateProductInput
    ): Promise<CreateProductOutput> => {
        const { name, price } = input

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof price !== "number") {
            throw new BadRequestError("'price' deve ser number")
        }

        if (name.length < 2) {
            throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres")
        }

        if (price <= 0) {
            throw new BadRequestError("'price' não pode ser zero ou negativo")
        }

        const id = this.idGenerator.generate()

        const newProduct = new Product(
            id,
            name,
            price,
            new Date().toISOString()
        )

        const newProductDB = newProduct.toDBModel()
        await this.productDatabase.insertProduct(newProductDB)

        const output: CreateProductOutput = {
            message: "Producto cadastrado com sucesso",
            product: newProduct.toBusinessModel()
        }

        return output
    }
}