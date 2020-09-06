import express from "express";
import { join } from "path";
import cors from "cors";
import morgan from "morgan";

const app=express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.static(join(__dirname,'source')))
app.use(express.json())

app.get('/dowload',(req,res)=>{
    res.download(join(__dirname,'source/app.AppImage'))    
})



app.listen(4000,()=>console.log('start')
)
