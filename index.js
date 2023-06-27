import express from "express"
import { TEST } from "./contants/routes-contants.js"


const app = express()



app.get(TEST,(req,res)=>{
    res.send({
        type : "test"
    })
})



app.listen(process.env.PORT || 3010,()=>{
    console.log("server started on "+process.env.PORT+" port");
})