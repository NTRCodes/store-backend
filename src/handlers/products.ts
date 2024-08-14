import express, { Request, Response } from "express"
import { Product, ProductStore } from "../models/products"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { verifyAuthToken } from "./utils"


dotenv.config()
const store = new ProductStore();

const index = async (_req: Request, res: Response) => {
  const products = await store.index()
  res.json(products)
}

const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const product = await store.show(id)
    res.json(product)
  } catch (error) {
    console.error(`Could not find product with id ${req.params.id}. Error: ${error}`)
  }
}

const create = async (_req: Request, res: Response) => {
  const product: Product = {
    name: _req.body.name,
    price: _req.body.price,
  }
  try {
    const newProduct = await store.create(product)
    const token = jwt.sign({ product: product }, process.env.TOKEN_SECRET as string)
    res.json({ token: token, product: newProduct })
  } catch (error) {
    console.error(`Could not create Product. Error: ${error}`)
  }
}

const product_routes = (app: express.Application) => {
  app.get('/products', index)
  app.get('/products/:id', show)
  app.post('/products', verifyAuthToken, create)
}

export default product_routes




