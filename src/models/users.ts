import client from "../database";

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
}

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

    async show(id:string): Promise<User> {
        try {
            const sql = 'SELECT * FROM users WHERE id=($1);'
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (error){
            throw new Error(`Could not find User with id ${id}. Error: ${error}`)
        }
    }
}