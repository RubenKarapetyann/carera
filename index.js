import express from "express"
import { CARS, TEST, CAR, MAP } from "./contants/routes-contants.js"
import fs from "fs"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carera.official.biz@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  });

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
            car : {...currentCar.characteristics, model : currentCar.model}
        })
    }catch(err){
        res.status(401).send({
            access : false
        })
    }
})

app.get(MAP, (req,res)=>{
    try{
        const mapdata = JSON.parse(fs.readFileSync("./database/mapdata.json", { encoding : "utf8", flag : "r" }))
        res.send({
            access : true,
            mapdata
        })
    }catch(err){
        res.status(401).send({
            access : false
        })
    }
})

app.post(FEEDBACK,(req,res)=>{
    const mailOptions = {
        from: 'carera.official.biz@gmail.com',
        to: req.body.email,
        subject: 'response to your feedback',
        text: req.body.description
    }
    setTimeout(()=>{
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          })
    },60000)

    res.send({
        access : true
    })
})

app.listen(process.env.PORT || 3010,()=>{
    console.log("server started on "+process.env.PORT+" port");
})