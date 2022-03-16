const mongoose = require(`mongoose`);



 const userModels = new mongoose.Schema = ({
  Name:{
      type:string,
      require:true
  },
  Age:{
      type:Number,
      require:true
  },
  favoriteFood:{
      type:[],
      require:true
  },
  Email:{
      type:string,
      require:true
    },
    Phone:{
        type:Number,
        require:true
    }

})
module.exports = mongoose.model (`User`,userModels)
