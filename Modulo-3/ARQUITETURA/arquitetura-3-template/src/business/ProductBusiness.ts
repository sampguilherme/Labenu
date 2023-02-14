import { ProductDatabase } from "../database/ProductDatabase"
import { CreateProductInputDTO, EditProductInputDTO, ProductDTO } from "../dtos/ProductDTO"
import { BadRequestError } from "../errors/BadRequestError"
import { NotFoundError } from "../errors/NotFoundError"
import { Product } from "../models/Product"
import { ProductDB } from "../types"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private productDTO: ProductDTO
    ){}

    public getProducts = async (input: any) => {
        const { q } = input

        const productsDB = await this.productDatabase.findProducts(q)

        const products: Product[] = productsDB.map((productDB) => new Product(
            productDB.id,
            productDB.name,
            productDB.price,
            productDB.created_at
        ))

        return products
    }

    public createProduct = async (input: CreateProductInputDTO) => {
        const { id, name, price } = input

        if (name.length < 2) {
            throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres")
        }

        if (price <= 0) {
            throw new BadRequestError("'price' não pode ser zero ou negativo")
        }

        const productDBExists = await this.productDatabase.findProductById(id)

        if (productDBExists) {
            throw new BadRequestError("'id' já existe")
        }

        const newProduct = new Product(
            id,
            name,
            price,
            new Date().toISOString()
        )

        const newProductDB: ProductDB = {
            id: newProduct.getId(),
            name: newProduct.getName(),
            price: newProduct.getPrice(),
            created_at: newProduct.getCreatedAt()
        }

        await this.productDatabase.insertProduct(newProductDB)

        // const output = {
        //     message: "Produto registrado com sucesso",
        //     product: newProduct
        // }

        const output = this.productDTO.createProductOutput(newProduct)

        return output
    }

    public editProduct = async (input: EditProductInputDTO) => {
        const {
            idToEdit,
            newId,
            newName,
            newPrice,
            newCreatedAt
        } = input

       
        
        if (newName !== undefined) {
            if (newName.length < 2) {
                throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres")
            }
        }
        
        if (newPrice !== undefined) {
            if (newPrice <= 0) {
                throw new BadRequestError("'price' não pode ser zero ou negativo")
            }
        }

        const productToEditDB = await this.productDatabase.findProductById(idToEdit)

        if (!productToEditDB) {
            throw new NotFoundError("'id' para editar não existe")
        }

        const product = new Product(
            productToEditDB.id,
            productToEditDB.name,
            productToEditDB.price,
            productToEditDB.created_at
        )

        newId && product.setId(newId)
        newName && product.setName(newName)
        newPrice && product.setPrice(newPrice)
        newCreatedAt && product.setCreatedAt(newCreatedAt)

        const updatedProductDB: ProductDB = {
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice(),
            created_at: product.getCreatedAt()
        }

        await this.productDatabase.updateProduct(updatedProductDB)

        const output = {
            message: "Produto editado com sucesso",
            product: product
        }

        return output
    }

    public deleteProduct = async (input: any) => {
        const { idToDelete } = input

        const productToDeleteDB = await this.productDatabase.findProductById(idToDelete)

        if (!productToDeleteDB) {
            throw new NotFoundError("'id' para deletar não existe")
        }

        await this.productDatabase.deleteProductById(productToDeleteDB.id)

        const output = {
            message: "Produto deletado com sucesso"
        }

        return output
    }
}