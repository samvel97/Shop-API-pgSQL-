require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/index')
const cors = require('cors')
const routes = require('./routes/index')
const errorHandling = require('./middleware/errorHandlingMiddleware')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', routes)
app.use(errorHandling)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({
            alter:true
        })
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e);
    }
}


start()