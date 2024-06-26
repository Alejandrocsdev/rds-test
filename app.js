require('dotenv').config()

const express = require('express')

const app = express()

const port = process.env.PORT || 3001

const cors = require('cors')

const routes = require('./routes')

app.use(cors())

app.use(express.json())

app.use('/api', routes)

app.listen(port, () => console.info(`Server running on port: ${port}`))