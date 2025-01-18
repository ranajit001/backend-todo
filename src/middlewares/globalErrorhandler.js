 const globalErrorhandler =( err, req,res,next)=>{
    if(err){
        console.log(err.stack)
        return res.status(err.status|| 500).send(err.message);
    }
    next();
 }

 export{globalErrorhandler}

 