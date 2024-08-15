import { client } from "../database"

export type Order = {
  id?: number,
  quantity: number,
  user_id: number,
  status: string
}

export class OrderStore {
  async show(id: number) {
    try {
      const sql = 'SELECT * FROM orders where user_id = ($1);'
      const conn = await client.connect()
      const result = await conn.query(sql, [id])
      return result.rows[0]
    } catch (error) {
      throw new Error(`Cannot find any orders. Error: ${error}`)
    }
  }
  async create(order: Order) {
    try {
      const sql = 'INSERT INTO orders (user_id, quantity, status) VALUES ($1, $2, $3) RETURNING *;'
      const conn = await client.connect()
      const result = await conn.query(sql, [order.user_id, order.quantity, order.status])
      return result.rows[0]
    } catch (error) {
      throw new Error(`Cannot add new order. Error: ${error}`)
    }
  }
}
