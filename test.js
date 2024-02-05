const express = require('express')
const app = express()
const port = 3090
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');

// Center Crud
const {postRoutCenter}=require('./Router/PostRouter/postRoutCenter')
const {getRoutCenter}=require('./Router/GetRouter/getRoutCenter')
const {updateRoutCenter}=require('./Router/UpdateRouter/updateRoutCenter')
const {deleteRoutCenter}=require('./Router/DeleteRouter/deleteRoutCenter')


app.use(cookieParser())
app.use(express.json())


// Center Crud
app.use('/',postRoutCenter)
app.use('/',getRoutCenter)
app.use('/',updateRoutCenter)
app.use('/',deleteRoutCenter)


app.listen(port, ()=>{
    console.log('http://localhost:'+port)
    console.log('server is alive')
})


