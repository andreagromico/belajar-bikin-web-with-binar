const router = require ('express').Router()
const article = require ('./articlesRouter')
//const user =

router.use('./api/article', article)
//router.use('./api/user')

module.exports = router