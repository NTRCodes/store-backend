import client from '../database'

export type Product = {
  id?: number
  name: string
  price: number
  category?: string
}

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const sql = 'SELECT * FROM products;'
      const conn = await client.connect()
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (error) {
      throw new Error(`Cannot get products${error}`)
    }
  }

  async show(id: number): Promise<Product> {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1);'
      const conn = await client.connect()
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Cannot find product with id: ${id}. Error: ${error}`)
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      const sql = 'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *;'
      const conn = await client.connect()
      const result = await conn.query(sql, [product.name, product.price, product.category])
      conn.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Could not create product. Error: ${error}`)
    }
  }
}
