import express from "express"
import { deleteByID, fetchById, insertDocument, updateById } from "../controllers/document.controller.ts"

const router=express.Router()

router.post("/create",insertDocument)
router.get("/get/:id",fetchById)
router.put("/update/:id",updateById)
router.delete("/delete/:id",deleteByID)

export default router