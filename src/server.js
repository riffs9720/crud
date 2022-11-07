require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { urlencoded } = require('express')
const morgan = require('morgan')
const routes = require('./routes')
const logger = require('./logger')

require('./database')

const app = express()

app.use(cors());


app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(routes)

logger.info('Aplicação Sequelize-Complog rodando no nível ' + process.env.ENVIRONMENT_LEVEL + ' na porta ' + process.env.PORT)

app.listen(process.env.PORT)
