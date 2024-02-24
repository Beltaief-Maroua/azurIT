const router = require('express').Router()
const updateClient = require('../../Controles/Update/updateClient')

router.put('/api/updateClient/:id',updateClient.updateClient)

module.exports = {updateRoutClient:router}