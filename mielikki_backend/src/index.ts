import express from "express";
import { join } from "path";
import cors from "cors";
import morgan from "morgan";
/*import jwtHandle from "./jwt";*/
require('dotenv').config()


const linux ={
        appImage:process.env.NAME_LINUX_APP_IMAGE,
        deb:process.env.NAME_LINUX_DEB
}

const win={
    x32:process.env.NAME_WIN_32,
    x64:process.env.NAME_WIN_64
}
/*
const tokenSign={
    linux:{
        appImage:jwtHandle(linux.appImage),
        deb:jwtHandle(linux.deb)
        },
    win:{
        x32:jwtHandle(win.x32),
        x64:jwtHandle(win.x64)
    }
}
*/


const app=express()


app.set('port',process.env.PORT||3001)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get(`/dowload`,(req,res)=>{
    const {token} =req.query
    console.log(token ==linux.appImage)
    


switch (token) {
    case linux.appImage:
        //@ts-ignore
        return res.download(join(__dirname,'source','linux',linux.appImage))        
        break;
    case linux.deb:
        //@ts-ignore
        return res.download(join(__dirname,'source','linux',linux.deb))        
        break;
    case win.x32:
        //@ts-ignore
        return res.download(join(__dirname,'source','win','x32',win.x32))  
        break;
    case win.x64:
        //@ts-ignore
        return res.download(join(__dirname,'source','win','x64',win.x64))        
        break;
    default:
        return res.json({error:'query not found'})
        break;    }
})





app.get('*',(req,res)=>{
res.json({error:"url nor found",msm:"https://camicasii.xyz/"})
})

app.listen(app.get('port'),()=>console.log('start on port',app.get('port'))
)
