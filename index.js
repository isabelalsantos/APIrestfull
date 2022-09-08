require('dotenv').config
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()

const Person = require('./models/Person')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

app.get('/', (req, res) =>  { 

    res.json({message: 'Oi Express!'})
})

const DB_USER = 'isabela'
const DB_PASSWORD = encodeURIComponent('algo')

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.thp2mow.mongodb.net/?retryWrites=true&w=majority`
    )
.then(() => { 
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err) => console.log(err))
