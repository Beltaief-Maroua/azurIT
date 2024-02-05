const router = require('express').Router()
const addClient = require('../../Controles/Post/postClient')
router.post('/api/postClient',addClient.postClient)

module.exports = {postRoutClient:router}

