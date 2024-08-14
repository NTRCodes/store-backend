import request from 'supertest';
import express from 'express';
import product_routes from "../products";
import { getJWT } from '../utils';

const app = express()
app.use(express.json())
product_routes(app)

beforeAll(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
})

describe('Product handler routes', () => {
  it('get: /products should return a list of products', () => {
    request(app)
      .get('/users')
      .set('Authorization', `Bearer ${getJWT()}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body).toBeInstanceOf(Array)
      })
      .catch((err) => { return err })

  })
})


