const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const cookieParser = require('cookie-parser')
// const {connection}= require('./ConfigurationDB/config')

const {postRoutClient}=require('./Router/PostRouter/postRoutClient')
const {updateRoutClient}=require('./Router/UpdateRouter/updateRoutClient')
const {getRoutClient}=require('./Router/GetRouter/getRoutClient')
const {deleteRoutClient}=require('./Router/DeleteRouter/deleteRoutClient')

const {postRoutAdmin}=require('./Router/PostRouter/postRoutAdmin')


app.use(cookieParser())
app.use(express.json())

app.use('/',postRoutClient)
app.use('/',updateRoutClient)
app.use('/',getRoutClient)
app.use('/',deleteRoutClient)

app.use('/',postRoutAdmin)

app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:false,
        optionsSuccessStatus:200
    })
)


app.listen(port, ()=>{
    console.log('server is alive')
})
