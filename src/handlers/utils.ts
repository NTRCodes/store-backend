import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

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

