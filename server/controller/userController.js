const ApiError = require("../error/index")
const { User } = require("../models/index")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const generateJwt = (id, user, email, roleId, groupId)=>{
  return  jwt.sign(
        {id, user, email, roleId, groupId},
        process.env.SECRET_KEY,
        {expiresIn:'24h'},                    
    )
}

class UserController {
    async registration(req, res){
        const {user, email, password, roleId, groupId} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Email or Password is Invalid'))
        }
        let isCandidate = await User.findOne({where:{email}})
        if(isCandidate){
            return next(ApiError.badRequest('user alredy exists'))
        }
        const hpass = await bcrypt.hash(password,5)
        const person = await User.create({user, email, password:hpass, roleId, groupId})
        const token = generateJwt(person.id, person.user, person.email)
        return res.json({token})
    }

    async login(req, res){

    }

    async check(req, res, next){
        const {id} = req.query
        if(!id){
           return next(ApiError.badRequest('id not puted'))
        }
        res.json(id)
    }
}

module.exports = new UserController()