import request from 'supertest';
import express from 'express';
import user_routes from "../users";
import { User, UserStore } from '../../models/users'

// Since we have a test database we can use that instead of mocks??
const app = express()
app.use(express.json())
user_routes(app)

beforeAll(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
})

describe('User Handler Routes Suite', () => {
  // it('/users should return a list of users as json', async () => {
  //     const response = await request(app).get('/users')
  //     expect(response.status).toBe(200)
  //     expect(response.headers['content-type']).toMatch(/json/)
  //     expect(response.body).toBeInstanceOf(Array<User>)
  // });
  //
  // it('/users/:id should return a single user if they exist', async () => {
  //     const response = await request(app).get('/users/1')
  //     expect(response.status).toBe(200)
  //     expect(response.headers['content-type']).toMatch(/json/)
  //     expect(response.body).toContain({})
  // });
});
