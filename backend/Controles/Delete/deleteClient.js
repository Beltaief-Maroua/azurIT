const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    deleteClient:((req,res)=>{
        console.log("merciiiiii")
        const query= `DELETE FROM client WHERE id="${req.params.id}" `
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send("Client is deleted")
        })
        
        // res.send("")
        
    })
}