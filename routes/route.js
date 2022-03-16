const express = require(`express`)

const {userReg,findAll,findById,UpdateUser,DeleteUser}= require(`..authUser`)
const Router = express.Router()

Router.post(`/register`,userReg)

Router.get(`/`,findAll)
Router.get(`/id`,findById)

Router.put(`/:id`,UpdateUser)

Router.delete(`/`,DeleteUser)

module.exports = Router
