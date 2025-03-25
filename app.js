const express = require('express');

const connectDb = require('./database');

connectDb()
const bookRoutes = require('./routes')

const app = express()
app.use(express.json())

app.use('/api',bookRoutes);

app.listen(3000,()=>{
    console.log("server running on 3000")
})