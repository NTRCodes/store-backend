import request from 'supertest';
import express from 'express';
import user_routes from "../users";
import { getJWT } from '../utils';

const app = express()
app.use(express.json())
user_routes(app)


beforeAll(async () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
})

describe('User Handler Routes Suite', () => {
  it('get: /users should return a list of users as json', async () => {
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
  it('get: /users/{id} should return a single user if they exist', async () => {
    request(app)
      .get('/users/1')
      .set('Authorization', `Bearer ${getJWT()}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.id === 1).toBeTrue()
      })
      .catch((err) => { return err })
  })
  it('post: /users/ should return a single user upon creation', async () => {
    request(app)
      .post('/users')
      .send({ firstname: 'firstname', lastname: 'lastname', password: 'password' })
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res) => {
        expect(res.body.user.password === 'password').toBeFalse()
      })
      .catch((err) => { return err })
  })
})
