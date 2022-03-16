const user = require("../models/user");

exports.userReg  = async (req,res) => {
  const newUser = await newUser ({...req.body})
  const Email = newUser.Email
  try {
      const user = await user.find({Email})
      if(user) 
      return res.status(401).json({mesg:`Email is used succes`});
      newUser.save()  
  } catch (error) {
      res.status(401).json({msg:`Email is failed`,errors:error})
  }
}

exports.findAll = async (req,res)=>{
    try {
        const search = await user.find()
        res.status(201).json({msg:`find user succes`,search})
        
    } catch (error) {
        res.status(401).json({msg:`user is not find`,errors:error})

    }
}

exports.findById = async (req,res)=>{
    try {
        const search = await user.findOne({_id:req.params.id})
        res.status(201).json({msg:`find succes`,search:search})
    } catch (error) {
   res.status(401).json({msg:`find search Failed`,errors:error})     
    }
}

exports.UpdateUser = async(req,res)=>{
    try {
        const update = await Contact.UpdateOne({_id:req.params.id},{$set:{...req.body}})
        res.status(201).json({msg:`update succes`,updated:update})
    } catch (error) {
        res.status(401).json({msg:`update Failed`,errors:error})
    }
}
exports.DeleteUser = async (req,res) => {
    try {
        const search = await user.deleteOne({_id:req.params.id})
        res.status(200).json({msg:`delete user succes`})
    } catch (error) {
        res.status(400).json({msg:`do not delete User`,errors:error})
    }
}