const express = require('express')
const app = express()
const helpers = require('./helpers/handlebars')
const { engine } = require('express-handlebars')
const axios = require('axios').default

require('dotenv').config()

app.engine('handlebars', engine({
    helpers: helpers
}))

app.set('view engine', 'handlebars')

const routes = require('./routes/routes')

app.use(express.urlencoded({extended:true}))

app.use('/', routes)


app.listen(process.env.PORTA, ()=>{
    console.log('Server Rodando na porta:'+process.env.PORTA)
})