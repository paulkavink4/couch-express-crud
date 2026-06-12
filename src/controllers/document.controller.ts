import express from "express"
import type { Request, Response } from "express"
import { createDocument, deleteByid, readDocumentById, updateDocumentById } from "../services/document.services.ts"
import type { Document } from "../interfaces/document.interface.ts"

//INSERT
export const insertDocument=async(req:Request,res:Response)=>{
       const doc= await createDocument(req.body)
        res.status(200).json({
            status:true,
            message:"Inserted Successfully!",
            document:doc
        })
}

//Fetch By ID
export const fetchById=async (req:Request,res:Response)=>{
    const id = req.params.id as string
    const doc= await readDocumentById(id)
    res.status(200).json({
        status:true,
        document:doc
    })

}

//Update by ID
export const updateById=async (req:Request,res:Response)=>{
    await updateDocumentById(req.params.id as string, req.body)
    res.status(201).json({
        success:true,
        message:"Updated Sucessfully"
    })
}

//Delete by ID

export const deleteByID=async(req:Request,res:Response)=>{
        deleteByid(req.params.id as string)
        res.status(202).json({
            status:true,
            message:"Deleted Successfully"
        })
}