import express from 'express'
import { Request, Response } from 'express'
import bodyParser from 'body-parser'
import user_routes from "./handlers/users";
import product_routes from './handlers/products';
import order_routes from './handlers/orders';
import cors from "cors";

const app: express.Application = express()
const address: string = `0.0.0.0:${process.env.SERVER_PORT}`
const corsOptions = {
  origin: 'localhost:3000',
  optionsSuccessStatus: 200 // for those hold head browsers
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/', function (_req: Request, res: Response) {
  res.send('Welcome to the storefront backend project!')
})

app.listen(process.env.SERVER_PORT, function () {
  console.log(`starting app on: ${address}`)
})

order_routes(app)
user_routes(app)
product_routes(app)

export default app
