const router = require('express').Router()
const getClient = require('../../Controles/Get/getClient')
const cors = require('cors')
cors({
    origin:'http://localhost:3000',
    credentials:false,
    optionsSuccessStatus:200
})
router.get('/api/getClient',cors(),getClient.getClient)

module.exports = {getRoutClient:router}
