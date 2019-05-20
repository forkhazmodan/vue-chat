const User = require('../models').User
const EmailHelper = require('../helpers/email')
const PasswordHelper = require('../helpers/password')

module.exports = {
    list (req, res) {
        return User.findAll({
            attributes: ['id', 'username']
        }).then(users =>  {
            res.status(200).json({users: users})
        }).catch((e) => {
            res.status(400).json({rejected: e})
        })
    },

    signIn (req, res) {
        let errors = []
        const data = req.body.data

        if (typeof data === 'undefined') {
            errors.push({"message": "Request body is undefined"})
        } else if (typeof data.email === 'undefined') {
            errors.push({"message": "Email is missing"})
        } else if (typeof data.password === 'undefined') {
            errors.push({"message": "Password is missing"})
        }

        if (errors.length) {
            return res.status(400).json({result: {
                    errors: errors
            }})
        }

        User.findOne({
            where: {
                email: data.email,
                password: data.password
            }
        }).then(user => {
            return res.status(200).json({result: {
                isLogged: true,
                user: {
                    email: user.email,
                    username: user.username
                }
            }})
        }).catch(e => {
            return res.status(400).json({result: {
                isLogged: false
            }})
        })
    },

    /**
     * Create new user
     * //TODO: rework password hash
     * @param req
     * @param res
     * @returns {*|Json|undefined|Promise<any>}
     */
    signUp (req, res) {

        let errors = []
        const data = req.body.data

        if (typeof data === 'undefined') {
            errors.push({"message": "Request body is undefined"})
        } else if (typeof data.username === 'undefined') {
            errors.push({"message": "Username is missing"})
        } else if (typeof data.email === 'undefined'){
            errors.push({"message": "Email is missing"})
        } else if (typeof data.password === 'undefined') {
            errors.push({"message": "Password is missing"})
        } else if (typeof data.confirm === 'undefined') {
            errors.push({"message": "Confirm field is missing"})
        } else if (data.username.length < 3) {
            errors.push({"message": "Username must be more than 3 symbols"})
        } else if (EmailHelper.validateEmail(data.email) === false) {
            errors.push({"message": "Enter valid email"})
        } else if (PasswordHelper.machPassword(data.password, data.confirm) === false) {
            errors.push({"message": "Confirm is not match"})
        }

        if (errors.length) {
            return res.status(400).json({result: {
                errors: errors
            }})
        }

        User.create({
            username: data.username,
            email: data.email,
            password: data.password
        }).then(user => {
            return res.status(200).json({
               result: {
                   user: {
                       username: user.username,
                       email: user.email
                   }
               }
            })
        }).catch((e) => {

            if (e.name === 'SequelizeUniqueConstraintError') {
                const [error] = e.errors
                const field = error.path

                if (field === 'username') {
                    errors.push({"message": "Such username already registered"})
                } else if(field === 'email') {
                    errors.push({"message": "Such email already registered"})
                }
            }

            if(errors.length) {
                return res.status(400).json({
                    errors: errors
                })
            } else {
                errors.push({"message": "Undefined error"})
                return res.status(400).json({
                    errors: errors,
                    log: e
                })
            }
        })
    }
}
