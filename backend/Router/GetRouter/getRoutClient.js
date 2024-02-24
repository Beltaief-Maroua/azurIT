const router = require('express').Router()
const getClient = require('../../Controles/Get/getClient')

router.get('/api/getClient',getClient.getClient)

module.exports = {getRoutClient:router}
