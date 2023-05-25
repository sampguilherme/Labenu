import express from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { ProductController } from "../controller/ProductController"
import { ProductDatabase } from "../database/ProductDatabase"
import { idGenerator } from "../services/IdGenerator"

export const productRouter = express.Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new idGenerator()
    )
)

productRouter.get("/", productController.getProducts)
productRouter.post("/", productController.createProduct)