const {connection}= require('../../ConfigurationDB/config')

module.exports = {
    postAdmin:((req,res)=>{
        const query= "SELECT * FROM admin WHERE adminMail = ? AND adminPassword = ?"
        connection.query(query,[req.body.adminMail,req.body.adminPassword],(error,result)=>{
            if(result.length>0){
                console.log(result)
                res.send("Login OK")
            } else{
                res.send("error Login")
            }
        })
    })
}