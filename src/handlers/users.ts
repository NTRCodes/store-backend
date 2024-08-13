import express, { Request, Response } from "express"
import { User, UserStore } from "../models/users"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { verifyAuthToken } from "./utils"

dotenv.config()
const store = new UserStore();

const index = async (_req: Request, res: Response) => {
  const users = await store.index()
  res.json(users)
}

const show = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id)
    const user = await store.show(userId)
    res.json(user)
  } catch (error) {
    console.error(`Could not find User. Error: ${error}`)
  }
}

const create = async (_req: Request, res: Response) => {
  const user: User = {
    firstname: _req.body.firstname,
    lastname: _req.body.lastname,
    password: _req.body.password
  }
  try {
    const newUser = await store.create(user)
    const token = jwt.sign({ user: user }, process.env.TOKEN_SECRET as string)
    res.json({ token: token, user: newUser })
  } catch (error) {
    console.error(`Could not create User. Error: ${error}`)
  }
}

const user_routes = (app: express.Application) => {
  app.get('/users', verifyAuthToken, index)
  app.get('/users/:id', verifyAuthToken, show)
  app.post('/users', create)
}

export default user_routes
