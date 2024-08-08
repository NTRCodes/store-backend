import express from 'express'
import { Request, Response } from 'express'
import bodyParser from 'body-parser'
import user_routes from "./handlers/users";
import cors from "cors";

const app: express.Application = express()
const address: string = `0.0.0.0:${process.env.SERVER_PORT}`
const corsOptions = {
    origin: 'localhost:3000',
    optionsSuccessStatus: 200 // for those hold head browsers
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(process.env.SERVER_PORT, function () {
    console.log(`starting app on: ${address}`)
})

user_routes(app)

export default app