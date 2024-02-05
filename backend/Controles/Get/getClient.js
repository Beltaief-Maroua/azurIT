const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    getClient:((req,res)=>{
        const query= "select * from client"
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}