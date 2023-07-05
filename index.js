import express from "express"
import { CARS, TEST } from "./contants/routes-contants.js"
import fs from "fs"

const app = express()



app.get(TEST,(req,res)=>{
    res.send({
        type : "test"
    })
})

app.get(CARS, (req,res)=>{
    try{
        const cars = JSON.parse(fs.readFileSync("./database/data.json", { encoding : "utf8", flag : "r" }))
        res.send({
            access : true,
            cars
        })
    }catch(err){
        res.status(401).send({
            access : false
        })
    }
})





app.listen(process.env.PORT || 3010,()=>{
    console.log("server started on "+process.env.PORT+" port");
})