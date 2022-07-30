const express = require ('express')
const postgres = require ('pg')
const cors = require ('cors')
const app = express();

//middlewares
app.use(express.json())
app.use(cors())

//ROUTES//
//register and login routes
app.use('/auth', require('./Routes/Auth'));


//dashboard route
app.use("/dashboard",require ('./Routes/dashaboard'));

app.listen(5000, ()=>{
    console.log("server is listenng at 5000");
} )