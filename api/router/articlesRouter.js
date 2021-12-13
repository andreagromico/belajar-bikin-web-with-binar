const router = require('express').Router()
const {article, articles} = require('../../controllers')

//localhost:3000/article/new
router.get('/', articles.index)
//router.get('/:id,', article.findOne)

module.exports = router