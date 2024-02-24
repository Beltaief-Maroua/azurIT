const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')

dotenv.config({path:'./.env'})

const {postRoutClient}=require('./Router/PostRouter/postRoutClient')
const {updateRoutClient}=require('./Router/UpdateRouter/updateRoutClient')
const {getRoutClient}=require('./Router/GetRouter/getRoutClient')
const {deleteRoutClient}=require('./Router/DeleteRouter/deleteRoutClient')

const {postRoutAdmin}=require('./Router/PostRouter/postRoutAdmin')
const {routerMail}=require('./Router/PostRouter/contactRout')

app.use(cors({
    origin: 'http://localhost:3001', // Update the origin to match your frontend URL
    credentials: true, // Include credentials, if you're using cookies or authentication
}));

app.use(cookieParser())
app.use(express.json())

app.use('/',postRoutClient)
app.use('/',updateRoutClient)
app.use('/',getRoutClient)
app.use('/',deleteRoutClient)
app.use('/',postRoutAdmin)
app.use('/',routerMail)




app.listen(port, ()=>{
    console.log('server is alive')
})
