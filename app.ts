import express from "express"
import type { Request, Response } from "express";
import {collection} from "./src/config/couch.config.ts";
import router from "./src/routes/document.routes.ts";
const app= express()

app.use(express.json())
app.listen(5000, ()=>{
    console.log("Server is running....");
    
})

app.get("/documents",(req:Request,res:Response)=>{
        res.json({
            status:true,
            message:"Documents Here"
        }).status(200)
})

// app.get("/create",async (req:Request,res:Response)=>{
//         await collection.insert("DOC009",{
//             id:"DOC009",
//             title:"Demo Document",
//             pages:200
//         })
//         res.json({success:true, message:"Inserted!"}).status(200)
// })

app.use("/api",router)