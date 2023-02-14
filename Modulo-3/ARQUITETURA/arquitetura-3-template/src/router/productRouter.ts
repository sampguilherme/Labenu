import express from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { ProductController } from "../controller/ProductController"
import { ProductDatabase } from "../database/ProductDatabase"
import { ProductDTO } from "../dtos/ProductDTO"

export const productRouter = express.Router()

const productController = new ProductController(
    new ProductDTO(),
    new ProductBusiness(
            new ProductDatabase,
            new ProductDTO
        )
)

productRouter.get("/", productController.getProducts)
productRouter.post("/", productController.createProduct)
productRouter.put("/:id", productController.editProduct)
productRouter.delete("/:id", productController.deleteProduct)
