const mongoose = require(`mongoose`);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Data is connected Successfuly`);
        
    } catch (error) {
        console.log(`Data is Failed Connect`, error);
    }
  
}
module.exports = connectDB
