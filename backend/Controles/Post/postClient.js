const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    postClient:((req,res)=>{
        const query=`INSERT INTO client(clientName,clientMail,service,etat)VALUES("${req.body.clientName}","${req.body.clientMail}","${req.body.service}","${req.body.etat}");`
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("client has been created")
        })
    })
}

