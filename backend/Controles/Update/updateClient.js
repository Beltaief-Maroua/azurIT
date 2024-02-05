const { connection } = require("../../ConfigurationDB/config")

module.exports = {
  updateClient: (req, res) => {
    console.log(req.body);
    const query = `UPDATE client SET clientName="${req.body.clientName}",clientMail="${req.body.clientMail}",service="${req.body.service}",etat="${req.body.etat}" WHERE id="${req.params.id}"`;
    connection.query(query, (error, result) => {
      error ? res.status(500).send(error) : res.status(200).send('Update Client OK');
    });
  },
};
