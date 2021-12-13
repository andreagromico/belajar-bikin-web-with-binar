const route = require('express').Router()
const router = require('./api/router');
const {articles, users} = require('./controllers')

//route-user
route.get('/', articles.index);
route.post('/article', articles.create)
route.get('/article/create', articles.vCreate)
route.get('/articles', articles.findAll)
route.get('/article/:id', articles.findOne)

//route-user
route.get('/users', users.index)
route.get('/register', users.vRegister)
route.post('/register', users.register)
route.get('/login', users.vLogin)
router.post('/login', users.login)

module.exports = route