import express, { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { verifyAuthToken } from "./utils"
import { Order, OrderStore } from "../models/orders"
import dotenv from 'dotenv'

const store = new OrderStore()
dotenv.config()

const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const order = await store.show(id)
    res.json(order)
  } catch (error) {
    console.error(`Could not find order with id ${req.params.id}. Error: ${error}`)
  }
}

const create = async (req: Request, res: Response) => {
  const order: Order = {
    user_id: req.body.name,
    quantity: req.body.price,
    status: req.body.status
  }

  try {
    const newOrder = await store.create(order)
    const token = jwt.sign({ order: order }, process.env.TOKEN_SECRET as string)
    res.json({ token: token, order: newOrder })
  } catch (error) {
    console.error(`Could not create Order. Error: ${error}`)
  }
}

const order_routes = (app: express.Application) => {
  app.get('/orders/:user_id', verifyAuthToken, show)
}

export default order_routes
