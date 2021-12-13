const {Article} = require('../models')

module.exports = {
    index: (req, res) => {
        console.log(Article);
    },

    create: (req, res) => {
        const {title, body} = req.body
        Article.create({
            title: title,
            body: body,
            approved: true
        }). 
        then(respon => {
            res.json(respon)
        })
    },

    vCreate: (req, res) => {
        res.render('articles/create')
    },

    findAll: (req, res) =>{
        Article.findAll({}).then(data => {
            res.render('articles/index', {data})
        })
    },

    findOne: (req, res) => {
        Article.findOne({where: {id: req.params.id}})
        .then(article => {
            res.render('articles/show', {article})
        })
    }
}