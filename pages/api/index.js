const express = require('express')
const cors = require('cors')

//Router
const router_pets = require('./router/pets')

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use(router_pets)

app.listen(port, () => {
    console.log('Zivali API is running')
})