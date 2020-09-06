import express from "express";
import { join } from "path";
import cors from "cors";
import morgan from "morgan";

const app=express()

app.set('port',3000||process.env.PORT)




app.use(cors())
app.use(morgan('dev'))
app.use(express.static(join(__dirname,'source')))
app.use(express.json())

app.get('/dowload',(req,res)=>{
    res.download(join(__dirname,'source/app.AppImage'))    
})



app.listen(app.get('port'),()=>console.log('start on port',app.get('port'))
)
