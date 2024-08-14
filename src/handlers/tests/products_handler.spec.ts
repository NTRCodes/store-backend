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
      .get('/products')
      .set('Authorization', `Bearer ${getJWT()}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body).toBeInstanceOf(Array)
      })
      .catch((err) => { return err })

  })
  it('get: /products/{id} should return a single product', () => {
    request(app)
      .get('/products/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.id >= 1).toBeTrue()
      })
      .catch((err) => { return err })
  })
  it('post: /products/ should return a new product', () => {
    request(app)
      .post('/products')
      .send({ name: 'Test', price: 201, category: 'Test category' })
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.id >= 1).toBeTrue()
      })
  })
})


