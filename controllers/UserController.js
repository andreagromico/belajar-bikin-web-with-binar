const passport = require('passport')
const { User } = require ('../models')

module.exports = {
    index: (req, res) => {
        res.send('ini controller user')
    },
    vRegister:(req, res) => {
        const title ='Register'
        res.render('users/register', {title})
    },
    register:(req, res, next) => {
        User.register(req.body)
        .then(() => {
            res.redirect('/login')
        })
        .catch(err =>{
            next(err)
        })
    },
    vLogin:(req, res) => {
        res.render('users/login')
    },
    login:passport.authenticate('local', {
        successRedirect:'/',
        failureRedirect:'/login',
        failureFlash: true
    })

}