const express= require(`express`);
const connectDB = require(`connectDB`);
const { route } = require("./routes/route");

// local middleware
const logger = (req,res,next)=>{
    true? next(): res.send(`blocked`)
}

// connect to DB
connectDB()

const app = express()

app.use(express.json())
app.use(logger)

app.use(`/`,route)

app.listen(process.env.port,(err) => {
    err? console.log(`server connected Failed`):
    console.log(`server connected on ${process.env.port}`)
})






