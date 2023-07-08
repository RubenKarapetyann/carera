import express from "express"
import { CARS, TEST, CAR } from "./contants/routes-contants.js"
import fs from "fs"

const app = express()
app.use(express.static("./images"))

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



app.get(CAR, (req,res)=>{
    try{
        const { id } = req.params
        const cars = JSON.parse(fs.readFileSync("./database/data.json", { encoding : "utf8", flag : "r" }))
        const currentCar = cars.find(car=>car.id===+id)
        res.send({
            access : true,
            car : {...currentCar.characteristics}
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