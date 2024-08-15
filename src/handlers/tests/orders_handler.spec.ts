import request from 'supertest';
import express from 'express';
import order_routes from "../orders";
import { getJWT } from '../utils';

const app = express()
app.use(express.json())
order_routes(app)

describe('Orders handler routes', () => {
  it('get: /orders/{id} should return a single order', () => {
    request(app)
      .get('/orders/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.id === 1).toBeTrue()
      })
      .catch((err) => { return err })
  })
})


