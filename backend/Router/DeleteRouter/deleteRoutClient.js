const router = require('express').Router()
const deleteClient = require('../../Controles/Delete/deleteClient')
router.delete('/api/deleteClient/:id',deleteClient.deleteClient)

module.exports = {deleteRoutClient:router}