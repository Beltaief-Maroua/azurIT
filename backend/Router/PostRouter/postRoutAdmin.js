const router = require('express').Router()
const postAdmin = require('../../Controles/Post/postAdmin')
router.post('/api/postAdmin',postAdmin.postAdmin)

module.exports = {postRoutAdmin:router}
