import 'dotenv/config'
export { con } from './repository/connection.js'

import express from 'express'
import cors from 'cors'

const server=express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, ( ) => console.log(`API CONECTADA NA PORTA ${process.env.PORT}`))