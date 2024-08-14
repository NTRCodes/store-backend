import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { User } from '../models/users'

export const verifyAuthToken = (req: Request, res: Response, next: Function) => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]
    const decoded = jwt.verify(token as string, process.env.TOKEN_SECRET as string)
    next()
  } catch (error) {
    res.status(401)
  }
}

export const getJWT = () => {
  const user: User = {
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password'
  }

  const token = jwt.sign({ user: user }, process.env.TOKEN_SECRET as string)
  return token
}


