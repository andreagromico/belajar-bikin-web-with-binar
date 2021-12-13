const express = require('express')
const session = require('express-session')
const flash = require('express-flash')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(session ({
    secret: 'belajar local strategy',
    resave: false,
    saveUninitialized: false
}))

const passport =require('./lib/passport');
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//pasang view engine ejs
app.set('view engine', 'ejs')

const route = require('./router')
const apiRoute = require('./api/router')
app.use(route)
app.use(apiRoute)

app.listen(3000, () => console.log("Server berjalan di port 3000"));