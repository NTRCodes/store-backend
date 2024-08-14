import { client } from '../database'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

export type User = {
  id?: number
  firstname: string
  lastname: string
  password: string
}

dotenv.config()

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const conn = await client.connect()
      const sql = 'SELECT * FROM users;'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Cannot get users ${error}`)
    }
  }

  async show(id: number): Promise<User> {
    try {
      const sql = 'SELECT * FROM users WHERE id=($1);'
      const conn = await client.connect()
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Could not find User with id ${id}. Error: ${error}`)
    }
  }

  async create(user: User): Promise<User> {
    try {
      const sql = 'INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING *;'
      const conn = await client.connect()
      const hashedPassword = bcrypt.hashSync(user.password + process.env.BCRYPT_PASSWORD, parseInt(process.env.SALT_ROUNDS as string))
      const result = await conn.query(sql, [user.firstname, user.lastname, hashedPassword])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Could not create User. Error: ${error}`)
    }
  }
}

