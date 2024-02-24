const router = require('express').Router();
const contactMail = require('../../Controles/Post/contactMail');
router.post('/api/contactMail',contactMail.nodmail);

module.exports = {routerMail:router};